/* ═══════════════════════════════════════════
   sNibaStudy — Theme (Dark / Light)
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.theme = (function () {

  const STORAGE_KEY = 'sniba_theme';

  function get() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function set(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    apply(theme);
  }

  function toggle() {
    set(get() === 'dark' ? 'light' : 'dark');
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme || get());
    // Update toggle icons
    document.querySelectorAll('.theme-toggle-icon').forEach(el => {
      el.className = `fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} theme-toggle-icon`;
    });
  }

  // Apply on load
  apply();

  return { get, set, toggle, apply };

})();
