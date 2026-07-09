# Event Launch Agent

Event Launch Agent is a simple browser app: plain HTML, CSS, and JavaScript. It does not use Streamlit, does not require API keys, and does not make external API calls.

## What The Project Does

The app helps community builders and venues decide what event to host from a simple prompt. It fills in the optional details, suggests event ideas, generates a launch plan, prepares posts and reminders, and creates draft platform payloads.

## Features

- Prompt-first intake: describe the event in natural language
- Conditional follow-up questions when the brief is missing important details
- Browser voice input for speaking the brief when supported
- Browser text-to-speech output with language-aware voice selection
- Optional advanced details hidden in the sidebar
- Ranked event ideas
- Additional event formats
- Weighted scoring and ranked recommendation tables
- Event selection with regenerated launch package
- Launch agenda, logistics, FAQ, metrics, and image prompt
- Standard and urgent launch calendars
- Social posts and reminders with copy buttons
- Draft JSON payloads for OpenAI Codex, Bright Data, Eventbrite, Luma, Meetup, and a generic adapter
- Hackathon-friendly pitch tab

## How To Run

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8501
```

Then open:

```text
http://localhost:8501/
```

On this machine, the project-local venv can also serve it:

```bash
.venv\Scripts\python.exe -m http.server 8501
```

For API-backed voice transcription and Bright Data internet research, run the local Node server instead:

```bash
node server.mjs
```

Create a local `.env` file from `.env.example` and put keys there. Never put keys in `main.js`, `index.html`, or the browser extension.

When `BRIGHT_DATA_API_KEY` is configured, the report runs separate internet searches for:

- topic and demand
- audience and communities
- venue and location fit
- similar events
- promotion channels
- risks and positioning

If the key is missing or the search fails, the report clearly labels the section as an offline fallback instead of pretending it searched the web.

## Browser Extension

An optional Chrome-style extension scaffold is in `extension/`.

To test it:

1. Open Chrome or Edge extensions.
2. Enable developer mode.
3. Load unpacked extension from the `extension/` folder.
4. Click the extension, write a brief, and open the local app.

The extension only opens `http://localhost:8501/` with the prompt prefilled.

## Prompt And Voice Flow

Use the prompt at the very top of the app first. Type a natural-language brief and press Enter, or use the voice button.

Example:

```text
I want to host a friendly AWS Builder Loft event in San Francisco for engineers and founders about Codex, AI agents, and cloud workflows. Free evening event for around 30 people.
```

The app infers the event profile, updates the form, scrolls into the recommendations, and asks only the follow-up questions it still needs. If the prompt is complete, it shows that no follow-up is needed.

Voice uses browser-native APIs:

- Speech-to-text: Web Speech API when available
- Fallback speech-to-text: local backend + OpenAI transcription when `OPENAI_API_KEY` is configured
- Language detection: local keyword/character detection from the transcript
- Response language: adapted to the detected language
- Text-to-speech: browser speech synthesis with the closest available voice
- Mascot animation: simple mouth animation while listening or speaking

No API key is required for the browser-only MVP. API-backed voice and live search are optional.

## Default Demo Scenario

- Organizer type: AWS host / community builder
- Venue type: AWS Builder Loft
- City: San Francisco
- Domain: AI agents, Codex, coding tools, cloud
- Goal: attract builders
- Target audience: engineers, founders, AI builders, technical operators
- Budget: free
- Duration: evening
- Platform: Luma + Eventbrite + Meetup
- Tone: serious builder but friendly
- Expected attendance: 30
- Organizer name: AMS CG / AWS Builder Community
- Address: San Francisco, CA
- Timezone: America/Los_Angeles

## API Strategy

All publishing is dry-run by default.

OpenAI Codex is modeled as the future reasoning and build-assistant layer. In a live version, it would interpret the organizer brief, ask follow-up questions, generate the event strategy, and help produce implementation-ready outputs.

Bright Data is the optional public web research layer. When `BRIGHT_DATA_API_KEY` is present, the local server calls the Bright Data Discover API and returns research sections to the report. When it is absent, the app still works with deterministic fallback analysis.

Eventbrite is modeled as the most realistic future live publishing option. Luma and Meetup are shown as ready-to-connect adapters because their API access may require specific permissions, OAuth approval, or paid/special access.

The normal browser app does not read secrets. External API calls are made only by the local Node server when keys are configured in `.env`.

Optional future environment variables:

```env
OPENAI_API_KEY=
OPENAI_CODEX_MODEL=
BRIGHT_DATA_API_KEY=
BRIGHT_DATA_DATASET_ID=
```

## Limitations

- Uses a built-in July 2026 AI builder trend dataset
- Does not publish events
- Does not include a database, authentication, or background jobs
- Payloads are draft mappings for review before any future live integration

## Future Improvements

- OpenAI reasoning for richer report synthesis
- More detailed Bright Data result ranking and source extraction
- Explicit user-confirmed Eventbrite draft creation
- Export to Markdown, CSV, or platform import formats
- Attendee segmentation, sponsor matching, and post-event analytics

## 30-Second Pitch

I'm building Event Launch Agent. It uses an OpenAI Codex-style strategy assistant and a Bright Data-ready trend adapter to help community builders decide what event to host based on audience, venue, city, goals, and current trend signals. It ranks the best event ideas, generates the launch package, prepares social posts and reminders, and creates platform-ready API payloads - all in dry-run mode by default.
