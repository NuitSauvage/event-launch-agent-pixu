const options = {
  organizerType: [
    "community builder",
    "AWS host / community builder",
    "founder",
    "university",
    "accelerator",
    "VC",
    "student club",
    "corporate innovation team",
  ],
  venueType: ["AWS Builder Loft", "cafe", "university", "coworking space", "conference venue", "online"],
  domain: [
    "AI agents",
    "Codex",
    "coding tools",
    "cloud",
    "startups",
    "robotics",
    "data science",
    "RAG",
    "evals",
    "multimodal AI",
    "finance",
    "research",
  ],
  goal: [
    "attract builders",
    "launch community",
    "promote product",
    "recruit talent",
    "generate leads",
    "educate audience",
    "create networking",
  ],
  audience: [
    "engineers",
    "founders",
    "students",
    "researchers",
    "operators",
    "investors",
    "technical builders",
    "beginners",
    "AI builders",
  ],
  budget: ["free", "low budget", "sponsored", "paid"],
  duration: ["1 hour", "2 hours", "evening", "half-day", "full-day"],
  platform: ["Luma", "Eventbrite", "Meetup", "LinkedIn", "Discord", "all", "Luma + Eventbrite + Meetup"],
  tone: ["serious builder", "serious builder but friendly", "friendly", "premium", "casual", "academic", "startup-like"],
};

const currentTrends = [
  "Codex build day",
  "AI coding agents",
  "Claude Code vs Codex vs Cursor",
  "Agentic AI on AWS",
  "AI agent evals and observability",
  "RAG for internal copilots",
  "MCP and tool-using agents",
  "AI security for coding agents",
  "Multimodal AI apps",
  "Founder workflow automation with agents",
  "AI research-to-product sessions",
  "Agent deployment and cloud workflows",
  "Local-first AI tools",
  "Human-in-the-loop agents",
  "AI product prototyping nights",
];

const trendingTemplates = [
  ["Build with AI Agents: Codex, AWS & Practical Workflows", "AI agents", "Hands-on workshop", "A practical evening for builders to see agent workflows, compare tools, and leave with a launchable prototype path.", "engineers, founders, AI builders, technical operators", "AI coding agents are moving from demos into everyday development and cloud deployment workflows.", ["AI agents", "Codex", "cloud", "coding tools", "AWS", "builders"]],
  ["Codex Build Night: From Idea to Working AI App", "Coding tools", "Build day", "A focused build night where attendees turn one idea into a small working app using Codex-style workflows.", "engineers, founders, students, AI builders", "Builders want less theory and more hands-on practice with AI-assisted product development.", ["Codex", "AI agents", "coding tools", "startups"]],
  ["AI Coding Agents Showdown: Claude Code vs Codex vs Cursor", "Tool comparison", "Tool comparison session", "A live comparison of popular AI coding tools across real builder tasks, tradeoffs, and workflow patterns.", "engineers, technical builders, founders", "Teams are choosing AI coding stacks now and need practical signal instead of hype.", ["Claude Code vs Codex vs Cursor", "Codex", "coding tools", "AI coding agents"]],
  ["Agentic AI on AWS: From Prototype to Deployment", "Cloud", "Technical deep dive", "A technical session on taking an agent prototype into reliable cloud workflows and deployment patterns.", "engineers, operators, founders, cloud builders", "The hard part is shifting from local prototypes to observable, deployable agent systems.", ["Agentic AI on AWS", "cloud", "Agent deployment and cloud workflows", "AI agents"]],
  ["AI Agent Evals & Observability Night", "AI quality", "Technical deep dive", "A builder-focused night on testing, evaluating, and observing agent behavior before launch.", "engineers, researchers, technical builders", "Agent quality, reliability, and evaluation have become must-have topics for serious builders.", ["AI agent evals and observability", "evals", "AI agents"]],
  ["MCP and Tool-Using Agents Lab", "Agent tooling", "Hands-on workshop", "A guided lab for designing agents that use tools, context, and structured workflows responsibly.", "engineers, AI builders, technical operators", "MCP and tool-using agents are becoming a shared language for practical agent systems.", ["MCP and tool-using agents", "AI agents", "coding tools"]],
  ["RAG for Internal Copilots: Builder Patterns", "RAG", "Hands-on workshop", "A practical session on retrieval patterns, evaluation, and internal copilot use cases.", "engineers, operators, data science teams", "Organizations still need dependable internal AI assistants that use their own knowledge safely.", ["RAG for internal copilots", "RAG", "data science"]],
  ["AI Security for Coding Agents", "Security", "Technical deep dive", "A focused session on risks, review patterns, and safeguards for AI-assisted software development.", "engineers, technical operators, founders", "More generated code means more need for practical security habits in agent workflows.", ["AI security for coding agents", "AI agents", "coding tools"]],
  ["Founder Workflow Automation with Agents", "Startups", "Founder/operator roundtable", "A founder-friendly session on automating research, sales, support, and operations with agent workflows.", "founders, operators, startup teams", "Small teams are using agents to compress operational work and test ideas faster.", ["Founder workflow automation with agents", "startups", "AI agents"]],
  ["AI Product Prototyping Night", "Product", "Build day", "A collaborative night for turning AI product ideas into rough demos and clear next steps.", "founders, engineers, students, AI builders", "The best AI learning happens when people ship small, real things together.", ["AI product prototyping nights", "startups", "AI agents"]],
];

const evergreenTemplates = [
  ["Hands-on AI Builder Workshop", "Workshop", "Hands-on workshop", "A practical session where attendees learn by building a small project together.", "engineers, students, founders, technical builders", "Hands-on formats consistently convert curiosity into community momentum.", ["AI agents", "coding tools", "cloud"]],
  ["Community Demo Night", "Demo night", "Demo night", "A lightweight showcase for builders to share what they are making and meet collaborators.", "builders, founders, students, investors", "Demo nights create repeatable reasons for a community to gather.", ["startups", "AI agents"]],
  ["Founder and Operator Roundtable", "Roundtable", "Founder/operator roundtable", "A curated discussion around practical problems, workflows, and lessons from the field.", "founders, operators, investors", "Roundtables create high-trust conversations with minimal production overhead.", ["startups", "finance"]],
  ["Beginner-to-Builder AI Workshop", "Education", "Beginner-to-builder workshop", "An accessible workshop that helps beginners ship their first useful AI workflow.", "beginners, students, operators", "Beginner-friendly entry points expand the top of the community funnel.", ["AI agents", "coding tools"]],
  ["Office Hours with Technical Mentors", "Office hours", "Office hours", "Small-group help sessions for projects, architecture questions, and launch feedback.", "engineers, founders, students", "Office hours work well when a community needs trust and repeat engagement.", ["cloud", "startups", "coding tools"]],
  ["Lightning Talks and Show-and-Tell", "Community", "Lightning talks", "A fast-paced evening of short talks, demos, and community introductions.", "engineers, founders, students, technical builders", "Short formats lower the barrier to speaking and participation.", ["AI agents", "startups"]],
  ["Problem-First Networking Night", "Networking", "Problem-first networking", "A structured networking event where attendees match around problems they want to solve.", "founders, operators, engineers, investors", "Problem-first networking helps avoid shallow mixer dynamics.", ["startups", "cloud"]],
  ["Mini Accelerator Night", "Accelerator", "Mini accelerator night", "A compact session covering idea, customer, demo, pitch, and next-step feedback.", "founders, students, technical builders", "Short accelerator-style events give builders useful structure without long commitments.", ["startups", "AI agents"]],
  ["Technical Deep Dive Evening", "Technical education", "Technical deep dive", "A focused technical session on one topic, with practical architecture and implementation detail.", "engineers, researchers, technical builders", "Deep dives attract serious attendees and signal community quality.", ["cloud", "data science", "AI agents"]],
  ["Community Breakfast for Builders", "Community", "Community breakfast", "A lighter networking format for relationship-building before the workday starts.", "founders, engineers, operators", "Breakfast events can be efficient for busy local communities.", ["startups", "cloud"]],
];

const columns = [
  "title",
  "category",
  "format",
  "summary",
  "target_audience",
  "why_now",
  "trend_relevance",
  "audience_fit",
  "venue_fit",
  "ease_to_execute",
  "networking_potential",
  "sponsor_potential",
  "differentiation",
  "final_score",
];

let state = {};
let lastAssistantReply = "";
let lastAssistantLanguage = "en-US";
let recognition = null;
let voiceConversationActive = false;
let voiceTranscriptBuffer = "";
let voiceSubmitTimer = null;
let mediaRecorder = null;
let mediaStream = null;
let mediaChunks = [];
let mediaStopTimer = null;
let accumulatedBrief = "";
let pendingQuestions = [];
let conversationTurns = [];
let currentConfidence = {};
let assistantSuggestions = {};
let pendingQuestionKey = "";
let customAnswers = {};
let customAnswerValues = {};
let researchInsights = [];
let researchWasLive = false;
let researchStatusText = "Internet research has not run yet.";

const questionTexts = {
  city: "Where should this event happen?",
  domain: "What should the event be about?",
  target_audience: "Who should be in the room?",
  goal: "What is the main goal?",
  expected_attendance: "How many people should attend?",
};

function eventFromTemplate(item) {
  return {
    title: item[0],
    category: item[1],
    format: item[2],
    summary: item[3],
    target_audience: item[4],
    why_now: item[5],
    tags: item[6],
  };
}

function fillSelect(id, values, selected) {
  const select = document.getElementById(id);
  select.innerHTML = values
    .map((value) => `<option value="${escapeAttr(value)}"${value === selected ? " selected" : ""}>${value}</option>`)
    .join("");
}

function fillChecks(containerId, values, selectedValues) {
  const selected = new Set(selectedValues);
  document.getElementById(containerId).innerHTML = values
    .map(
      (value) => `
      <label class="check-item">
        <input type="checkbox" value="${escapeAttr(value)}"${selected.has(value) ? " checked" : ""} />
        <span>${escapeHtml(value)}</span>
      </label>`,
    )
    .join("");
}

