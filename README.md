# Event Launch Agent

Event Launch Agent is a browser app built with plain HTML, CSS, and JavaScript — no framework, no build step. Describe an event idea in one sentence (or say it out loud), answer a couple of smart follow-ups, and get a research-backed launch plan: positioning, agenda, promotion calendar, social posts, and draft platform payloads.

It runs fully offline in mock mode. When a Bright Data token is configured, it runs live internet research and grounds the launch report in real sources.

## What The Project Does

The app helps community builders and venues decide **what event to host and how to launch it** from a simple prompt. It:

1. Extracts the key slots from your brief (city, domain, audience, goal, expected attendance)
2. Asks conditional follow-up questions only when something important is missing
3. Runs focused internet research on the topic, audience, venue, similar events, promotion channels, and risks
4. Recommends a specific, concrete event (e.g. *"Agentic AI on AWS: From Prototype to Deployment"* instead of "a cloud meetup")
5. Generates the full launch package: strategy, agenda, logistics checklist, 4-week promotion calendar, success metrics, posts, and dry-run publishing payloads

## Features

### Talk to Pixu (conversational intake)
- Prompt-first intake: describe the event in natural language
- **Voice chat**: browser speech recognition for speaking the brief, with start/stop control (where supported)
- Browser text-to-speech output with language-aware voice selection
- **Slot extraction with live feedback**: after every answer, Pixu shows what it found so far (`city: San Francisco; domain: cloud; goal: educate audience`) and the current recommendation
- **Conditional follow-ups**: Pixu asks at most one useful question at a time, and stops as soon as it has enough (`No follow-up needed: I have enough to build the strategy`)
- Optional advanced details hidden in the sidebar; a "Continue" path to amend city, audience, topic, or budget after the report

### Internet research (Bright Data)
- Runs **6 focused searches** per report through Bright Data (DuckDuckGo web search, async task-based):
  1. Topic and demand
  2. Audience and communities
  3. Venue and location fit
  4. Similar events
  5. Promotion channels
  6. Risks and positioning
- Each research block in the report shows the query used and the sources found, so every recommendation is traceable
- The report states its **chosen basis** explicitly (which user answers and which research informed the strategy)
- Falls back gracefully to offline heuristics when no token is configured — the demo never blanks

### Launch report
- Selected event with title, description, recommended timing, and target audience
- **Strategy card**: why now, venue fit, main risk, and conversion angle
- Agenda (arrival → framing → demo → hands-on → share-outs)
- Logistics checklist (room, Wi-Fi, demo fallback, check-in, name tags, waitlist QR)
- **4-week promotion calendar**: launch → validate positioning → partner distribution → proof posts and DMs → final reminders
- Success metrics tied to the user's stated attendance goal
- Image generation prompt for the event poster (no fake logos, readable text)
- FAQ block for the RSVP page
- Full conversation transcript embedded in the report for auditability

### Outputs
- Ranked event ideas and additional formats with weighted scoring tables
- Event selection with a regenerated launch package
- Social posts and reminders with copy buttons
- **Draft JSON payloads** for OpenAI Codex, Bright Data, Eventbrite, Luma, Meetup, and a generic adapter — **dry-run only**, nothing is published automatically
- Hackathon-friendly pitch tab

## How To Run

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8501
```

Then open http://localhost:8501.

### Mock mode vs live research

| Mode | Requirement | Behavior |
|---|---|---|
| Mock (default) | Nothing | Full flow with offline heuristics; research cards are illustrative |
| Live research | Bright Data API token | Real web searches ground the report; sources are shown per section |

Configure the token where the app expects it (config file or settings panel — never hardcode it in `index.html`, and never commit it). If a token has ever been pasted into a chat, document, or repo, rotate it.

Voice input/output depends on browser support (Web Speech API); Chrome works best. The app degrades to text-only intake when speech is unavailable.

## Limitations

- Publishing is **dry-run only**: the app generates payloads but does not post to Eventbrite, Luma, or Meetup
- Research quality depends on the search results returned; sources are shown so you can judge them
- Slot extraction is intentionally simple — vague answers ("the more the better") are recorded as-is and reflected in the metrics rather than over-interpreted
