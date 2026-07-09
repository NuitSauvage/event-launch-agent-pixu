# Event Launch Agent

Event Launch Agent is a simple browser app built with plain HTML, CSS, and JavaScript. It does not use Streamlit, does not require API keys, and does not make external API calls by default.

## What The Project Does

The app helps community builders and venues decide what event to host from a simple prompt. It fills in optional details, suggests event ideas, generates a launch plan, prepares posts and reminders, and creates draft platform payloads.

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