function initForm() {
  fillSelect("organizerType", options.organizerType, "AWS host / community builder");
  fillSelect("venueType", options.venueType, "AWS Builder Loft");
  fillSelect("goal", options.goal, "attract builders");
  fillSelect("budget", options.budget, "free");
  fillSelect("duration", options.duration, "evening");
  fillSelect("platform", options.platform, "Luma + Eventbrite + Meetup");
  fillSelect("tone", options.tone, "serious builder but friendly");
  fillChecks("domainOptions", options.domain, ["AI agents", "Codex", "coding tools", "cloud"]);
  fillChecks("audienceOptions", options.audience, ["engineers", "founders", "operators", "technical builders", "AI builders"]);
}

function checkedValues(containerId) {
  return [...document.querySelectorAll(`#${containerId} input:checked`)].map((input) => input.value);
}

function readProfile() {
  return {
    organizer_type: value("organizerType"),
    venue_type: value("venueType"),
    city: value("city"),
    domain: checkedValues("domainOptions"),
    goal: value("goal"),
    target_audience: checkedValues("audienceOptions"),
    budget: value("budget"),
    duration: value("duration"),
    platform: value("platform"),
    tone: value("tone"),
    expected_attendance: Number(value("expectedAttendance") || 30),
    organizer_name: value("organizerName"),
    address: value("address"),
    timezone: value("timezone"),
  };
}

async function analyzeBrief() {
  const text = value("briefPrompt");
  if (!text) {
    const fallbackQuestion = pendingQuestions[0] || questionTexts.domain;
    setAssistantReply("Tell me a bit more so I can continue. If you do not know, write: I do not know.", lastAssistantLanguage, [fallbackQuestion]);
    setPromptForNextQuestion(fallbackQuestion);
    return;
  }

  const isFirstTurn = !accumulatedBrief;
  addConversationTurn("You", text);

  const language = detectLanguage([accumulatedBrief, text].filter(Boolean).join("\n"));
  if (pendingQuestionKey && isUnknownAnswer(text)) {
    const suggestion = applySuggestionForUnknown(pendingQuestionKey);
    accumulatedBrief = [accumulatedBrief, suggestion.context].filter(Boolean).join("\n");
    addConversationTurn("Assistant", suggestion.reply);
  } else {
    if (pendingQuestionKey) {
      const applied = applyAnswerForCurrentQuestion(pendingQuestionKey, text);
      if (applied.context) accumulatedBrief = [accumulatedBrief, applied.context].filter(Boolean).join("\n");
    }
    accumulatedBrief = [accumulatedBrief, text].filter(Boolean).join("\n");
  }

  const inferred = inferProfileFromText(accumulatedBrief);
  inferred.confidence = { ...inferred.confidence, ...assistantSuggestions, ...customAnswers };
  currentConfidence = inferred.confidence;
  applyProfileToForm(inferred.profile);
  const profile = applyConversationAnswers(readProfile());
  const missing = findMissingQuestions(profile, inferred.confidence);
  pendingQuestions = missing;
  regenerate();

  const nextQuestion = missing[0];
  pendingQuestionKey = getQuestionKey(nextQuestion);
  const reply = buildAssistantReply(language, profile, nextQuestion ? [nextQuestion] : [], inferred.found, isFirstTurn);
  setAssistantReply(reply, voiceLangFor(language), nextQuestion ? [nextQuestion] : []);
  if (!isUnknownAnswer(text)) addConversationTurn("Assistant", reply);
  setPromptForNextQuestion(nextQuestion);
  if (!nextQuestion) {
    await launchResearchAndReport(profile);
    showReportPage();
  }
}

function inferProfileFromText(text) {
  const normalized = normalizeText(text);
  const profile = {};
  const found = [];
  const confidence = {};

  const city = extractCity(text);
  if (city) {
    profile.city = city;
    confidence.city = true;
    found.push(`city: ${city}`);
  }

  const attendance = text.match(/\b(\d{1,4})\s*(people|attendees|persons|personnes|personas|participants|guests|builders)?\b/i);
  if (attendance) {
    profile.expected_attendance = Number(attendance[1]);
    confidence.expected_attendance = true;
    found.push(`attendance: ${attendance[1]}`);
  }

  profile.organizer_type = matchOption(normalized, options.organizerType, {
    "aws host / community builder": ["aws", "builder loft", "cloud host"],
    "community builder": ["community", "communaute", "meetup"],
    founder: ["founder", "startup founder", "fondateur", "fondatrice"],
    university: ["university", "universite", "campus"],
    accelerator: ["accelerator", "accelerateur"],
    VC: ["vc", "venture", "investor"],
    "student club": ["student club", "club etudiant"],
    "corporate innovation team": ["corporate", "innovation team", "enterprise"],
  });
  if (profile.organizer_type) {
    confidence.organizer_type = true;
    found.push(`organizer: ${profile.organizer_type}`);
  }

  profile.venue_type = matchOption(normalized, options.venueType, {
    "AWS Builder Loft": ["aws builder loft", "builder loft"],
    cafe: ["cafe", "coffee"],
    university: ["university", "campus", "universite"],
    "coworking space": ["coworking", "workspace"],
    "conference venue": ["conference venue", "conference", "venue"],
    online: ["online", "remote", "virtual", "en ligne"],
  });
  if (profile.venue_type) {
    confidence.venue_type = true;
    found.push(`venue: ${profile.venue_type}`);
  }

  profile.domain = matchMany(normalized, options.domain, {
    "AI agents": ["ai agent", "agents ia", "agentic", "agent"],
    Codex: ["codex"],
    "coding tools": ["coding", "code", "developer tool", "dev tool", "outils de code"],
    cloud: ["cloud", "aws", "deployment"],
    startups: ["startup", "founder"],
    robotics: ["robot"],
    "data science": ["data science", "data"],
    RAG: ["rag", "retrieval"],
    evals: ["eval", "observability", "evaluation"],
    "multimodal AI": ["multimodal", "voice", "image", "video"],
    finance: ["finance", "fintech"],
    research: ["research", "recherche"],
  });
  if (profile.domain.length) {
    confidence.domain = true;
    found.push(`domain: ${profile.domain.join(", ")}`);
  }

  profile.goal = matchOption(normalized, options.goal, {
    "attract builders": ["attract builder", "builders", "attirer"],
    "launch community": ["launch community", "new community", "lancer une communaute"],
    "promote product": ["promote product", "product launch", "promouvoir"],
    "recruit talent": ["recruit", "talent", "hiring"],
    "generate leads": ["lead", "sales"],
    "educate audience": ["educate", "teach", "workshop", "former", "apprendre"],
    "create networking": ["networking", "connect", "rencontre", "reseautage"],
  });
  if (profile.goal) {
    confidence.goal = true;
    found.push(`goal: ${profile.goal}`);
  }

  profile.target_audience = matchMany(normalized, options.audience, {
    engineers: ["engineer", "developer", "dev", "ingenieur"],
    founders: ["founder", "startup", "fondateur", "fondatrice"],
    students: ["student", "etudiant"],
    researchers: ["researcher", "chercheur"],
    operators: ["operator", "ops", "technical operator"],
    investors: ["investor", "vc"],
    "technical builders": ["technical builder", "builder", "builders"],
    beginners: ["beginner", "debutant"],
    "AI builders": ["ai builder", "ai builders", "builders ia"],
  });
  if (profile.target_audience.length) {
    confidence.target_audience = true;
    found.push(`audience: ${profile.target_audience.join(", ")}`);
  }

  profile.budget = matchOption(normalized, options.budget, {
    free: ["free", "gratuit", "no budget"],
    "low budget": ["low budget", "small budget", "petit budget"],
    sponsored: ["sponsor", "sponsored"],
    paid: ["paid", "ticket", "payant"],
  });
  if (profile.budget) {
    confidence.budget = true;
    found.push(`budget: ${profile.budget}`);
  }

  profile.duration = matchOption(normalized, options.duration, {
    "1 hour": ["1 hour", "one hour", "1h", "une heure"],
    "2 hours": ["2 hours", "two hours", "2h", "deux heures"],
    evening: ["evening", "night", "tonight", "soir", "soiree"],
    "half-day": ["half-day", "half day", "demi journee"],
    "full-day": ["full-day", "full day", "journee"],
  });
  if (profile.duration) {
    confidence.duration = true;
    found.push(`duration: ${profile.duration}`);
  }

  profile.platform = matchOption(normalized, options.platform, {
    "Luma + Eventbrite + Meetup": ["luma eventbrite meetup", "eventbrite luma meetup"],
    Luma: ["luma"],
    Eventbrite: ["eventbrite"],
    Meetup: ["meetup"],
    LinkedIn: ["linkedin"],
    Discord: ["discord"],
    all: ["all platforms", "everywhere", "toutes les plateformes"],
  });
  if (profile.platform) {
    confidence.platform = true;
    found.push(`platform: ${profile.platform}`);
  }

  profile.tone = matchOption(normalized, options.tone, {
    "serious builder but friendly": ["serious builder but friendly", "friendly technical", "serieux mais sympa"],
    "serious builder": ["serious builder", "technical", "serieux"],
    friendly: ["friendly", "warm", "chaleureux", "sympa"],
    premium: ["premium"],
    casual: ["casual", "relaxed", "decontracte"],
    academic: ["academic", "research", "universitaire"],
    "startup-like": ["startup-like", "startup"],
  });
  if (profile.tone) {
    confidence.tone = true;
    found.push(`tone: ${profile.tone}`);
  }

  if (normalized.includes("ams cg")) {
    profile.organizer_name = "AMS CG / AWS Builder Community";
  }
  if (normalized.includes("san francisco")) {
    profile.address = "San Francisco, CA";
    profile.timezone = "America/Los_Angeles";
  }

  return { profile, found, confidence };
}

