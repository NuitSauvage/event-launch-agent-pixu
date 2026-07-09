import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8501);

loadDotEnv();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (request.method === "GET" && url.pathname === "/api/config") {
      return sendJson(response, {
        openaiConfigured: Boolean(process.env.OPENAI_API_KEY),
        brightDataConfigured: Boolean(process.env.BRIGHT_DATA_API_KEY),
      });
    }
    if (request.method === "POST" && url.pathname === "/api/transcribe") {
      return handleTranscribe(request, response);
    }
    if (request.method === "POST" && url.pathname === "/api/brightdata-search") {
      return handleBrightDataSearch(request, response);
    }
    if (request.method === "POST" && url.pathname === "/api/event-research") {
      return handleEventResearch(request, response);
    }
    return serveStatic(url.pathname, response);
  } catch (error) {
    return sendJson(response, { error: "Server error", detail: error.message }, 500);
  }
}).listen(port, () => {
  console.log(`Event Launch Agent running at http://localhost:${port}/`);
});

async function handleTranscribe(request, response) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return sendJson(response, { error: "OPENAI_API_KEY is not configured on the local server." }, 501);
  }

  const body = await readJson(request);
  if (!body.audioBase64) {
    return sendJson(response, { error: "audioBase64 is required." }, 400);
  }

  const mimeType = body.mimeType || "audio/webm";
  const audioBytes = Buffer.from(body.audioBase64, "base64");
  const form = new FormData();
  form.append("model", process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe");
  form.append("file", new Blob([audioBytes], { type: mimeType }), "voice.webm");
  if (body.language) form.append("language", body.language);

  const upstream = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  const text = await upstream.text();
  if (!upstream.ok) {
    return sendJson(response, { error: "OpenAI transcription failed.", detail: safeDetail(text) }, upstream.status);
  }
  return sendJson(response, JSON.parse(text));
}

async function handleBrightDataSearch(request, response) {
  const apiKey = process.env.BRIGHT_DATA_API_KEY;
  if (!apiKey) {
    return sendJson(response, { error: "BRIGHT_DATA_API_KEY is not configured on the local server." }, 501);
  }

  const body = await readJson(request);
  const payload = {
    query: body.query || "best event ideas for AI builders",
    mode: body.mode || "standard",
    language: body.language || "en",
    country: body.country || "US",
    format: "json",
    num_results: Number(body.num_results || 10),
  };

  const upstream = await fetch("https://api.brightdata.com/discover", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const text = await upstream.text();
  if (!upstream.ok) {
    return sendJson(response, { error: "Bright Data search failed.", detail: safeDetail(text) }, upstream.status);
  }
  return sendJson(response, JSON.parse(text));
}

async function handleEventResearch(request, response) {
  const apiKey = process.env.BRIGHT_DATA_API_KEY;
  if (!apiKey) {
    return sendJson(response, { error: "BRIGHT_DATA_API_KEY is not configured on the local server." }, 501);
  }

  const body = await readJson(request);
  const profile = body.profile || {};
  const conversation = String(body.conversation || "").slice(0, 4000);
  const queries = buildEventResearchQueries(profile, conversation);

  const settled = await Promise.allSettled(
    queries.map(async (section) => {
      let payload = null;
      let items = [];
      let source = "Bright Data Discover API";
      let brightDataTaskId = "";
      try {
        payload = await runBrightDataDiscover(apiKey, section.query, Number(body.num_results || 6));
        brightDataTaskId = payload?.task_id || "";
        items = extractSearchItems(payload).slice(0, 5);
      } catch (error) {
        source = `Bright Data unavailable: ${safeDetail(error.message)}`;
      }
      if (!items.length) {
        const fallbackItems = await runDuckDuckGoSearch(section.fallbackQuery || section.query);
        if (fallbackItems.length) {
          source = brightDataTaskId ? "DuckDuckGo web search; Bright Data returned an async task id" : "DuckDuckGo web search";
          items = fallbackItems.slice(0, 5);
        } else if (section.secondaryFallbackQuery) {
          const secondaryItems = await runDuckDuckGoSearch(section.secondaryFallbackQuery);
          if (secondaryItems.length) {
            source = brightDataTaskId ? "DuckDuckGo web search; Bright Data returned an async task id" : "DuckDuckGo web search";
            items = secondaryItems.slice(0, 5);
          }
        }
      }
      if (!items.length) {
        if (brightDataTaskId) {
          source = "Bright Data returned an async task id; no immediate web results were found";
        }
      }
      return {
        ...section,
        source,
        brightDataTaskId,
        items,
      };
    }),
  );

  const sections = settled.map((result, index) => {
    if (result.status === "fulfilled") return result.value;
    return {
      ...queries[index],
      items: [],
      error: safeDetail(result.reason?.message || String(result.reason)),
    };
  });

  const successfulSections = sections.filter((section) => section.items.length);
  if (!successfulSections.length) {
    return sendJson(response, { error: "Bright Data research returned no usable results.", sections }, 502);
  }

  return sendJson(response, {
    live: true,
    provider: "Internet research",
    searched_at: new Date().toISOString(),
    sections,
  });
}

function buildEventResearchQueries(profile, conversation) {
  const city = profile.city || "the target city";
  const domain = Array.isArray(profile.domain) && profile.domain.length ? profile.domain.join(" ") : "event topic";
  const audience = Array.isArray(profile.target_audience) && profile.target_audience.length ? profile.target_audience.join(" ") : "target audience";
  const goal = profile.goal || "event goal";
  const venue = profile.venue_type || "event venue";
  const brief = conversation ? ` Brief: ${conversation}` : "";

  return [
    {
      key: "topic",
      title: "Topic and demand",
      query: `${domain} ${city} event trends demand meetups communities 2026.${brief}`,
      fallbackQuery: `${domain} events ${city} meetups`,
      secondaryFallbackQuery: `${domain} meetup event`,
    },
    {
      key: "audience",
      title: "Audience and communities",
      query: `${audience} communities meetups newsletters groups ${city} ${domain}.${brief}`,
      fallbackQuery: `${audience} tech communities ${city}`,
      secondaryFallbackQuery: `${audience} developer community`,
    },
    {
      key: "venue",
      title: "Venue and location fit",
      query: `${venue} ${city} tech meetup event venue Wi-Fi projector capacity community space.${brief}`,
      fallbackQuery: `${venue} ${city} tech event venue`,
      secondaryFallbackQuery: `${city} tech meetup venue`,
    },
    {
      key: "examples",
      title: "Similar events",
      query: `similar successful events ${domain} ${city} ${audience} Luma Eventbrite Meetup.${brief}`,
      fallbackQuery: `${domain} ${city} Eventbrite Luma Meetup`,
      secondaryFallbackQuery: `${domain} Eventbrite Meetup`,
    },
    {
      key: "promotion",
      title: "Promotion channels",
      query: `best promotion channels for ${domain} event ${city} ${audience} LinkedIn newsletters communities.${brief}`,
      fallbackQuery: `${domain} ${city} tech newsletter community LinkedIn`,
      secondaryFallbackQuery: `how to promote a tech meetup LinkedIn newsletter`,
    },
    {
      key: "risks",
      title: "Risks and positioning",
      query: `${domain} event risks positioning differentiation for ${audience} ${goal} ${city}.${brief}`,
      fallbackQuery: `${domain} event positioning differentiation ${audience}`,
      secondaryFallbackQuery: `event positioning differentiation tech meetup`,
    },
  ];
}

async function runBrightDataDiscover(apiKey, query, numResults) {
  const upstream = await fetch("https://api.brightdata.com/discover", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      query,
      mode: "standard",
      language: "en",
      country: "US",
      format: "json",
      num_results: numResults,
      remove_duplicates: true,
    }),
  });

  const text = await upstream.text();
  if (!upstream.ok) {
    throw new Error(`Bright Data search failed: ${safeDetail(text)}`);
  }
  return JSON.parse(text);
}

