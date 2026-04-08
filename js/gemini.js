/* ═══════════════════════════════════════════
   sNibaStudy — Gemini AI Client
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.gemini = {
  API_KEY: 'AIzaSyA6cDh2N01ec9Wrnuhb0qRANHVpGyY_yvI',
  MODEL: 'gemini-2.0-flash',

  get BASE_URL() {
    return `https://generativelanguage.googleapis.com/v1beta/models/${this.MODEL}:generateContent?key=${this.API_KEY}`;
  },

  /* ── Core fetch helper ── */
  async _post(payload) {
    const res = await fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Gemini error ${res.status}`);
    }
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  },

  /* ── Plain text chat (with optional conversation history) ── */
  async ask(userMessage, systemContext = '', history = []) {
    const contents = [];

    // Prepend system context as first user turn if provided
    if (systemContext) {
      contents.push({
        role: 'user',
        parts: [{ text: systemContext }]
      });
      contents.push({
        role: 'model',
        parts: [{ text: 'Understood. I will help as your study assistant.' }]
      });
    }

    // Add conversation history
    for (const msg of history) {
      contents.push({
        role: msg.role,
        parts: [{ text: msg.text }]
      });
    }

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    return this._post({ contents });
  },

  /* ── Explain a topic ── */
  async explainTopic(topic, context = '') {
    const prompt = `You are an expert tutor for NIS (Nazarbayev Intellectual Schools) students in Kazakhstan.
Explain the topic "${topic}" clearly and concisely.
${context ? `Additional context from the student: ${context}` : ''}
Use simple language, give examples, and structure your answer with key points.
Format with **bold** for important terms and use line breaks for readability.`;
    return this.ask(prompt);
  },

  /* ── Generate flashcards ── */
  async generateFlashcards(topic, count = 5, context = '') {
    const prompt = `You are creating study flashcards for NIS school students.
Generate exactly ${count} flashcards for the topic: "${topic}"
${context ? `Context/source material: ${context}` : ''}

Return ONLY a valid JSON array with no extra text, markdown, or code fences.
Format: [{"front":"term or question","back":"definition or answer"}, ...]

Make the cards educational, accurate, and appropriate for high school level.`;

    const raw = await this.ask(prompt);
    return this._parseJSON(raw, []);
  },

  /* ── Generate quiz questions ── */
  async generateQuiz(topic, count = 5, context = '') {
    const prompt = `You are creating a multiple-choice quiz for NIS school students.
Generate exactly ${count} questions about: "${topic}"
${context ? `Context/source material: ${context}` : ''}

Return ONLY a valid JSON array with no extra text, markdown, or code fences.
Format: [{"q":"question text","options":["A","B","C","D"],"correct":0,"explanation":"why this answer is correct"}, ...]
"correct" is the zero-based index of the correct option.

Make questions educational, accurate, and appropriate for high school level.`;

    const raw = await this.ask(prompt);
    return this._parseJSON(raw, []);
  },

  /* ── Analyze an uploaded file ── */
  async analyzeFile(base64Data, mimeType, prompt) {
    const contents = [{
      role: 'user',
      parts: [
        {
          inline_data: {
            mime_type: mimeType,
            data: base64Data
          }
        },
        { text: prompt }
      ]
    }];
    return this._post({ contents });
  },

  /* ── Generate flashcards from uploaded file ── */
  async flashcardsFromFile(base64Data, mimeType, count = 8) {
    const prompt = `You are creating study flashcards for NIS school students based on this document.
Generate exactly ${count} flashcards covering the key concepts, terms, and ideas from this material.

Return ONLY a valid JSON array with no extra text, markdown, or code fences.
Format: [{"front":"term or question","back":"definition or answer"}, ...]

Focus on the most important educational content from the document.`;

    const raw = await this.analyzeFile(base64Data, mimeType, prompt);
    return this._parseJSON(raw, []);
  },

  /* ── Generate quiz from uploaded file ── */
  async quizFromFile(base64Data, mimeType, count = 5) {
    const prompt = `You are creating a multiple-choice quiz for NIS school students based on this document.
Generate exactly ${count} questions testing understanding of the key content in this material.

Return ONLY a valid JSON array with no extra text, markdown, or code fences.
Format: [{"q":"question text","options":["A","B","C","D"],"correct":0,"explanation":"why this answer is correct"}, ...]
"correct" is the zero-based index of the correct option.`;

    const raw = await this.analyzeFile(base64Data, mimeType, prompt);
    return this._parseJSON(raw, []);
  },

  /* ── JSON parser with cleanup ── */
  _parseJSON(text, fallback) {
    try {
      // Strip markdown code fences if present
      const cleaned = text
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();
      return JSON.parse(cleaned);
    } catch (_) {
      // Try to extract JSON array from mixed text
      const match = text.match(/\[[\s\S]*\]/);
      if (match) {
        try { return JSON.parse(match[0]); } catch (_) {}
      }
      return fallback;
    }
  }
};