function applyProfileToForm(profile) {
  setIfPresent("organizerType", profile.organizer_type);
  setIfPresent("venueType", profile.venue_type);
  setIfPresent("city", profile.city);
  setIfPresent("goal", profile.goal);
  setIfPresent("budget", profile.budget);
  setIfPresent("duration", profile.duration);
  setIfPresent("platform", profile.platform);
  setIfPresent("tone", profile.tone);
  setIfPresent("expectedAttendance", profile.expected_attendance);
  setIfPresent("organizerName", profile.organizer_name);
  setIfPresent("address", profile.address);
  setIfPresent("timezone", profile.timezone);
  if (profile.domain?.length) setChecks("domainOptions", profile.domain);
  if (profile.target_audience?.length) setChecks("audienceOptions", profile.target_audience);
}

function setIfPresent(id, valueToSet) {
  if (valueToSet === undefined || valueToSet === null || valueToSet === "") return;
  document.getElementById(id).value = valueToSet;
}

function setChecks(containerId, values) {
  const selected = new Set(values);
  document.querySelectorAll(`#${containerId} input`).forEach((input) => {
    input.checked = selected.has(input.value);
  });
}

function findMissingQuestions(profile, confidence) {
  const missing = [];
  if (!profile.city || !confidence.city) missing.push(questionTexts.city);
  if (!confidence.domain) missing.push(questionTexts.domain);
  if (!confidence.target_audience) missing.push(questionTexts.target_audience);
  if (!confidence.goal) missing.push(questionTexts.goal);
  if (!confidence.expected_attendance) missing.push(questionTexts.expected_attendance);
  return missing.slice(0, 3);
}

function getQuestionKey(question) {
  return Object.keys(questionTexts).find((key) => questionTexts[key] === question) || "";
}

function isUnknownAnswer(text) {
  const normalized = normalizeText(text);
  return [
    "i dont know",
    "i do not know",
    "not sure",
    "no idea",
    "you choose",
    "choose for me",
    "je ne sais pas",
    "j sais pas",
    "choisis",
    "choisis pour moi",
    "pas d idee",
    "pas d'idee",
  ].some((phrase) => normalized.includes(normalizeText(phrase)));
}

function applyAnswerForCurrentQuestion(key, text) {
  const cleaned = text.trim();
  if (!cleaned) return { context: "" };

  if (key === "domain") {
    const inferred = inferProfileFromText(cleaned);
    const domains = inferred.profile.domain?.length ? inferred.profile.domain : [cleaned];
    if (inferred.profile.domain?.length) {
      setChecks("domainOptions", inferred.profile.domain);
    }
    customAnswers.domain = true;
    customAnswerValues.domain = domains;
    return { context: `User answered topic: ${domains.join(", ")}.` };
  }

  if (key === "city") {
    setIfPresent("city", cleaned);
    setIfPresent("address", cleaned);
    customAnswers.city = true;
    customAnswerValues.city = cleaned;
    return { context: `User answered city/location: ${cleaned}.` };
  }

  if (key === "target_audience") {
    const inferred = inferProfileFromText(cleaned);
    const audience = inferred.profile.target_audience?.length ? inferred.profile.target_audience : [cleaned];
    if (inferred.profile.target_audience?.length) {
      setChecks("audienceOptions", inferred.profile.target_audience);
    }
    customAnswers.target_audience = true;
    customAnswerValues.target_audience = audience;
    return { context: `User answered audience: ${audience.join(", ")}.` };
  }

  if (key === "goal") {
    const inferred = inferProfileFromText(cleaned);
    if (inferred.profile.goal) setIfPresent("goal", inferred.profile.goal);
    customAnswers.goal = true;
    customAnswerValues.goal = inferred.profile.goal || cleaned;
    return { context: `User answered goal: ${customAnswerValues.goal}.` };
  }

  if (key === "expected_attendance") {
    const match = cleaned.match(/\d{1,5}/);
    if (match) setIfPresent("expectedAttendance", Number(match[0]));
    customAnswers.expected_attendance = true;
    customAnswerValues.expected_attendance = match ? Number(match[0]) : cleaned;
    return { context: `User answered attendance: ${match ? match[0] : cleaned}.` };
  }

  return { context: "" };
}

function applyConversationAnswers(profile) {
  const next = { ...profile };
  if (customAnswerValues.city) {
    next.city = customAnswerValues.city;
    next.address = next.address || customAnswerValues.city;
  }
  if (customAnswerValues.domain?.length) next.domain = customAnswerValues.domain;
  if (customAnswerValues.target_audience?.length) next.target_audience = customAnswerValues.target_audience;
  if (customAnswerValues.goal) next.goal = customAnswerValues.goal;
  if (customAnswerValues.expected_attendance) next.expected_attendance = customAnswerValues.expected_attendance;
  return next;
}

function applySuggestionForUnknown(key) {
  const profile = readProfile();
  const normalizedBrief = normalizeText(accumulatedBrief);
  let reply = "";
  let context = "";

  if (key === "domain") {
    const domains = normalizedBrief.includes("founder") || normalizedBrief.includes("startup")
      ? ["AI agents", "startups", "coding tools"]
      : ["AI agents", "Codex", "coding tools"];
    setChecks("domainOptions", domains);
    assistantSuggestions.domain = true;
    reply = `I will choose the topic for you: ${domains.join(", ")}. That fits this kind of event.`;
    context = `Assistant suggested topic: ${domains.join(", ")}.`;
  } else if (key === "city") {
    const city = normalizedBrief.includes("aws") || normalizedBrief.includes("builder") ? "San Francisco" : "San Francisco";
    const venue = normalizedBrief.includes("aws") || normalizedBrief.includes("builder") ? "AWS Builder Loft" : "coworking space";
    setIfPresent("city", city);
    setIfPresent("venueType", venue);
    setIfPresent("address", `${city}, CA`);
    setIfPresent("timezone", "America/Los_Angeles");
    assistantSuggestions.city = true;
    assistantSuggestions.venue_type = true;
    reply = `I will place it in ${city}, using ${venue} as the venue type. That is a strong default for this kind of event.`;
    context = `Assistant suggested city: ${city}. Assistant suggested venue: ${venue}.`;
  } else if (key === "target_audience") {
    const audience = normalizedBrief.includes("founder")
      ? ["founders", "operators", "technical builders"]
      : ["engineers", "founders", "AI builders", "technical builders"];
    setChecks("audienceOptions", audience);
    assistantSuggestions.target_audience = true;
    reply = `I will target ${audience.join(", ")}. That should give the event a clear room.`;
    context = `Assistant suggested audience: ${audience.join(", ")}.`;
  } else if (key === "goal") {
    const goal = normalizedBrief.includes("community") ? "launch community" : "attract builders";
    setIfPresent("goal", goal);
    assistantSuggestions.goal = true;
    reply = `I will set the goal to "${goal}" because it matches this kind of event.`;
    context = `Assistant suggested goal: ${goal}.`;
  } else if (key === "expected_attendance") {
    const attendance = Number(profile.expected_attendance || 30);
    setIfPresent("expectedAttendance", attendance);
    assistantSuggestions.expected_attendance = true;
    reply = `I will use ${attendance} attendees as a practical target.`;
    context = `Assistant suggested attendance: ${attendance}.`;
  }

  return { reply, context };
}

async function launchResearchAndReport(profile) {
  const status = document.getElementById("voiceStatus");
  status.textContent = "Searching the internet for each part of the report...";
  researchInsights = [];
  researchWasLive = false;
  researchStatusText = "Checking live internet research...";

  try {
    const response = await fetch("/api/event-research", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile,
        conversation: getFullConversationText(),
        num_results: 6,
      }),
    });
    const payload = await response.json();
    if (response.ok && payload.sections?.length) {
      researchInsights = payload.sections;
      researchWasLive = Boolean(payload.live);
      researchStatusText = `${payload.provider || "Internet search"} ran ${payload.sections.length} focused searches for this report.`;
    } else {
      researchStatusText = payload.error || "Live internet research did not return usable results.";
    }
  } catch (error) {
    researchInsights = [];
    researchStatusText = `Live internet research failed: ${error.message}`;
  }

  if (!researchInsights.length) {
    researchInsights = buildDeterministicResearch(profile);
    researchWasLive = false;
    researchStatusText = "Offline fallback used. Add BRIGHT_DATA_API_KEY to .env and restart the Node server for live internet research.";
  }
  regenerate();
  status.textContent = researchWasLive ? "Internet research complete. Report ready." : "Report ready with offline fallback.";
}

function buildDeterministicResearch(profile) {
  const domains = profile.domain?.length ? profile.domain.join(", ") : "the selected topic";
  const audience = profile.target_audience?.length ? profile.target_audience.join(", ") : "the target audience";
  return [
    {
      title: "Topic and demand",
      query: "Offline fallback",
      items: [
        {
          title: "Conversation-derived topic",
          snippet: `Focus the event around ${domains}, because that is what appeared in the Pixu conversation.`,
        },
      ],
    },
    {
      title: "Audience and communities",
      query: "Offline fallback",
      items: [
        {
          title: "Conversation-derived audience",
          snippet: `Design the room for ${audience}, with practical examples instead of a broad talk.`,
        },
      ],
    },
    {
      title: "Venue and location fit",
      query: "Offline fallback",
      items: [
        {
          title: "Venue checklist",
          snippet: "Prioritize accessible local spaces with reliable Wi-Fi, presentation setup, and room for informal networking.",
        },
      ],
    },
    {
      title: "Promotion channels",
      query: "Offline fallback",
      items: [
        {
          title: "Launch approach",
          snippet: "Use a specific title, limited capacity, personal invites, and a short agenda to improve conversion.",
        },
      ],
    },
  ];
}

