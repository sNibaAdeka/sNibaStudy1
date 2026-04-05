/* ═══════════════════════════════════════════
   sNibaStudy — Auth (localStorage-based)
   No Firebase Auth — identity stored locally
   ═══════════════════════════════════════════ */

// ── SNS.auth — simple localStorage identity ──
window.SNS = window.SNS || {};
SNS.auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('sniba_user')); } catch { return null; }
  },
  saveUser(obj) {
    localStorage.setItem('sniba_user', JSON.stringify(obj));
  },
  clearUser() {
    localStorage.removeItem('sniba_user');
  },
  isLoggedIn() {
    return !!this.getUser();
  }
};

(function () {
  'use strict';

  const authOverlay = document.getElementById('auth-overlay');
  if (!authOverlay) return;

  // ── Redirect if already logged in ──
  if (SNS.auth.isLoggedIn()) {
    window.location.href = '/app.html';
    return;
  }

  // ── DOM refs ──
  const loginForm    = document.getElementById('login-form');
  const registerWiz  = document.getElementById('register-wizard');
  const forgotForm   = document.getElementById('forgot-form');
  const verifyNotice = document.getElementById('verify-notice');
  const authTitle    = document.getElementById('auth-title');
  const authSubtitle = document.getElementById('auth-subtitle');
  const authTabs     = document.querySelectorAll('.auth-tab');

  let currentStep = 1;
  const totalSteps = 3;

  // ── Open / Close modal ──
  function openModal(tab) {
    authOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    switchTab(tab || 'login');
  }

  function closeModal() {
    authOverlay.hidden = true;
    document.body.style.overflow = '';
    clearErrors();
  }

  document.getElementById('login-btn')?.addEventListener('click', () => openModal('login'));
  document.getElementById('signup-btn')?.addEventListener('click', () => openModal('register'));
  document.getElementById('hero-signup')?.addEventListener('click', () => openModal('register'));
  document.getElementById('cta-signup')?.addEventListener('click', () => openModal('register'));
  document.getElementById('auth-close')?.addEventListener('click', closeModal);

  authOverlay.addEventListener('click', e => {
    if (e.target === authOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !authOverlay.hidden) closeModal();
  });

  // ── Tab switching ──
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  function switchTab(tab) {
    authTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    const tabsBar = document.querySelector('.auth-tabs');

    loginForm.hidden     = tab !== 'login';
    if (registerWiz) registerWiz.hidden = tab !== 'register';
    forgotForm.hidden    = tab !== 'forgot';
    if (verifyNotice) verifyNotice.hidden = tab !== 'verify';
    if (tabsBar) tabsBar.style.display = (tab === 'forgot' || tab === 'verify') ? 'none' : 'flex';

    if (tab === 'login') {
      authTitle.textContent    = 'С возвращением';
      authSubtitle.textContent = 'Войди чтобы продолжить';
    } else if (tab === 'register') {
      authTitle.textContent    = 'Создай аккаунт';
      authSubtitle.textContent = 'Расскажи о себе для персонализации';
      currentStep = 1;
      showStep(1);
    } else if (tab === 'forgot') {
      authTitle.textContent    = 'Сброс пароля';
      authSubtitle.textContent = 'Информация об аккаунте';
    }
    clearErrors();

    const overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.scrollTop = 0;
  }

  // ── Forgot password ──
  document.getElementById('forgot-pw-btn')?.addEventListener('click', () => switchTab('forgot'));
  document.getElementById('back-to-login')?.addEventListener('click', () => switchTab('login'));

  // ── Password toggle (login form only) ──
  document.querySelectorAll('.pass-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = `<i class="fas fa-eye${isPassword ? '-slash' : ''}"></i>`;
    });
  });

  // ════════════════════════════════════════
  //  MULTI-STEP REGISTRATION WIZARD
  // ════════════════════════════════════════

  function showStep(step) {
    currentStep = step;
    document.querySelectorAll('.reg-step').forEach(s => {
      s.hidden = parseInt(s.dataset.step) !== step;
    });
    document.querySelectorAll('.step-indicator').forEach(ind => {
      const s = parseInt(ind.dataset.step);
      ind.classList.toggle('active', s === step);
      ind.classList.toggle('done', s < step);
      const dot = ind.querySelector('.step-dot i');
      if (dot) {
        if (s < step)      dot.className = 'fas fa-check';
        else if (s === 1)  dot.className = 'fas fa-user';
        else if (s === 2)  dot.className = 'fas fa-id-card';
        else if (s === 3)  dot.className = 'fas fa-graduation-cap';
      }
    });

    const backBtn   = document.getElementById('reg-back-btn');
    const nextBtn   = document.getElementById('reg-next-btn');
    const submitBtn = document.getElementById('reg-submit-btn');

    if (backBtn)   backBtn.style.display   = step > 1 ? '' : 'none';
    if (nextBtn)   nextBtn.style.display   = step < totalSteps ? '' : 'none';
    if (submitBtn) submitBtn.style.display = step === totalSteps ? '' : 'none';

    const overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.scrollTop = 0;
  }

  // Grade change → hide/show profile subjects
  document.getElementById('reg-grade')?.addEventListener('change', handleGradeChange);

  function handleGradeChange() {
    const grade = document.getElementById('reg-grade')?.value;
    const gradeNum = parseInt(grade);
    const profileSection   = document.getElementById('profile-subjects-section');
    const directionSection = document.getElementById('direction-section');

    if (profileSection && directionSection) {
      if (gradeNum >= 7 && gradeNum <= 9) {
        profileSection.style.display   = 'none';
        directionSection.style.display = 'none';
        document.querySelectorAll('.subj-check').forEach(cb => cb.checked = false);
      } else {
        profileSection.style.display   = '';
        directionSection.style.display = '';
      }
    }
  }

  // Next step
  document.getElementById('reg-next-btn')?.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < totalSteps) showStep(currentStep + 1);
  });

  // Back step
  document.getElementById('reg-back-btn')?.addEventListener('click', () => {
    if (currentStep > 1) showStep(currentStep - 1);
  });

  function validateStep(step) {
    clearErrors();
    if (step === 1) {
      const name  = document.getElementById('reg-name')?.value.trim();
      const email = document.getElementById('reg-email')?.value.trim();
      if (!name)                         { showError('reg-error', 'Введи своё имя'); return false; }
      if (!email || !email.includes('@')) { showError('reg-error', 'Введи корректный email'); return false; }
    }
    return true;
  }

  // ── Submit Registration ──
  document.getElementById('reg-submit-btn')?.addEventListener('click', () => {
    if (!validateStep(1)) { showStep(1); return; }

    const name      = document.getElementById('reg-name')?.value.trim();
    const email     = document.getElementById('reg-email')?.value.trim().toLowerCase();
    const dob       = document.getElementById('reg-dob')?.value || '';
    const city      = document.getElementById('reg-city')?.value.trim() || '';
    const phone     = document.getElementById('reg-phone')?.value.trim() || '';
    const bio       = document.getElementById('reg-bio')?.value.trim() || '';
    const grade     = document.getElementById('reg-grade')?.value || '';
    const school    = document.getElementById('reg-school')?.value.trim() || 'NIS';
    const direction = document.getElementById('reg-direction')?.value || '';

    if (!grade)  { showError('reg-error', 'Выбери класс'); showStep(3); return; }
    if (!school) { showError('reg-error', 'Укажи школу'); showStep(3); return; }

    const gradeNum = parseInt(grade);

    let subjects = [];
    if (gradeNum >= 10) {
      document.querySelectorAll('.subj-check:checked').forEach(cb => subjects.push(cb.value));
    } else {
      subjects = ['math', 'physics', 'chemistry', 'biology', 'english', 'history', 'geography', 'informatics'];
    }

    const goals = [];
    document.querySelectorAll('.goal-check:checked').forEach(cb => goals.push(cb.value));

    const userObj = {
      name,
      email,
      avatar: name.charAt(0).toUpperCase(),
      dob,
      city,
      phone,
      bio,
      grade: `${grade} класс`,
      school,
      direction: gradeNum >= 10 ? direction : 'base',
      profileSubjects: subjects,
      learningGoals: goals,
      level: 1,
      xp: 0,
      streak: { current: 0, longest: 0, lastStudyDate: '' },
      joinDate: new Date().toISOString().slice(0, 10),
      notifications: [{
        id: 'welcome',
        text: 'Добро пожаловать в sNibaStudy! 🎉',
        time: new Date().toISOString(),
        read: false
      }]
    };

    SNS.auth.saveUser(userObj);

    // Pre-seed store profile so app.js finds real data immediately
    localStorage.setItem('sniba_profile', JSON.stringify(userObj));
    localStorage.setItem('sniba_notifications', JSON.stringify(userObj.notifications));

    window.location.href = '/app.html';
  });

  // ════════════════════════════════════════
  //  LOGIN
  // ════════════════════════════════════════

  loginForm?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const btn   = document.getElementById('login-submit');

    clearErrors();
    setLoading(btn, true);

    const saved = SNS.auth.getUser();

    if (!saved) {
      showError('login-error', 'Аккаунт не найден. Сначала зарегистрируйся.');
      setLoading(btn, false);
      return;
    }

    if (saved.email !== email) {
      showError('login-error', 'Email не совпадает. Проверь введённый адрес.');
      setLoading(btn, false);
      return;
    }

    window.location.href = '/app.html';
  });

  // ════════════════════════════════════════
  //  FORGOT PASSWORD
  // ════════════════════════════════════════

  forgotForm?.addEventListener('submit', e => {
    e.preventDefault();
    showSuccess('forgot-success', 'Сброс пароля недоступен. Если забыл email — зарегистрируйся заново.');
  });

  // ── Helpers ──
  function setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    const textEl = btn.querySelector('.auth-submit-text');
    const loadEl = btn.querySelector('.auth-submit-loading');
    if (textEl) textEl.hidden = loading;
    if (loadEl) loadEl.hidden = !loading;
  }

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.hidden = false;
      el.textContent = msg;
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function showSuccess(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.hidden = false;
      el.textContent = msg;
    }
  }

  function clearErrors() {
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.hidden = true);
  }

  // ── Mobile nav ──
  document.getElementById('nav-hamburger')?.addEventListener('click', () => {
    const links = document.getElementById('nav-links');
    if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });

  // ── Smooth scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

})();