function extractSearchItems(payload) {
  const rawItems = Array.isArray(payload) ? payload : payload.results || payload.data || payload.items || [];
  return rawItems.map((item, index) => {
    if (typeof item === "string") {
      return { title: `Result ${index + 1}`, snippet: item, url: "" };
    }
    return {
      title: item.title || item.name || item.url || `Result ${index + 1}`,
      url: item.url || item.link || item.source_url || "",
      snippet: item.description || item.snippet || item.content || item.text || "",
      source: item.source || item.domain || "",
    };
  });
}

async function runDuckDuckGoSearch(query) {
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const upstream = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 Event Launch Agent MVP",
      Accept: "text/html",
    },
  });
  if (!upstream.ok) return [];
  const html = await upstream.text();
  return extractDuckDuckGoHtmlResults(html);
}

function extractDuckDuckGoHtmlResults(html) {
  const results = [];
  const resultRegex = /<a[^>]+class="[^"]*result__a[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = resultRegex.exec(html)) && results.length < 5) {
    const nextStart = resultRegex.lastIndex;
    const nextMatch = html.slice(nextStart).match(/<a[^>]+class="[^"]*result__a/gi);
    const end = nextMatch?.index ? nextStart + nextMatch.index : Math.min(html.length, nextStart + 2500);
    const resultBlock = html.slice(nextStart, end);
    const snippetMatch = resultBlock.match(/<a[^>]+class="[^"]*result__snippet[^"]*"[^>]*>([\s\S]*?)<\/a>|<div[^>]+class="[^"]*result__snippet[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    const url = normalizeDuckDuckGoUrl(decodeHtml(match[1]));
    const title = decodeHtml(stripTags(match[2]));
    const snippet = snippetMatch ? decodeHtml(stripTags(snippetMatch[1] || snippetMatch[2] || "")) : "";
    if (title || url) {
      results.push({
        title: title || url,
        url,
        snippet,
        source: "DuckDuckGo",
      });
    }
  }
  return results;
}

function normalizeDuckDuckGoUrl(url) {
  if (url.startsWith("//")) url = `https:${url}`;
  try {
    const parsed = new URL(url);
    const redirected = parsed.searchParams.get("uddg");
    return redirected ? decodeURIComponent(redirected) : url;
  } catch {
    return url;
  }
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .trim();
}

async function serveStatic(urlPath, response) {
  const requested = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const safePath = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(__dirname, safePath);
  if (!filePath.startsWith(__dirname) || !existsSync(filePath)) {
    return sendText(response, "Not found", 404, "text/plain; charset=utf-8");
  }
  const extension = path.extname(filePath);
  const content = await readFile(filePath);
  response.writeHead(200, { "Content-Type": mimeTypes[extension] || "application/octet-stream" });
  response.end(content);
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function sendJson(response, payload, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function sendText(response, text, status, contentType) {
  response.writeHead(status, { "Content-Type": contentType });
  response.end(text);
}

function safeDetail(text) {
  return text.replace(/sk-[A-Za-z0-9_-]+/g, "[redacted]").slice(0, 1200);
}

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [rawKey, ...rest] = trimmed.split("=");
    const key = rawKey.trim();
    const value = rest.join("=").trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}