function buildAssistantReply(language, profile, missing, found) {
  if (language === "fr") {
    const foundText = found.length ? `J'ai detecte: ${found.join("; ")}.` : "Je n'ai pas encore assez de details, donc je pars du scenario par defaut.";
    const next = missing.length
      ? `Il me manque ${missing.length} precision${missing.length > 1 ? "s" : ""}.`
      : "Aucune question de plus: j'ai assez d'informations pour proposer la strategie.";
    return `${foundText} ${next} Je recommande maintenant: ${state.selected.title}.`;
  }
  if (language === "es") {
    const foundText = found.length ? `Detecte: ${found.join("; ")}.` : "Todavia faltan detalles, asi que uso el escenario demo.";
    const next = missing.length ? `Tengo ${missing.length} pregunta${missing.length > 1 ? "s" : ""} util.` : "No necesito mas preguntas para crear la estrategia.";
    return `${foundText} ${next} Recomendacion actual: ${state.selected.title}.`;
  }
  if (language === "zh") {
    const foundText = found.length ? `I detected: ${found.join("; ")}.` : "I need more detail, so I am using the default demo scenario.";
    const next = missing.length ? `I have ${missing.length} useful follow-up question(s).` : "No follow-up needed: I have enough to build the strategy.";
    return `${foundText} ${next} Current recommendation: ${state.selected.title}.`;
  }
  const foundText = found.length ? `I found: ${found.join("; ")}.` : "I need more detail, so I am using the default demo scenario.";
  const next = missing.length ? `I have ${missing.length} useful follow-up question${missing.length > 1 ? "s" : ""}.` : "No follow-up needed: I have enough to build the strategy.";
  return `${foundText} ${next} Current recommendation: ${state.selected.title}.`;
}

function setAssistantReply(reply, lang, followups = []) {
  lastAssistantReply = reply;
  lastAssistantLanguage = lang;
  const replyNode = document.getElementById("assistantReply");
  replyNode.textContent = reply;
  replyNode.classList.add("active");
  renderFollowups(followups.map((question) => localizeQuestion(question, lang)), lang);
  renderConversationLog();
  if (voiceConversationActive) {
    window.setTimeout(() => speakAssistantReply(reply, lang), 80);
  }
}

function addConversationTurn(speaker, text) {
  conversationTurns.push({ speaker, text });
  renderConversationLog();
}

function renderConversationLog() {
  const log = document.getElementById("conversationLog");
  if (!log || !conversationTurns.length) {
    if (log) log.innerHTML = "";
    return;
  }
  log.innerHTML = conversationTurns.slice(-8)
    .map((turn) => `<div class="conversation-turn"><strong>${escapeHtml(turn.speaker)}:</strong> ${escapeHtml(turn.text)}</div>`)
    .join("");
}

function setPromptForNextQuestion(question) {
  const prompt = document.getElementById("briefPrompt");
  const promptQuestion = document.getElementById("promptQuestion");
  prompt.value = "";
  if (question) {
    const localized = localizeQuestion(question, lastAssistantLanguage);
    promptQuestion.textContent = localized;
    prompt.placeholder = "Answer here. If you do not know, write: I do not know.";
    document.getElementById("voiceStatus").textContent = "Answer the question above, then press Enter to continue.";
    showQuestionPage();
  } else {
    promptQuestion.textContent = "Your launch report is ready";
    prompt.placeholder = "Optional: add any change, like a different city, audience, topic, or budget.";
    document.getElementById("voiceStatus").textContent = "Plan ready. You can still type a change and press Enter.";
  }
}

