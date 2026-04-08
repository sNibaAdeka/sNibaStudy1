# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

No build step exists — this is a zero-dependency vanilla JS static site.

**Local development:** serve the root directory with any static HTTP server, then open `http://localhost:<port>/`:
```bash
npx serve .
# or
python3 -m http.server 8080
```

**Entry points:**
- `index.html` — landing page + auth modal
- `app.html` — the full SPA (requires login)

**Deployment:** Netlify, publishing from root (`.`). `_redirects` and `netlify.toml` handle SPA routing so `/app` and `/app/*` all serve `app.html`.

There are no tests, no linter config, and no package.json.

## Architecture

### Global Namespace
All code is attached to `window.SNS`. Scripts must be loaded in the order defined in `app.html` — later scripts depend on earlier ones. No module bundler.

### Routing (`js/router.js`)
Hash-based SPA router. Routes are registered in `js/app.js` via `SNS.router.register(name, { title, subtitle, render })`. Navigation calls `SNS.router.navigate('route-name')`. The router calls `route.render(container, params)` and injects HTML into `#page-container`.

**To add a new page:**
1. Create `js/pages/yourpage.js` that sets `SNS.pages.yourPage = { render(container, params) { ... } }`
2. Add `<script src="js/pages/yourpage.js">` in `app.html` (before `app.js`)
3. Register the route in `js/app.js` → `registerRoutes()`
4. Add a nav item in `app.html` sidebar with `data-route="your-route"`

### Data & State (`js/store.js`)
`SNS.store` is a dual-layer store:
- **Read:** `SNS.store.get(key)` — reads from `localStorage` (prefix `sniba_`)
- **Write:** `SNS.store.set(key, value)` / `SNS.store.update(key, fn)` — writes localStorage and syncs to Firestore
- **Subscribe:** `SNS.store.subscribe(key, fn)` — reactive listener

Firestore (`DB`) is a global from `js/firebase-config.js`. User documents live at `DB.collection('users').doc(email)`. Auth is localStorage-only (`sniba_user` key) — **not** Firebase Auth.

### Curriculum Data (`js/data/nis-curriculum.js`)
`SNS.CURRICULUM` is an array of 5 subject objects. Each subject has `topics[]`, each topic has `subtopics[]`. Each subtopic has:
- `id`, `title`, `grades[]`, `difficulty`, `estimatedMin`
- `explanation` / `simpleExplanation` / `deepExplanation` (markdown-ish strings)
- `quiz[]` — `{ q, options[], correct, explanation }`
- `flashcards[]` — `{ front, back }`

Global helpers: `SNS.searchTopics(query)` → ranked results, `SNS.findSubtopic(id)` → `{ sub, topic, subject }`.

### Reusable Engines (`js/modules/`)
These are singletons — only one instance of each can be active at a time.

- **`SNS.flashcards`** — `load(cards[], topicId)` then `renderCard(container)`. Saves progress to `SNS.store.flashcardDecks`.
- **`SNS.quiz`** — `load(questions[], topicId)` then `render(container, onComplete)`. Saves scores to `SNS.store.quizScores`.
- **`SNS.pomodoro`** — timer engine used by the tools page and focus overlay.

### Gemini AI (`js/gemini.js`)
`SNS.gemini` wraps the Gemini 2.0 Flash REST API. Key methods:
- `ask(prompt, systemContext, history[])` — chat with conversation history
- `generateFlashcards(topic, count, context?)` → `[{front, back}]`
- `generateQuiz(topic, count, context?)` → `[{q, options[], correct, explanation}]`
- `analyzeFile(base64, mimeType, prompt)` — multimodal (PDF/image support)
- `flashcardsFromFile(base64, mimeType, count)` / `quizFromFile(...)` — convenience wrappers

All JSON-returning methods use `_parseJSON()` which strips markdown code fences before parsing.

### Study Page (`js/pages/study.js`)
Main learning flow: user enters topic → `SNS.searchTopics()` → `renderStudyContent()` renders explanation + three tabs (Quiz, Flashcards, AI Chat). The AI Chat tab uses `SNS.gemini.ask()` with a topic-scoped system prompt and maintains conversation history in a local array. The Quiz and Flashcard panels each have an "Generate with AI" button that calls `SNS.gemini.generateQuiz()` / `generateFlashcards()` and re-renders via the engine singletons.

### AI Tutor Page (`js/pages/ai-tutor.js`)
Dedicated page (`#ai-tutor`) for document-based study. File upload via `FileReader` → base64 → `SNS.gemini.analyzeFile()`. Supports PDF, JPEG, PNG, WEBP, GIF, TXT (max 20MB inline).

### CSS
Variables in `css/variables.css` (design tokens: `--accent`, `--bg-card`, `--border`, `--radius`, etc.). Each page/feature has its own CSS file loaded in `app.html`. No CSS preprocessor.

### i18n (`js/i18n.js`)
`SNS.i18n` handles EN/RU toggle. After re-rendering a page, call `SNS.i18n.applyToPage()` if elements use `data-i18n` attributes.
