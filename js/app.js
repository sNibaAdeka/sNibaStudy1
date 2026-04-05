/* ═══════════════════════════════════════════
   sNibaStudy — Main Application Entry Point
   Auth-aware boot, no fake data
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Auth gate — redirect to landing if not authenticated ──
  const loadingScreen = document.getElementById('loading-screen');
  const appShell = document.getElementById('app-shell');

  const user = SNS.auth.getUser();
  if (!user) {
    window.location.href = '/index.html';
  } else {
    // Use email as UID (localStorage-only identity)
    SNS.store.setUser(user.email);

    // Ensure profile is populated from auth user object
    const profile = SNS.store.get('profile');
    if (!profile.name || profile.name === 'Student') {
      SNS.store.update('profile', p => ({
        ...p,
        name: user.name || p.name,
        email: user.email,
        avatar: (user.name || 'S').charAt(0).toUpperCase(),
        grade: user.grade || p.grade,
        school: user.school || p.school
      }));
    }

    // Hide loading, show app
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (appShell) appShell.style.display = '';

    init();
  }

  function init() {
    updateProfileUI();
    registerRoutes();
    wireSidebar();
    wireHeader();
    wireFocusOverlay();
    wireThemeLang();
    SNS.router.init();
    checkStreak();
    renderNotifications();

    // Apply saved language
    if (SNS.i18n) SNS.i18n.applyToPage();

    console.log('%csNibaStudy loaded', 'color:#00d4aa;font-weight:bold;font-size:14px');
  }

  function wireThemeLang() {
    document.getElementById('theme-toggle-app')?.addEventListener('click', () => {
      if (SNS.theme) SNS.theme.toggle();
    });
    document.getElementById('lang-toggle-app')?.addEventListener('click', () => {
      if (SNS.i18n) SNS.i18n.toggle();
    });
  }

  // ── Route Registration ──
  function registerRoutes() {
    const R = SNS.router.register.bind(SNS.router);

    R('dashboard', {
      title: 'Dashboard',
      subtitle: 'Your study overview',
      render: (c, p) => SNS.pages.dashboard.render(c, p)
    });

    R('study', {
      title: 'Study System',
      subtitle: 'AI-powered learning',
      render: (c, p) => SNS.pages.study.render(c, p)
    });

    R('flashcards', {
      title: 'Flashcards',
      subtitle: 'Review your decks',
      render: (c, p) => SNS.pages.flashcards_page.render(c, p)
    });

    R('tests', {
      title: 'Tests',
      subtitle: 'Practice quizzes',
      render: (c, p) => SNS.pages.tests.render(c, p)
    });

    R('nis', {
      title: 'NIS Program',
      subtitle: 'School curriculum',
      render: (c, p) => SNS.pages.nis.render(c, p)
    });

    R('resources', {
      title: 'Resources Hub',
      subtitle: 'External learning links',
      render: (c, p) => SNS.pages.resources.render(c, p)
    });

    R('friends', {
      title: 'Friends',
      subtitle: 'Study together',
      render: (c, p) => SNS.pages.friends.render(c, p)
    });

    R('rooms', {
      title: 'Study Rooms',
      subtitle: 'Live study sessions',
      render: (c, p) => SNS.pages.rooms.render(c, p)
    });

    R('tools', {
      title: 'Study Tools',
      subtitle: 'Pomodoro & goals',
      render: (c, p) => SNS.pages.tools.render(c, p)
    });

    R('progress', {
      title: 'My Progress',
      subtitle: 'Analytics & achievements',
      render: (c, p) => SNS.pages.progress.render(c, p)
    });

    R('saved', {
      title: 'Saved Content',
      subtitle: 'Your library',
      render: (c, p) => SNS.pages.saved.render(c, p)
    });

    R('profile', {
      title: 'Profile',
      subtitle: 'Account settings',
      render: (c, p) => SNS.pages.profile.render(c, p)
    });
  }

  // ── Sidebar Navigation ──
  function wireSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');

    document.querySelectorAll('.nav-item[data-route]').forEach(item => {
      item.addEventListener('click', () => {
        SNS.router.navigate(item.dataset.route);
        if (window.innerWidth < 768) closeSidebar();
      });

      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') item.click();
      });
    });

    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    overlay?.addEventListener('click', closeSidebar);

    function openSidebar() {
      sidebar?.classList.add('open');
      overlay?.classList.add('visible');
      toggleBtn?.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('visible');
      toggleBtn?.setAttribute('aria-expanded', 'false');
    }

    document.getElementById('sidebar-user-chip')?.addEventListener('click', () => {
      SNS.router.navigate('profile');
    });
  }

  // ── Header Wiring ──
  function wireHeader() {
    const searchInput    = document.getElementById('global-search');
    const searchDropdown = document.getElementById('search-dropdown');
    const notifBtn       = document.getElementById('notif-btn');
    const notifPanel     = document.getElementById('notif-panel');
    const headerAvatar   = document.getElementById('header-avatar');
    const profileDropdown= document.getElementById('profile-dropdown');
    const logoutBtn      = document.getElementById('logout-btn');
    const markAllRead    = document.getElementById('mark-all-read');

    // Search
    searchInput?.addEventListener('input', SNS.utils.debounce((e) => {
      const q = e.target.value.trim();
      if (!q) { searchDropdown.hidden = true; return; }
      const results = SNS.searchTopics(q);
      if (!results.length) { searchDropdown.hidden = true; return; }
      searchDropdown.hidden = false;
      searchDropdown.innerHTML = results.slice(0, 8).map(r => `
        <div class="search-result-item" data-topic="${SNS.utils.escapeHtml(r.sub.id)}">
          <i class="fas ${r.subject.icon}" style="color:var(${r.subject.colorVar});font-size:13px;width:16px"></i>
          <div>
            <div>${SNS.utils.escapeHtml(r.sub.title)}</div>
            <div class="result-subject">${SNS.utils.escapeHtml(r.subject.label)} · ${SNS.utils.escapeHtml(r.topic.title)}</div>
          </div>
        </div>
      `).join('');
    }, 250));

    searchDropdown?.addEventListener('click', (e) => {
      const item = e.target.closest('[data-topic]');
      if (!item) return;
      SNS.router.navigate('study', { topic: item.dataset.topic });
      searchInput.value = '';
      searchDropdown.hidden = true;
    });

    searchInput?.addEventListener('keydown', e => {
      if (e.key === 'Escape') { searchDropdown.hidden = true; searchInput.blur(); }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput?.contains(e.target)) searchDropdown.hidden = true;
      if (!headerAvatar?.contains(e.target) && !profileDropdown?.contains(e.target)) profileDropdown.hidden = true;
      if (!notifBtn?.contains(e.target) && !notifPanel?.contains(e.target)) notifPanel.hidden = true;
    });

    // Notifications
    notifBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.hidden = true;
      notifPanel.hidden = !notifPanel.hidden;
      if (!notifPanel.hidden) {
        positionDropdown(notifPanel, notifBtn);
        renderNotifications();
      }
    });

    markAllRead?.addEventListener('click', () => {
      SNS.store.update('notifications', notifs => notifs.map(n => ({ ...n, read: true })));
      document.getElementById('notif-dot').hidden = true;
      renderNotifications();
    });

    // Profile dropdown
    headerAvatar?.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.hidden = true;
      profileDropdown.hidden = !profileDropdown.hidden;
      if (!profileDropdown.hidden) positionDropdown(profileDropdown, headerAvatar);
    });

    document.querySelectorAll('#profile-dropdown [data-route]').forEach(item => {
      item.addEventListener('click', () => {
        SNS.router.navigate(item.dataset.route);
        profileDropdown.hidden = true;
      });
    });

    // Logout
    logoutBtn?.addEventListener('click', () => {
      if (!confirm('Log out of sNibaStudy?')) return;
      profileDropdown.hidden = true;
      SNS.auth.clearUser();
      SNS.store.clearAll();
      window.location.href = '/index.html';
    });
  }

  // ── Focus Mode Overlay ──
  function wireFocusOverlay() {
    document.getElementById('focus-pause-btn')?.addEventListener('click', () => {
      SNS.pomodoro.toggle();
      const btn = document.getElementById('focus-pause-btn');
      if (btn) {
        const running = SNS.pomodoro.isRunning();
        btn.innerHTML = `<i class="fas fa-${running ? 'pause' : 'play'}"></i> ${running ? 'Pause' : 'Resume'}`;
      }
    });

    document.getElementById('focus-exit-btn')?.addEventListener('click', () => {
      document.getElementById('focus-overlay').hidden = true;
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('focus-overlay');
        if (overlay && !overlay.hidden) overlay.hidden = true;
      }
    });
  }

  // ── Update Profile in UI ──
  function updateProfileUI() {
    const profile = SNS.store.get('profile');
    const initial = profile.avatar || profile.name[0].toUpperCase();

    setTextContent('sidebar-name', profile.name);
    setTextContent('sidebar-avatar', initial);
    setTextContent('sidebar-level', profile.level);
    setTextContent('sidebar-xp', profile.xp);
    setTextContent('header-avatar', initial);
    setTextContent('dropdown-avatar', initial);
    setTextContent('dropdown-name', profile.name);
    setTextContent('dropdown-level-text', `Level ${profile.level} · ${profile.xp} XP`);
  }

  // ── Notifications ──
  function renderNotifications() {
    const panel = document.getElementById('notif-list');
    const dotEl = document.getElementById('notif-dot');
    if (!panel) return;

    const notifs = SNS.store.get('notifications').slice(0, 10);
    const unread = notifs.filter(n => !n.read).length;

    if (dotEl) dotEl.hidden = unread === 0;

    panel.innerHTML = notifs.map(n => `
      <div class="notif-item ${n.read ? '' : 'unread'}">
        ${!n.read ? '<div class="notif-dot-sm"></div>' : '<div style="width:8px"></div>'}
        <div>
          <div class="notif-text">${SNS.utils.escapeHtml(n.text)}</div>
          <div class="notif-time">${SNS.utils.timeAgo(n.time)}</div>
        </div>
      </div>
    `).join('') || '<div style="padding:20px;text-align:center;font-size:13px;color:var(--text-muted);">No notifications</div>';
  }

  // ── Streak Check ──
  function checkStreak() {
    const streak = SNS.store.get('streak');
    const todayStr = new Date().toISOString().slice(0, 10);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().slice(0, 10);

    if (streak.lastStudyDate && streak.lastStudyDate < yStr && streak.current > 0) {
      SNS.store.update('streak', s => ({ ...s, current: 0 }));
      SNS.store.update('notifications', notifs => [{
        id: SNS.utils.generateId(),
        text: 'Your streak was reset. Study today to start a new one!',
        time: new Date().toISOString(),
        read: false
      }, ...notifs].slice(0, 30));
    }
  }

  // ── Helpers ──
  function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function positionDropdown(panel, anchor) {
    const rect = anchor.getBoundingClientRect();
    panel.style.top  = (rect.bottom + 8) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    panel.style.left  = 'auto';
  }

})();