function showQuestionPage() {
  document.body.classList.add("question-mode");
  document.body.classList.remove("report-mode");
  document.querySelector(".prompt-first").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showReportPage() {
  document.body.classList.remove("question-mode");
  document.body.classList.add("report-mode");
  activateTab("package");
  document.querySelector(".app-shell").scrollIntoView({ behavior: "smooth", block: "start" });
}

function localizeQuestion(question, lang) {
  if (!lang.startsWith("fr")) return question;
  const fr = {
    [questionTexts.city]: "Ou doit avoir lieu l'evenement ?",
    [questionTexts.domain]: "Quel doit etre le sujet de l'evenement ?",
    [questionTexts.target_audience]: "Qui doit etre dans la salle ?",
    [questionTexts.goal]: "Quel est l'objectif principal ?",
    [questionTexts.expected_attendance]: "Combien de personnes veux-tu dans la salle ?",
  };
  return fr[question] || question;
}

function renderFollowups(questions, lang) {
  const container = document.getElementById("followupQuestions");
  if (!questions.length) {
    container.innerHTML = `<span class="pill">${lang.startsWith("fr") ? "Aucune question necessaire" : "No follow-up needed"}</span>`;
    return;
  }
  container.innerHTML = questions.map((question) => `<button class="followup-chip" type="button" data-question="${escapeAttr(question)}">${escapeHtml(question)}</button>`).join("");
}

function detectLanguage(text) {
  const normalized = normalizeText(text);
  const padded = ` ${normalized} `;
  if (/[\u4e00-\u9fff]/.test(text)) return "zh";
  if (containsAny(padded, [" que ", " para ", " quiero ", " evento ", " personas ", " fundadores "])) return "es";
  if (containsAny(padded, [" je ", " veux ", " evenement ", " pour ", " avec ", " personnes ", " repond ", " voix ", " francais "])) return "fr";
  return "en";
}

function voiceLangFor(language) {
  return { fr: "fr-FR", es: "es-ES", zh: "zh-CN", en: "en-US" }[language] || "en-US";
}

function matchOption(normalized, optionValues, aliases) {
  for (const [option, words] of Object.entries(aliases)) {
    if (words.some((word) => normalized.includes(normalizeText(word)))) {
      return optionValues.includes(option) ? option : null;
    }
  }
  return null;
}

function matchMany(normalized, optionValues, aliases) {
  const found = [];
  for (const [option, words] of Object.entries(aliases)) {
    if (optionValues.includes(option) && words.some((word) => normalized.includes(normalizeText(word)))) {
      found.push(option);
    }
  }
  return found;
}

function extractCity(text) {
  const directCities = ["San Francisco", "New York", "Paris", "London", "Seattle", "Boston", "Austin", "Marseille", "Berlin", "Madrid"];
  const foundCity = directCities.find((city) => normalizeText(text).includes(normalizeText(city)));
  if (foundCity) return foundCity;
  const match = text.match(/\b(?:in|at|near|a|sur|en)\s+([A-Z][A-Za-z -]{2,40})/);
  return match ? match[1].trim() : "";
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s+-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function value(id) {
  return document.getElementById(id).value.trim();
}

function scoreEvent(event, profile) {
  const domains = new Set(profile.domain.map((d) => d.toLowerCase()));
  const tags = new Set(event.tags.map((t) => t.toLowerCase()));
  const domainOverlap = [...domains].filter((d) => tags.has(d)).length;
  const audienceText = event.target_audience.toLowerCase();
  const audienceOverlap = profile.target_audience.filter((a) => audienceText.includes(a.toLowerCase())).length;
  const venue = profile.venue_type.toLowerCase();
  const organizer = profile.organizer_type.toLowerCase();
  const goal = profile.goal.toLowerCase();
  const duration = profile.duration.toLowerCase();
  const budget = profile.budget.toLowerCase();
  const title = event.title.toLowerCase();
  const tagText = event.tags.join(" ").toLowerCase();
  const format = event.format.toLowerCase();

  let trend = Math.min(10, 6 + domainOverlap + (containsAny(tagText, ["codex", "agent", "aws"]) ? 2 : 0));
  let audience = Math.min(10, 6 + audienceOverlap + (audienceText.includes("technical builders") ? 1 : 0));
  let venueFit = 7;
  if (venue.includes("aws builder loft") && containsAny(title + tagText, ["aws", "cloud", "codex", "agent", "coding"])) venueFit += 2;
  if (venue.includes("online") && ["demo night", "office hours"].includes(format)) venueFit += 1;
  if (venue.includes("conference") && format.includes("deep dive")) venueFit += 1;
  venueFit = Math.min(10, venueFit);

  let ease = 8;
  if (budget === "free" && ["hands-on workshop", "build day", "tool comparison session"].includes(format)) ease += 1;
  if (duration === "evening" && ["hands-on workshop", "build day", "demo night", "technical deep dive"].includes(format)) ease += 1;
  if (format === "mini accelerator night") ease -= 1;
  ease = clamp(ease, 1, 10);

  let networking = 7;
  if (["build day", "demo night", "founder/operator roundtable", "problem-first networking", "show-and-tell night"].includes(format)) networking += 2;
  if (["create networking", "launch community", "attract builders"].includes(goal)) networking += 1;
  networking = Math.min(10, networking);

  let sponsor = 7;
  if (organizer.includes("aws") || containsAny(title + tagText, ["aws", "cloud", "agents", "coding tools"])) sponsor += 2;
  if (["sponsored", "free"].includes(budget)) sponsor += 1;
  sponsor = Math.min(10, sponsor);

  let differentiation = Math.min(10, 7 + Math.min(2, domainOverlap) + (containsAny(title, ["showdown", "codex", "observability", "deployment"]) ? 1 : 0));
  const finalScore = 0.25 * trend + 0.2 * audience + 0.15 * venueFit + 0.15 * ease + 0.1 * networking + 0.1 * sponsor + 0.05 * differentiation;

  return {
    ...event,
    trend_relevance: trend,
    audience_fit: audience,
    venue_fit: venueFit,
    ease_to_execute: ease,
    networking_potential: networking,
    sponsor_potential: sponsor,
    differentiation,
    final_score: Number(finalScore.toFixed(1)),
  };
}

function generateRecommendations(profile) {
  const recommendationProfile = buildRecommendationProfile(profile);
  const current = trendingTemplates.map(eventFromTemplate).map((event) => scoreEvent(event, recommendationProfile)).sort(sortEvents).slice(0, 10);
  const evergreen = evergreenTemplates.map(eventFromTemplate).map((event) => scoreEvent(event, recommendationProfile)).sort(sortEvents).slice(0, 10);
  return {
    trend_note: researchWasLive
      ? "Live Bright Data internet research was used for the report."
      : "Offline fallback is active until BRIGHT_DATA_API_KEY is configured on the local Node server.",
    current,
    evergreen,
    top_event: current[0],
  };
}

function buildRecommendationProfile(profile) {
  return {
    ...profile,
    organizer_type: currentConfidence.organizer_type ? profile.organizer_type : "",
    venue_type: currentConfidence.venue_type ? profile.venue_type : "",
    city: currentConfidence.city ? profile.city : "",
    domain: currentConfidence.domain ? profile.domain : [],
    goal: currentConfidence.goal ? profile.goal : "",
    target_audience: currentConfidence.target_audience ? profile.target_audience : [],
    budget: currentConfidence.budget ? profile.budget : "",
    duration: currentConfidence.duration ? profile.duration : "",
    platform: currentConfidence.platform ? profile.platform : "",
    tone: currentConfidence.tone ? profile.tone : "",
  };
}

function buildReportProfile(profile) {
  const reportProfile = buildRecommendationProfile(profile);
  return {
    ...reportProfile,
    organizer_type: reportProfile.organizer_type || "community builder",
    venue_type: reportProfile.venue_type || "venue to confirm",
    city: reportProfile.city || "city to confirm",
    domain: reportProfile.domain.length ? reportProfile.domain : ["topic to confirm"],
    goal: reportProfile.goal || "create a useful event",
    target_audience: reportProfile.target_audience.length ? reportProfile.target_audience : ["target audience to confirm"],
    budget: reportProfile.budget || "budget to confirm",
    duration: reportProfile.duration || "duration to confirm",
    platform: reportProfile.platform || "platform to confirm",
    tone: reportProfile.tone || "friendly",
    expected_attendance: currentConfidence.expected_attendance ? profile.expected_attendance : "attendance to confirm",
    organizer_name: currentConfidence.organizer_name ? profile.organizer_name : "organizer to confirm",
    address: currentConfidence.city ? profile.address : "address to confirm",
    timezone: currentConfidence.city ? profile.timezone : "timezone to confirm",
  };
}

function getFullConversationText() {
  const transcript = conversationTurns.map((turn) => `${turn.speaker}: ${turn.text}`).join("\n");
  return [accumulatedBrief, transcript].filter(Boolean).join("\n\n");
}

function sortEvents(a, b) {
  return b.final_score - a.final_score || a.title.localeCompare(b.title);
}

function getStrategyBasis(profile) {
  const userParts = [];
  if (currentConfidence.city && !assistantSuggestions.city) userParts.push(`city: ${profile.city}`);
  if (currentConfidence.domain && !assistantSuggestions.domain) userParts.push(`topic: ${profile.domain.join(", ")}`);
  if (currentConfidence.target_audience && !assistantSuggestions.target_audience) userParts.push(`audience: ${profile.target_audience.join(", ")}`);
  if (currentConfidence.goal && !assistantSuggestions.goal) userParts.push(`goal: ${profile.goal}`);

  const suggestedParts = [];
  if (assistantSuggestions.city) suggestedParts.push(`where: ${profile.city}`);
  if (assistantSuggestions.venue_type) suggestedParts.push(`venue: ${profile.venue_type}`);
  if (assistantSuggestions.domain) suggestedParts.push(`what: ${profile.domain.join(", ")}`);
  if (assistantSuggestions.target_audience) suggestedParts.push(`audience: ${profile.target_audience.join(", ")}`);
  if (assistantSuggestions.goal) suggestedParts.push(`goal: ${profile.goal}`);
  if (assistantSuggestions.expected_attendance) suggestedParts.push(`attendance: ${profile.expected_attendance}`);

  const userText = userParts.length ? `User gave ${userParts.join("; ")}` : "User gave a partial brief";
  const suggestedText = suggestedParts.length ? `Mascot suggested ${suggestedParts.join("; ")}` : "No mascot assumptions needed";
  return `${userText}. ${suggestedText}. Full report source is the complete prompt conversation with Pixu.`;
}

function generatePackage(event, profile) {
  const domain = profile.domain.join(", ");
  const audience = profile.target_audience.join(", ");
  const agenda =
    profile.duration === "evening"
      ? [
          "6:00 PM - Arrival and informal networking",
          "6:15 PM - Welcome and event framing",
          "6:25 PM - Live demo or tool comparison",
          "6:50 PM - Mini build sprint or guided discussion",
          "7:30 PM - Demos, takeaways, and networking",
          "8:00 PM - Close",
        ]
      : ["Arrival and informal networking", "Welcome and event framing", "Practical demo or guided discussion", "Hands-on activity or structured breakout", "Share-outs, takeaways, and next steps"];

  return {
    event_title: event.title,
    short_tagline: `A practical ${profile.tone} session for builders working with ${domain || event.category}.`,
    full_description: `${event.title} is a practical community event for ${audience}. The session combines a clear framing talk, live workflow examples, and time for attendees to compare notes with other builders. It is designed for people who want to understand what is useful now in ${domain || event.category} and leave with concrete next steps rather than a generic trend overview.`,
    target_audience: audience,
    why_this_event_now: event.why_now,
    strategy_basis: getStrategyBasis(profile),
    conversation_source: getFullConversationText() || "No conversation yet.",
    research_summary: researchInsights.length ? researchInsights : buildDeterministicResearch(profile),
    research_source: researchStatusText,
    research_live: researchWasLive,
    why_this_venue_fits: `${profile.venue_type} in ${profile.city} fits because the topic is practical, technical, and community-oriented. The format benefits from a builder-friendly room, reliable Wi-Fi, short demos, and informal networking.`,
    recommended_date_timing: recommendedDate(),
    recommended_time_of_day: profile.duration === "evening" ? "Evening, 6:00 PM to 8:00 PM" : "Late afternoon or early evening",
    event_duration: profile.duration,
    agenda,
    speaker_or_host_format: "One host to frame the session, one technical demo lead, and one community facilitator for Q&A, introductions, and attendee follow-up.",
    selected_event_strategy: buildSelectedEventStrategy(event, profile),
    logistics_checklist: [
      "Confirm room capacity, seating, Wi-Fi, screen, audio, and check-in flow.",
      "Prepare a short demo with a fallback screenshot path.",
      "Create RSVP page in dry-run first, then review copy and timing.",
      "Line up one host, one demo lead, and one person to welcome attendees.",
      "Prepare name tags, QR code for follow-up, and a simple waitlist form.",
    ],
    promotion_strategy: [
      `Launch the event page 28 days before the event with "${event.title}" as the exact campaign anchor.`,
      `Use the first week to validate the positioning with ${audience} before pushing broadly.`,
      `Use the second week for partner/community distribution in ${profile.city}.`,
      "Use the third week for proof posts, personal DMs, and speaker/demo previews.",
      "Use the final week for reminders, logistics, and high-intent waitlist conversion.",
    ],
    risk_or_weakness: "The topic can sound broad if the promise is not specific. Anchor the event around practical workflows, a live demo, and what attendees will be able to try afterward.",
    how_to_improve_conversion: "Use a concrete title, cap attendance visibly, name the expected attendee profile, and include one clear takeaway: attendees will leave knowing how to structure a practical agent workflow.",
    success_metrics: [
      `${profile.expected_attendance} RSVPs with at least 60 percent attendance`,
      "10 qualified follow-up conversations",
      "5 attendee demos, projects, or shared use cases",
      "3 community partner shares",
      "1 waitlist for the next builder session",
    ],
    image_generation_prompt: `${profile.city} tech meetup, ${profile.venue_type} atmosphere, AI agents, coding workflows, builders around laptops, premium but friendly event poster, clean modern layout, no fake logos, no unreadable small text`,
    short_platform_description: `A hands-on ${profile.city} builder event on ${event.category.toLowerCase()} with demos, practical workflows, and networking.`,
    long_platform_description: `Join ${profile.organizer_name} for ${event.title}. This is a practical session for ${audience}, hosted at ${profile.venue_type}. Expect a concise framing talk, a live demo or tool comparison, a mini build sprint or guided discussion, and time to meet other builders working on similar problems.`,
    faq: [
      ["Do I need to be an expert?", "No. The event is technical, but the goal is practical learning and useful discussion."],
      ["Should I bring a laptop?", "Yes, especially if you want to follow along or sketch your own workflow."],
      ["Will this publish to event platforms automatically?", "No. This MVP generates dry-run payloads only."],
    ],
  };
}

function buildSelectedEventStrategy(event, profile) {
  const audience = profile.target_audience.join(", ");
  const domain = profile.domain.join(", ");
  return [
    `Position the event as "${event.title}", not as a generic ${domain || event.category} meetup.`,
    `Primary promise: ${event.summary}`,
    `Room design: attract ${audience} and keep the format centered on ${event.format.toLowerCase()}.`,
    `Conversion angle: make the RSVP page explain what attendees will build, discuss, or leave knowing.`,
    `Differentiation: emphasize ${event.why_now.toLowerCase()}`,
  ];
}

function generateCalendars(pkg, profile) {
  return {
    standard: [
      ["T-28 days", "Launch event page and first announcement"],
      ["T-21 days", "Partner/community distribution"],
      ["T-14 days", "Second announcement with speaker/demo angle"],
      ["T-10 days", "Targeted DMs to high-fit attendees"],
      ["T-7 days", "Proof post and agenda reminder"],
      ["T-3 days", "Reminder post"],
      ["T-1 day", "Attendee reminder"],
      ["D-day morning", "Logistics reminder"],
      ["D-day after event", "Thank-you message"],
      ["T+1 day", "Recap post"],
      ["T+3 days", "Follow-up and next event waitlist"],
    ],
    urgent: [
      ["Now", "Create page, confirm host, and send first invite"],
      ["Today afternoon", "Share in community channels and partner groups"],
      ["Tonight", "Send personal DMs to high-fit attendees"],
      ["Tomorrow morning", "Post reminder with clear agenda"],
      ["24 hours before", "Send attendee reminder and logistics"],
      ["Event day", "Confirm room, demo, signage, and check-in"],
      ["Post-event", "Send thank-you, recap, links, and next waitlist"],
    ],
    monthly: generateOneMonthLaunchPlan(pkg, profile),
  };
}

function generateOneMonthLaunchPlan(pkg, profile) {
  const eventDate = startDate();
  const audience = pkg.target_audience || profile.target_audience.join(", ");
  return [
    {
      date: dateLabel(addDays(eventDate, -28)),
      timing: "T-28 days",
      channel: "Event page",
      action: "Launch the RSVP page",
      publication: `${pkg.event_title}\n\n${pkg.short_platform_description}\n\nSeats are limited. RSVP if you are part of ${audience} and want a practical room, not a generic talk.`,
    },
    {
      date: dateLabel(addDays(eventDate, -27)),
      timing: "T-27 days",
      channel: "LinkedIn",
      action: "Public launch post",
      publication: `We are launching ${pkg.event_title} in ${profile.city}.\n\nThis is for ${audience}. Expect practical examples, useful conversation, and a room built around ${profile.domain.join(", ")}.\n\nRSVP now. Capacity: ${profile.expected_attendance}.`,
    },
    {
      date: dateLabel(addDays(eventDate, -25)),
      timing: "T-25 days",
      channel: "Email / newsletter",
      action: "Send first invite",
      publication: `Subject: Invitation: ${pkg.event_title}\n\nWe are hosting a practical ${profile.city} session for ${audience}. The event is designed around ${pkg.event_title}, with demos, discussion, and networking.\n\nRecommended for people actively building, learning, or deciding what to do next.`,
    },
    {
      date: dateLabel(addDays(eventDate, -23)),
      timing: "T-23 days",
      channel: "Partner communities",
      action: "Ask partners to share",
      publication: `Small favor: could you share ${pkg.event_title} with people in your community who fit ${audience}? It is a practical ${profile.city} event with limited seats and a clear builder focus.`,
    },
    {
      date: dateLabel(addDays(eventDate, -21)),
      timing: "T-21 days",
      channel: "LinkedIn",
      action: "Problem post",
      publication: `The reason we are hosting ${pkg.event_title}: ${pkg.why_this_event_now}\n\nIf that problem is on your mind, this should be a useful room.`,
    },
    {
      date: dateLabel(addDays(eventDate, -18)),
      timing: "T-18 days",
      channel: "DMs",
      action: "Invite high-fit people directly",
      publication: `Hey - I thought of you for ${pkg.event_title}. It is a small ${profile.city} event for ${audience}. The format is practical, with enough time to meet people working on similar problems.`,
    },
    {
      date: dateLabel(addDays(eventDate, -14)),
      timing: "T-14 days",
      channel: "LinkedIn / X",
      action: "Agenda reveal",
      publication: `${pkg.event_title} agenda:\n${pkg.agenda.slice(0, 5).join("\n")}\n\nGood fit for ${audience}.`,
    },
    {
      date: dateLabel(addDays(eventDate, -12)),
      timing: "T-12 days",
      channel: "Community channels",
      action: "Share practical takeaway",
      publication: `You should leave ${pkg.event_title} with one clear thing: ${pkg.how_to_improve_conversion}`,
    },
    {
      date: dateLabel(addDays(eventDate, -10)),
      timing: "T-10 days",
      channel: "Email",
      action: "Second invite",
      publication: `Subject: Seats open for ${pkg.event_title}\n\nA quick reminder that this event is coming up in ${profile.city}. It is focused on ${profile.domain.join(", ")} and designed for ${audience}.`,
    },
    {
      date: dateLabel(addDays(eventDate, -7)),
      timing: "T-7 days",
      channel: "LinkedIn",
      action: "One-week reminder",
      publication: `One week until ${pkg.event_title}.\n\nBest fit: ${audience}.\nWhy attend: practical examples, focused discussion, and useful people in the room.`,
    },
    {
      date: dateLabel(addDays(eventDate, -5)),
      timing: "T-5 days",
      channel: "DMs / waitlist",
      action: "Fill remaining seats",
      publication: `We have a few seats left for ${pkg.event_title}. If you want to join, RSVP now or reply and I can send the link.`,
    },
    {
      date: dateLabel(addDays(eventDate, -3)),
      timing: "T-3 days",
      channel: "All channels",
      action: "Final public reminder",
      publication: `${pkg.event_title} is this week in ${profile.city}. Bring a question, a workflow, or a project you want to improve.`,
    },
    {
      date: dateLabel(addDays(eventDate, -1)),
      timing: "T-1 day",
      channel: "Email / RSVP platform",
      action: "Attendee logistics",
      publication: `Reminder: ${pkg.event_title} is tomorrow.\n\nTime: ${pkg.recommended_time_of_day}\nVenue: ${profile.venue_type}, ${profile.address}\nBring a laptop if you want to follow along.`,
    },
    {
      date: dateLabel(eventDate),
      timing: "Event day",
      channel: "Email / chat",
      action: "Morning reminder",
      publication: `Today is ${pkg.event_title}. We will keep it practical and on time. Looking forward to seeing you at ${profile.venue_type}.`,
    },
    {
      date: dateLabel(addDays(eventDate, 1)),
      timing: "T+1 day",
      channel: "LinkedIn / email",
      action: "Thank-you and recap",
      publication: `Thanks to everyone who joined ${pkg.event_title}. The strongest takeaway: ${pkg.risk_or_weakness}\n\nWe will share notes and open interest for the next session.`,
    },
    {
      date: dateLabel(addDays(eventDate, 3)),
      timing: "T+3 days",
      channel: "Email / waitlist",
      action: "Next-event waitlist",
      publication: `If you missed ${pkg.event_title}, join the waitlist for the next builder session. We are using the feedback from this event to shape the next one.`,
    },
  ];
}

function generatePosts(pkg, profile) {
  return {
    "LinkedIn launch post": `We are hosting ${pkg.event_title} in ${profile.city} for ${pkg.target_audience}.\n\nThe goal is simple: spend an evening around practical AI agent and coding workflows, see what is useful, and meet other people building in this space.\n\nExpect demos, a focused discussion, and time to connect at ${profile.venue_type}. Seats are intentionally limited.`,
    "LinkedIn reminder post": `Quick reminder: ${pkg.event_title} is coming up soon in ${profile.city}.\n\nIf you are building with AI agents, coding tools, or cloud workflows, this should be a useful room. Bring a laptop, a question, or a workflow you are trying to improve.`,
    "X/Twitter short post": `${profile.city} builders: we are hosting ${pkg.event_title}. Practical demos, AI agent workflows, and good technical conversation. RSVP if this is your lane.`,
    "Discord/Slack announcement": `Hosting ${pkg.event_title} at ${profile.venue_type}. This is for builders who want practical examples, not a broad hype talk. Good fit for engineers, founders, AI builders, and technical operators.`,
    "WhatsApp/Telegram message": `Hey, we are putting together ${pkg.event_title} in ${profile.city}. Small builder-focused session, practical demos, and networking. Thought it might be relevant for you.`,
    "Personalized DM invitation": `Hey - I thought of you for ${pkg.event_title}. It is a small ${profile.organizer_name} event for people actively building with AI tools. The session should be practical and technical, with enough time to meet other builders.`,
    "Email invitation": `Subject: Invitation: ${pkg.event_title}\n\nHi,\n\nWe are hosting ${pkg.event_title} in ${profile.city}. The event is designed for ${pkg.target_audience} who want practical signal on AI agent workflows, coding tools, and cloud deployment patterns.\n\nIt will be a focused evening with a short framing, live demo, guided discussion, and networking.\n\nBest,\n${profile.organizer_name}`,
    "24h reminder": `Reminder: ${pkg.event_title} is tomorrow. Please bring a laptop if you want to follow along. We will start with networking, then move into demos and practical discussion.`,
    "Morning-of reminder": `Today is ${pkg.event_title}. Looking forward to seeing everyone at ${profile.venue_type}. We will keep it practical, useful, and on time.`,
    "Post-event thank-you": `Thanks to everyone who joined ${pkg.event_title}. Appreciate the thoughtful questions, demos, and builder energy in the room.`,
    "Post-event recap": `Recap from ${pkg.event_title}: the strongest theme was that builders want agent workflows they can trust, test, and deploy. We will share notes and open a waitlist for the next session soon.`,
  };
}

function generatePayloads(pkg, profile) {
  const start = startDate();
  const end = new Date(start.getTime() + durationHours(profile.duration) * 60 * 60 * 1000);
  const base = {
    title: pkg.event_title,
    description: pkg.long_platform_description,
    short_description: pkg.short_platform_description,
    start_time: start.toISOString().slice(0, 16),
    end_time: end.toISOString().slice(0, 16),
    timezone: profile.timezone,
    venue: profile.venue_type,
    address: profile.address,
    city: profile.city,
    capacity: profile.expected_attendance,
    tags: profile.domain,
    organizer_name: profile.organizer_name,
    cover_image_prompt: pkg.image_generation_prompt,
    ticket_type_or_rsvp_type: profile.budget === "free" ? "free RSVP" : "RSVP",
    publish_status: "draft",
    dry_run: true,
  };
  return {
    Eventbrite: { ...base, platform_notes: "Most realistic future live API option. MVP keeps this as a dry-run draft payload." },
    Luma: { ...base, platform_notes: "Ready-to-connect adapter. Luma API access may require specific permissions or paid access." },
    Meetup: { ...base, platform_notes: "Ready-to-connect adapter. Meetup API access may require approved OAuth/API access." },
    "OpenAI Codex strategy adapter": {
      event_brief: getFullConversationText(),
      selected_event: pkg.event_title,
      requested_outputs: [
        "ranked event recommendations",
        "launch package",
        "social posts",
        "reminders",
        "dry-run publishing payloads",
      ],
      model_role: "AI strategy and build assistant",
      dry_run: true,
      live_api_call_made: false,
      platform_notes: "OpenAI Codex is represented as the future reasoning/build layer. No OpenAI API call is made in this static MVP.",
    },
    "Bright Data internet research": {
      query_targets: [
        "topic and demand",
        "audience and communities",
        "venue and location fit",
        "similar events",
        "promotion channels",
        "risks and positioning",
      ],
      city: profile.city,
      domains: profile.domain,
      extraction_mode: "public web discovery",
      active_dataset: researchWasLive ? "live Bright Data Discover API results" : "offline deterministic fallback",
      dry_run: true,
      live_api_call_made: researchWasLive,
      platform_notes: researchStatusText,
    },
    "Generic platform adapter": { ...base, platform_notes: "Portable dry-run payload for manual review or future platform mapping." },
  };
}

function generatePitch() {
  return {
    "30-second pitch": "I'm building Event Launch Agent. It uses a mascot-led strategy assistant and optional Bright Data internet research to help community builders decide what event to host based on audience, venue, city, goals, and public signals. It ranks the best event ideas, generates the launch package, prepares social posts and reminders, and creates platform-ready API payloads - all in dry-run mode by default.",
    Problem: "Organizers often know they should host something, but struggle to choose the right event concept, copy, timing, and platform setup quickly.",
    Solution: "A deterministic assistant that turns a short organizer profile into ranked event ideas and a complete launch package.",
    "Why now": "AI builder communities are moving fast, and venues need practical ways to convert trend interest into high-quality gatherings.",
    "Who it is for": "Community builders, AWS/cloud hosts, startup ecosystems, universities, accelerators, VCs, student clubs, and innovation teams.",
    "Demo flow": "Fill the sidebar, generate recommendations, select an event, review launch assets, inspect dry-run platform payloads, and pitch the strategy.",
    "API strategy": "OpenAI can power transcription and reasoning, Bright Data powers public web research when configured, Eventbrite is the most realistic future publishing path, and Luma/Meetup are ready-to-connect adapters.",
    "Business potential": "The product can become a launch operating system for venues and communities that repeatedly host targeted events.",
    "Future roadmap": "Real-time trend search, approved publishing integrations, attendee segmentation, sponsor matching, and post-event analytics.",
  };
}

function regenerate(selectedTitle = null) {
  const rawProfile = applyConversationAnswers(readProfile());
  const profile = buildReportProfile(rawProfile);
  const recommendations = generateRecommendations(rawProfile);
  const allEvents = [...recommendations.current, ...recommendations.evergreen];
  const selected = allEvents.find((event) => event.title === selectedTitle) || recommendations.top_event;
  const pkg = generatePackage(selected, profile);
  state = {
    profile,
    recommendations,
    selected,
    package: pkg,
    calendars: generateCalendars(pkg, profile),
    posts: generatePosts(pkg, profile),
    payloads: generatePayloads(pkg, profile),
    pitch: generatePitch(),
  };
  localStorage.setItem("eventLaunchAgent:lastTitle", selected.title);
  render();
}

function render() {
  document.getElementById("selectedTitle").textContent = state.selected.title;
  renderEventSelector();
  renderTable("currentTable", state.recommendations.current);
  renderTable("evergreenTable", state.recommendations.evergreen);
  renderPackage();
  renderCalendars();
  renderPosts();
  renderPayloads();
  renderPitch();
}

function renderEventSelector() {
  const select = document.getElementById("eventSelector");
  const events = [...state.recommendations.current, ...state.recommendations.evergreen];
  select.innerHTML = events
    .map((event) => `<option value="${escapeAttr(event.title)}"${event.title === state.selected.title ? " selected" : ""}>${escapeHtml(event.title)}</option>`)
    .join("");
}

function renderTable(id, events) {
  const head = columns.map((column) => `<th>${labelize(column)}</th>`).join("");
  const rows = events
    .map(
      (event) => `<tr>${columns
        .map((column) => {
          const value = event[column];
          if (column === "final_score") return `<td><span class="score">${value}</span></td>`;
          return `<td>${escapeHtml(String(value))}</td>`;
        })
        .join("")}</tr>`,
    )
    .join("");
  document.getElementById(id).innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
}

function renderPackage() {
  const pkg = state.package;
  document.getElementById("packageView").innerHTML = `
    <p class="eyebrow">Selected event</p>
    <h3 class="package-title">${escapeHtml(pkg.event_title)}</h3>
    <p class="info-line">${escapeHtml(pkg.short_tagline)}</p>
    <div class="package-grid">
      <div class="panel">
        <h4>Description</h4>
        <p>${escapeHtml(pkg.full_description)}</p>
        <p><strong>Recommended timing:</strong> ${escapeHtml(pkg.recommended_date_timing)} - ${escapeHtml(pkg.recommended_time_of_day)}</p>
        <p><strong>Target audience:</strong> ${escapeHtml(pkg.target_audience)}</p>
      </div>
      <div class="panel">
        <h4>Strategy</h4>
        <p><strong>Why now:</strong> ${escapeHtml(pkg.why_this_event_now)}</p>
        <p><strong>Chosen basis:</strong> ${escapeHtml(pkg.strategy_basis)}</p>
        <p><strong>Venue fit:</strong> ${escapeHtml(pkg.why_this_venue_fits)}</p>
        <p><strong>Risk:</strong> ${escapeHtml(pkg.risk_or_weakness)}</p>
        <p><strong>Conversion:</strong> ${escapeHtml(pkg.how_to_improve_conversion)}</p>
      </div>
      ${listPanel("Agenda", pkg.agenda)}
      ${researchPanel(pkg.research_source, pkg.research_summary, pkg.research_live)}
      ${listPanel("Selected event strategy", pkg.selected_event_strategy)}
      ${listPanel("Logistics checklist", pkg.logistics_checklist)}
      ${listPanel("Promotion strategy", pkg.promotion_strategy)}
      ${listPanel("Success metrics", pkg.success_metrics)}
      <div class="panel">
        <h4>Image generation prompt</h4>
        <pre class="prompt-box">${escapeHtml(pkg.image_generation_prompt)}</pre>
      </div>
      <div class="panel">
        <h4>Conversation used for this report</h4>
        <pre class="prompt-box">${escapeHtml(pkg.conversation_source)}</pre>
      </div>
      <div class="panel">
        <h4>FAQ</h4>
        ${pkg.faq.map(([q, a]) => `<p><strong>${escapeHtml(q)}</strong><br>${escapeHtml(a)}</p>`).join("")}
      </div>
    </div>`;
}

function listPanel(title, items) {
  return `<div class="panel"><h4>${escapeHtml(title)}</h4><ul class="clean-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`;
}

function researchPanel(source, sections, isLive) {
  return `
    <div class="panel research-panel">
      <h4>Internet research and analysis</h4>
      <p class="${isLive ? "research-live" : "research-fallback"}">${escapeHtml(source)}</p>
      ${sections
        .map(
          (section) => `
          <div class="research-section">
            <h5>${escapeHtml(section.title || "Research")}</h5>
            ${section.source ? `<p class="research-source">${escapeHtml(section.source)}</p>` : ""}
            <p class="research-query">${escapeHtml(section.query || "")}</p>
            ${
              section.items?.length
                ? `<ul class="clean-list">${section.items.map((item) => researchItemHtml(item)).join("")}</ul>`
                : `<p>No usable result returned for this part.</p>`
            }
          </div>`,
        )
        .join("")}
    </div>`;
}

function researchItemHtml(item) {
  if (typeof item === "string") return `<li>${escapeHtml(item)}</li>`;
  const title = item.title || item.url || "Research result";
  const snippet = item.snippet || item.description || "";
  const link = item.url ? ` <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">source</a>` : "";
  return `<li><strong>${escapeHtml(title)}</strong>${link}${snippet ? `<br>${escapeHtml(snippet)}` : ""}</li>`;
}

function renderCalendars() {
  document.getElementById("monthlyLaunchPlan").innerHTML = monthlyPlanHtml(state.calendars.monthly);
  document.getElementById("standardCalendar").innerHTML = timelineHtml(state.calendars.standard);
  document.getElementById("urgentCalendar").innerHTML = timelineHtml(state.calendars.urgent);
}

function timelineHtml(items) {
  return items.map(([when, action]) => `<div class="timeline-item"><strong>${escapeHtml(when)}</strong><span>${escapeHtml(action)}</span></div>`).join("");
}

function monthlyPlanHtml(items) {
  return items
    .map(
      (item) => `
      <article class="launch-plan-item">
        <div class="launch-plan-meta">
          <strong>${escapeHtml(item.date)}</strong>
          <span>${escapeHtml(item.timing)}</span>
          <span>${escapeHtml(item.channel)}</span>
        </div>
        <div>
          <h4>${escapeHtml(item.action)}</h4>
          <p>${escapeHtml(item.publication)}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderPosts() {
  document.getElementById("postsView").innerHTML = Object.entries(state.posts)
    .map(
      ([label, copy], index) => `
      <article class="copy-item">
        <div class="copy-head">
          <h4>${escapeHtml(label)}</h4>
          <button class="copy-button" type="button" data-copy="${index}">Copy</button>
        </div>
        <p>${escapeHtml(copy)}</p>
      </article>`,
    )
    .join("");
}

function renderPayloads() {
  document.getElementById("payloadView").innerHTML = Object.entries(state.payloads)
    .map(([platform, payload]) => `<details open><summary>${escapeHtml(platform)}</summary><pre class="json-block">${escapeHtml(JSON.stringify(payload, null, 2))}</pre></details>`)
    .join("");
}

function renderPitch() {
  const pitch = state.pitch;
  const sections = Object.entries(pitch).filter(([key]) => key !== "30-second pitch");
  document.getElementById("pitchView").innerHTML = `
    <p class="eyebrow">Hackathon pitch</p>
    <h3>30-second pitch</h3>
    <p class="pitch-lead">${escapeHtml(pitch["30-second pitch"])}</p>
    <div class="pitch-grid">
      ${sections.map(([label, body]) => `<div class="panel"><h4>${escapeHtml(label)}</h4><p>${escapeHtml(body)}</p></div>`).join("")}
    </div>`;
}

function recommendedDate() {
  return startDate().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function startDate() {
  const start = new Date();
  start.setDate(start.getDate() + 30);
  start.setHours(18, 0, 0, 0);
  return start;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function dateLabel(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function durationHours(duration) {
  return { "1 hour": 1, "2 hours": 2, evening: 2, "half-day": 4, "full-day": 7 }[duration] || 2;
}

function containsAny(text, values) {
  return values.some((value) => text.includes(value));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function labelize(text) {
  const labels = {
    title: "idea",
    category: "topic",
    format: "format",
    summary: "summary",
    target_audience: "audience",
    why_now: "why",
    trend_relevance: "timing",
    audience_fit: "audience fit",
    venue_fit: "venue fit",
    ease_to_execute: "ease",
    networking_potential: "networking",
    sponsor_potential: "sponsor fit",
    differentiation: "distinctive",
    final_score: "score",
  };
  return labels[text] || text.replaceAll("_", " ");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function startVoiceConversation() {
  voiceConversationActive = true;
  document.getElementById("listenBrief").textContent = "Listening...";
  startListening();
}

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const status = document.getElementById("voiceStatus");
  if (!SpeechRecognition) {
    startRecordedTranscription();
    return;
  }

  if (recognition) recognition.abort();
  voiceTranscriptBuffer = "";
  recognition = new SpeechRecognition();
  recognition.lang = lastAssistantLanguage || navigator.language || "en-US";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  status.textContent = "Listening... speak naturally. I will write it in the prompt.";
  document.querySelector(".assistant-face").classList.add("speaking");

  recognition.onresult = (event) => {
    let transcript = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
    }
    voiceTranscriptBuffer = transcript.trim();
    const prompt = document.getElementById("briefPrompt");
    prompt.value = voiceTranscriptBuffer;
    prompt.focus();
    status.textContent = `Writing: "${voiceTranscriptBuffer}"`;
  };

  recognition.onerror = (event) => {
    voiceConversationActive = false;
    document.getElementById("listenBrief").textContent = "Start Voice Chat";
    status.textContent = `Voice input stopped: ${event.error}. You can type the answer instead.`;
    document.querySelector(".assistant-face").classList.remove("speaking");
  };

  recognition.onend = () => {
    document.querySelector(".assistant-face").classList.remove("speaking");
    if (!voiceConversationActive) return;
    if (!voiceTranscriptBuffer) {
      status.textContent = "I did not catch that. Try again, or type the answer.";
      document.getElementById("listenBrief").textContent = "Start Voice Chat";
      voiceConversationActive = false;
      return;
    }
    status.textContent = "Got it. Continuing...";
    window.clearTimeout(voiceSubmitTimer);
    voiceSubmitTimer = window.setTimeout(() => analyzeBrief(), 350);
  };

  try {
    recognition.start();
  } catch (error) {
    voiceConversationActive = false;
    document.getElementById("listenBrief").textContent = "Start Voice Chat";
    status.textContent = "Voice could not start. Check microphone permission, or type the answer.";
    document.querySelector(".assistant-face").classList.remove("speaking");
  }
}

async function startRecordedTranscription() {
  const status = document.getElementById("voiceStatus");
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    voiceConversationActive = false;
    document.getElementById("listenBrief").textContent = "Start Voice Chat";
    status.textContent = "This browser cannot record voice. Type the answer, or use Chrome/Edge.";
    return;
  }

  try {
    mediaChunks = [];
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size) mediaChunks.push(event.data);
    };
    mediaRecorder.onstop = transcribeRecordedAudio;
    mediaRecorder.start();
    status.textContent = "Recording... speak now. I will transcribe it automatically.";
    document.querySelector(".assistant-face").classList.add("speaking");
    mediaStopTimer = window.setTimeout(() => stopMediaRecording(), 6500);
  } catch (error) {
    voiceConversationActive = false;
    document.getElementById("listenBrief").textContent = "Start Voice Chat";
    status.textContent = "Microphone permission was blocked. Type the answer, or allow microphone access.";
  }
}

function stopMediaRecording() {
  window.clearTimeout(mediaStopTimer);
  if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  }
  mediaRecorder = null;
  document.querySelector(".assistant-face").classList.remove("speaking");
}

async function transcribeRecordedAudio() {
  const status = document.getElementById("voiceStatus");
  if (!mediaChunks.length || !voiceConversationActive) return;
  status.textContent = "Transcribing voice...";
  try {
    const blob = new Blob(mediaChunks, { type: mediaRecorder?.mimeType || "audio/webm" });
    const audioBase64 = await blobToBase64(blob);
    const response = await fetch("/api/transcribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioBase64,
        mimeType: blob.type,
        language: lastAssistantLanguage.split("-")[0],
      }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Transcription failed");
    const transcript = payload.text || "";
    if (!transcript) throw new Error("No transcript returned");
    const prompt = document.getElementById("briefPrompt");
    prompt.value = transcript;
    prompt.focus();
    status.textContent = `I wrote this in the prompt: "${transcript}"`;
    window.clearTimeout(voiceSubmitTimer);
    voiceSubmitTimer = window.setTimeout(() => analyzeBrief(), 350);
  } catch (error) {
    voiceConversationActive = false;
    document.getElementById("listenBrief").textContent = "Start Voice Chat";
    status.textContent = `${error.message}. Configure OPENAI_API_KEY on the local server, or type the answer.`;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function speakAssistantReply(text = lastAssistantReply, lang = lastAssistantLanguage) {
  const status = document.getElementById("voiceStatus");
  if (!("speechSynthesis" in window)) {
    status.textContent = "Speech output is not supported in this browser.";
    return;
  }
  const textToSpeak = text || "Tell me what kind of event you want to host, and I will find the strategy.";
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = lang || "en-US";
  utterance.rate = lang === "en-US" ? 1 : 0.95;
  utterance.pitch = 1;
  utterance.voice = chooseVoice(utterance.lang);
  utterance.onstart = () => {
    status.textContent = "Mascot is replying...";
    document.querySelector(".assistant-face").classList.add("speaking");
  };
  utterance.onend = () => {
    document.querySelector(".assistant-face").classList.remove("speaking");
    if (voiceConversationActive && pendingQuestions.length) {
      status.textContent = "Your turn. Listening again...";
      window.setTimeout(() => startListening(), 450);
    } else if (voiceConversationActive) {
      status.textContent = "Report ready. Voice chat finished.";
      document.getElementById("listenBrief").textContent = "Start Voice Chat";
      voiceConversationActive = false;
    } else {
      status.textContent = "Voice ready.";
    }
  };
  utterance.onerror = () => {
    status.textContent = "Speech output could not play in this browser.";
    document.querySelector(".assistant-face").classList.remove("speaking");
    if (voiceConversationActive && pendingQuestions.length) window.setTimeout(() => startListening(), 450);
  };
  window.speechSynthesis.speak(utterance);
}

function chooseVoice(lang) {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const base = lang.split("-")[0];
  const exact = voices.find((voice) => voice.lang === lang);
  if (exact) return exact;
  const sameLanguage = voices.find((voice) => voice.lang?.toLowerCase().startsWith(base));
  if (sameLanguage) return sameLanguage;
  return voices.find((voice) => voice.default) || voices[0];
}

function stopVoice() {
  voiceConversationActive = false;
  window.clearTimeout(voiceSubmitTimer);
  window.clearTimeout(mediaStopTimer);
  if (recognition) recognition.abort();
  stopMediaRecording();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  document.querySelector(".assistant-face").classList.remove("speaking");
  document.getElementById("listenBrief").textContent = "Start Voice Chat";
  document.getElementById("voiceStatus").textContent = "Voice stopped.";
}

function activateTab(tabId) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

function bindEvents() {
  document.getElementById("analyzeBrief").addEventListener("click", analyzeBrief);
  document.getElementById("briefPrompt").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      analyzeBrief();
    }
  });
  document.getElementById("listenBrief").addEventListener("click", startVoiceConversation);
  document.getElementById("stopVoice").addEventListener("click", stopVoice);
  document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    regenerate();
  });
  document.getElementById("eventSelector").addEventListener("change", (event) => regenerate(event.target.value));
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-question]")) {
      const question = event.target.dataset.question;
      const prompt = document.getElementById("briefPrompt");
      prompt.value = "";
      prompt.placeholder = question;
      prompt.focus();
      speakAssistantReply(question, lastAssistantLanguage);
      return;
    }
    if (!event.target.matches("[data-copy]")) return;
    const copies = Object.values(state.posts);
    navigator.clipboard.writeText(copies[Number(event.target.dataset.copy)] || "");
    event.target.textContent = "Copied";
    setTimeout(() => {
      event.target.textContent = "Copy";
    }, 1100);
  });
}

function hydratePromptFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const brief = params.get("brief");
  if (!brief) return;
  document.getElementById("briefPrompt").value = brief;
  document.getElementById("voiceStatus").textContent = "Brief loaded from the extension. Press Enter to continue.";
}

initForm();
bindEvents();
regenerate(localStorage.getItem("eventLaunchAgent:lastTitle"));
showQuestionPage();
hydratePromptFromUrl();
