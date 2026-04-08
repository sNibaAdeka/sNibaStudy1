/* ═══════════════════════════════════════════
   sNibaStudy — AI Tutor Page (Gemini-powered)
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};
SNS.pages = SNS.pages || {};

SNS.pages.aiTutor = {
  _uploadedFile: null,   // { base64, mimeType, name }
  _outputMode: null,     // 'explain' | 'flashcards' | 'quiz'

  render(container) {
    container.innerHTML = `
      <div class="page-header">
        <div class="page-header-text">
          <h2><i class="fas fa-sparkles" style="color:var(--accent);margin-right:8px;"></i>AI Tutor</h2>
          <p>Ask Gemini to explain topics, generate flashcards, or analyze your documents</p>
        </div>
      </div>

      <div class="ai-tutor-layout">

        <!-- Input Panel -->
        <div class="ai-tutor-input-panel">
          <h3><i class="fas fa-robot"></i> Ask AI Tutor</h3>

          <textarea id="ai-tutor-input" placeholder="Enter a topic or question, e.g. Newton's first law, photosynthesis, quadratic equations..."></textarea>

          <!-- File Upload -->
          <div>
            <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.04em;">
              <i class="fas fa-paperclip"></i> Upload Document (optional)
            </div>
            <div class="file-upload-zone" id="file-upload-zone">
              <input type="file" id="file-input" accept=".pdf,.jpg,.jpeg,.png,.webp,.gif,.txt">
              <div class="upload-icon"><i class="fas fa-cloud-upload-alt"></i></div>
              <div class="upload-label">
                <strong>Click to upload</strong> or drag & drop<br>
                PDF, Image, or Text file (max 20MB)
              </div>
            </div>
            <div id="file-badge-wrap" style="display:none; margin-top:8px;"></div>
          </div>

          <!-- Action Buttons -->
          <div class="ai-tutor-actions">
            <button class="btn btn-primary" id="ai-explain-btn">
              <i class="fas fa-book-open"></i> Explain Topic
            </button>
            <button class="btn btn-secondary" id="ai-flashcards-btn">
              <i class="fas fa-layer-group"></i> Generate Flashcards
            </button>
            <button class="btn btn-secondary" id="ai-quiz-btn">
              <i class="fas fa-file-circle-question"></i> Generate Quiz
            </button>
          </div>

          <div style="font-size:12px;color:var(--text-muted);line-height:1.5;padding-top:4px;">
            <i class="fas fa-circle-info"></i>
            Powered by <strong>Gemini 2.0 Flash</strong>. Upload a textbook page or document to generate study materials from it.
          </div>
        </div>

        <!-- Output Panel -->
        <div class="ai-tutor-output" id="ai-tutor-output">
          <div class="ai-tutor-placeholder">
            <div class="placeholder-icon"><i class="fas fa-sparkles"></i></div>
            <h3>Your AI Tutor is ready</h3>
            <p>Enter a topic on the left and choose what you'd like to do — get an explanation, generate flashcards, or create a quiz.</p>
            <p style="font-size:13px;">You can also upload a PDF or image of your textbook and AI will study it for you.</p>
          </div>
        </div>

      </div>
    `;

    this._uploadedFile = null;
    this._bindEvents(container);
  },

  _bindEvents(container) {
    // File upload
    const fileInput = document.getElementById('file-input');
    const zone = document.getElementById('file-upload-zone');

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) this._handleFile(file);
    });

    // Drag & drop
    zone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
    zone?.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone?.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const file = e.dataTransfer?.files?.[0];
      if (file) this._handleFile(file);
    });

    // Action buttons
    document.getElementById('ai-explain-btn')?.addEventListener('click', () => this._run('explain'));
    document.getElementById('ai-flashcards-btn')?.addEventListener('click', () => this._run('flashcards'));
    document.getElementById('ai-quiz-btn')?.addEventListener('click', () => this._run('quiz'));
  },

  _handleFile(file) {
    const ALLOWED = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'text/plain'];
    if (!ALLOWED.includes(file.type)) {
      SNS.utils.toast('Unsupported file type. Use PDF, image, or text files.', 'error');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      SNS.utils.toast('File too large. Maximum size is 20MB.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      // Strip data URL prefix, keep only base64
      const dataUrl = e.target.result;
      const base64 = dataUrl.split(',')[1];
      this._uploadedFile = { base64, mimeType: file.type, name: file.name };
      this._showFileBadge(file.name);
      SNS.utils.toast(`File "${file.name}" loaded!`, 'success', 2000);
    };
    reader.readAsDataURL(file);
  },

  _showFileBadge(name) {
    const wrap = document.getElementById('file-badge-wrap');
    const zone = document.getElementById('file-upload-zone');
    if (!wrap) return;

    wrap.style.display = 'block';
    zone.style.display = 'none';
    wrap.innerHTML = `
      <div class="file-badge">
        <i class="fas fa-file"></i>
        <span class="file-name" title="${SNS.utils.escapeHtml(name)}">${SNS.utils.escapeHtml(name)}</span>
        <button class="remove-file" id="remove-file-btn" title="Remove file">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    document.getElementById('remove-file-btn')?.addEventListener('click', () => {
      this._uploadedFile = null;
      wrap.style.display = 'none';
      zone.style.display = '';
      // Reset file input so same file can be re-selected
      const input = document.getElementById('file-input');
      if (input) input.value = '';
    });
  },

  async _run(mode) {
    const topic = document.getElementById('ai-tutor-input')?.value.trim();
    const hasFile = !!this._uploadedFile;

    if (!topic && !hasFile) {
      SNS.utils.toast('Enter a topic or upload a file first.', 'info');
      return;
    }

    this._setLoading(mode);
    this._disableButtons(true);

    try {
      if (mode === 'explain') {
        await this._runExplain(topic, hasFile);
      } else if (mode === 'flashcards') {
        await this._runFlashcards(topic, hasFile);
      } else if (mode === 'quiz') {
        await this._runQuiz(topic, hasFile);
      }
    } catch (err) {
      this._showError(err.message || 'Something went wrong. Please try again.');
    } finally {
      this._disableButtons(false);
    }
  },

  async _runExplain(topic, hasFile) {
    let text;
    if (hasFile) {
      const prompt = topic
        ? `Explain the following topic based on this document: "${topic}". Be clear and educational for a high school student.`
        : 'Explain the key concepts and topics covered in this document. Be clear and educational for a high school student. Use **bold** for important terms.';
      text = await SNS.gemini.analyzeFile(this._uploadedFile.base64, this._uploadedFile.mimeType, prompt);
    } else {
      text = await SNS.gemini.explainTopic(topic);
    }

    const output = document.getElementById('ai-tutor-output');
    if (!output) return;

    output.innerHTML = `
      <div class="ai-result-card card-appear">
        <div class="ai-result-header">
          <i class="fas fa-book-open"></i>
          <span class="result-title">${SNS.utils.escapeHtml(topic || 'Document Analysis')}</span>
          <span style="font-size:11px;color:var(--text-muted);background:var(--accent-dim,rgba(0,212,170,0.1));color:var(--accent);padding:2px 8px;border-radius:99px;font-weight:700;">Gemini</span>
        </div>
        <div class="ai-result-body" id="ai-explain-body"></div>
      </div>
    `;

    this._typeText(document.getElementById('ai-explain-body'), text);
  },

  async _runFlashcards(topic, hasFile) {
    let cards;
    if (hasFile) {
      cards = await SNS.gemini.flashcardsFromFile(this._uploadedFile.base64, this._uploadedFile.mimeType, 8);
    } else {
      cards = await SNS.gemini.generateFlashcards(topic, 8);
    }

    if (!cards || !cards.length) {
      this._showError('Could not generate flashcards. Try rephrasing your topic.');
      return;
    }

    const topicId = `ai-${Date.now()}`;
    const output = document.getElementById('ai-tutor-output');
    if (!output) return;

    output.innerHTML = `
      <div class="ai-tutor-generated card-appear">
        <div class="ai-tutor-generated-header">
          <i class="fas fa-layer-group"></i>
          AI-Generated Flashcards — ${SNS.utils.escapeHtml(topic || 'Document')}
          <span style="margin-left:auto;font-size:11px;color:var(--accent);background:var(--accent-dim,rgba(0,212,170,0.1));padding:2px 8px;border-radius:99px;font-weight:700;">${cards.length} cards</span>
        </div>
        <div class="ai-tutor-generated-body" id="ai-fc-container"></div>
      </div>
    `;

    SNS.flashcards.load(cards, topicId);
    SNS.flashcards.renderCard(document.getElementById('ai-fc-container'));
    SNS.utils.toast(`${cards.length} flashcards generated!`, 'success');
  },

  async _runQuiz(topic, hasFile) {
    let questions;
    if (hasFile) {
      questions = await SNS.gemini.quizFromFile(this._uploadedFile.base64, this._uploadedFile.mimeType, 5);
    } else {
      questions = await SNS.gemini.generateQuiz(topic, 5);
    }

    if (!questions || !questions.length) {
      this._showError('Could not generate quiz questions. Try rephrasing your topic.');
      return;
    }

    const topicId = `ai-quiz-${Date.now()}`;
    const output = document.getElementById('ai-tutor-output');
    if (!output) return;

    output.innerHTML = `
      <div class="ai-tutor-generated card-appear">
        <div class="ai-tutor-generated-header">
          <i class="fas fa-file-circle-question"></i>
          AI-Generated Quiz — ${SNS.utils.escapeHtml(topic || 'Document')}
          <span style="margin-left:auto;font-size:11px;color:var(--accent);background:var(--accent-dim,rgba(0,212,170,0.1));padding:2px 8px;border-radius:99px;font-weight:700;">${questions.length} questions</span>
        </div>
        <div class="ai-tutor-generated-body" id="ai-quiz-container"></div>
      </div>
    `;

    SNS.quiz.load(questions, topicId);
    SNS.quiz.render(document.getElementById('ai-quiz-container'));
    SNS.utils.toast(`${questions.length} quiz questions generated!`, 'success');
  },

  _setLoading(mode) {
    const labels = {
      explain: 'Generating explanation...',
      flashcards: 'Generating flashcards...',
      quiz: 'Generating quiz questions...'
    };
    const output = document.getElementById('ai-tutor-output');
    if (!output) return;
    output.innerHTML = `
      <div class="ai-loading-card card-appear">
        <i class="fas fa-spinner fa-spin"></i>
        <span>${labels[mode] || 'Thinking...'}</span>
      </div>
    `;
  },

  _showError(msg) {
    const output = document.getElementById('ai-tutor-output');
    if (!output) return;
    output.innerHTML = `
      <div class="ai-result-card card-appear">
        <div class="ai-result-header">
          <i class="fas fa-triangle-exclamation" style="color:var(--red,#f87171);"></i>
          <span class="result-title">Error</span>
        </div>
        <div class="ai-result-body" style="color:var(--red,#f87171);">
          ${SNS.utils.escapeHtml(msg)}
        </div>
      </div>
    `;
  },

  _disableButtons(disabled) {
    ['ai-explain-btn', 'ai-flashcards-btn', 'ai-quiz-btn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.disabled = disabled;
    });
  },

  /* Typing effect — renders text word-by-word for a smooth appearance */
  _typeText(el, text) {
    if (!el) return;
    const formatted = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/`([^`]+)`/g, '<code class="math-formula">$1</code>');

    // Split into tokens preserving HTML tags
    const tokens = formatted.split(/(<[^>]+>|<br>)/);
    let i = 0;
    el.innerHTML = '';
    el.classList.add('typing-cursor');

    const tick = setInterval(() => {
      if (i >= tokens.length) {
        clearInterval(tick);
        el.classList.remove('typing-cursor');
        return;
      }
      // Append next token
      const span = document.createElement('span');
      span.innerHTML = tokens[i];
      el.appendChild(span);
      i++;
    }, 8);
  }
};
