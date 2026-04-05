/* ═══════════════════════════════════════════
   sNibaStudy — Resources Hub Page
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};
SNS.pages = SNS.pages || {};

SNS.pages.resources = {
  activeFilter: 'all',

  render(container) {
    const categoryColors = {
      'ielts':   { color: '--purple', dimColor: 'var(--purple-dim)' },
      'it':      { color: '--accent', dimColor: 'var(--accent-dim)' },
      'kz-edu':  { color: '--yellow', dimColor: 'var(--yellow-dim)' },
      'stem':    { color: '--green',  dimColor: 'var(--green-dim)'  },
      'general': { color: '--blue',   dimColor: 'var(--blue-dim)'   }
    };

    const allCategories = SNS.RESOURCES.map(c => c.category);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-header-text">
          <h2><i class="fas fa-link" style="color:var(--accent);margin-right:8px;"></i>Resources Hub</h2>
          <p>Curated external learning resources for every subject</p>
        </div>
      </div>

      <!-- Category Filters -->
      <div class="resources-filters stagger">
        <div class="chip active" data-filter="all">
          <i class="fas fa-grid-2"></i> All Resources
        </div>
        ${SNS.RESOURCES.map(cat => `
          <div class="chip" data-filter="${cat.category}">
            <i class="fas ${cat.categoryIcon}"></i> ${SNS.utils.escapeHtml(cat.categoryLabel)}
          </div>
        `).join('')}
      </div>

      <!-- Resource Sections -->
      <div id="resources-content" class="stagger">
        ${SNS.RESOURCES.map(cat => this.renderCategory(cat, categoryColors[cat.category] || { color: '--accent', dimColor: 'var(--accent-dim)' })).join('')}
      </div>
    `;

    // Wire filter chips
    container.querySelectorAll('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeFilter = chip.dataset.filter;

        container.querySelectorAll('.resource-category').forEach(section => {
          const show = this.activeFilter === 'all' || section.dataset.category === this.activeFilter;
          section.style.display = show ? '' : 'none';
        });
      });
    });

    // Wire save buttons
    container.querySelectorAll('.resource-save-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.dataset.resourceId;
        const saved = JSON.parse(localStorage.getItem('sniba_savedResources') || '[]');
        if (saved.includes(id)) {
          const updated = saved.filter(s => s !== id);
          localStorage.setItem('sniba_savedResources', JSON.stringify(updated));
          btn.classList.remove('saved');
          btn.innerHTML = '<i class="fas fa-bookmark"></i>';
          SNS.utils.toast('Removed from saved', 'info', 1500);
        } else {
          saved.push(id);
          localStorage.setItem('sniba_savedResources', JSON.stringify(saved));
          btn.classList.add('saved');
          btn.innerHTML = '<i class="fas fa-bookmark" style="color:var(--accent)"></i>';
          SNS.utils.toast('Resource saved!', 'success', 1500);
        }
      });
    });
  },

  renderCategory(cat, style) {
    const saved = JSON.parse(localStorage.getItem('sniba_savedResources') || '[]');
    const cardsHtml = cat.resources.map(r => this.renderResourceCard(r, style, saved.includes(r.id))).join('');

    return `
      <div class="resource-category" data-category="${cat.category}">
        <div class="resource-category-header">
          <div class="resource-category-icon" style="background:${style.dimColor};color:var(${style.color});">
            <i class="fas ${cat.categoryIcon}"></i>
          </div>
          <div class="resource-category-name">${SNS.utils.escapeHtml(cat.categoryLabel)}</div>
          <span class="resource-category-count">${cat.resources.length} resources</span>
        </div>
        <div class="resource-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  },

  renderResourceCard(r, style, isSaved) {
    const tagsHtml = (r.tags || []).map(tag => `<span class="resource-tag">${SNS.utils.escapeHtml(tag)}</span>`).join('');

    return `
      <div class="resource-card hover-lift ${r.featured ? 'glow-card' : ''}">
        ${r.featured ? '<div class="resource-featured-badge" style="position:absolute;top:12px;right:12px;"><span class="badge badge-accent" style="font-size:10px">Featured</span></div>' : ''}
        <div class="resource-card-header">
          <div class="resource-logo" style="background:${r.iconBg};font-size:20px;">${r.icon}</div>
          <div>
            <div class="resource-title">${SNS.utils.escapeHtml(r.name)}</div>
            <div class="resource-type">${SNS.utils.escapeHtml(r.type)}</div>
          </div>
        </div>
        <div class="resource-description">${SNS.utils.escapeHtml(r.description)}</div>
        <div class="resource-tags">${tagsHtml}</div>
        <div class="resource-card-footer">
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fas fa-arrow-up-right-from-square"></i> Open Resource
          </a>
          <button class="resource-save-btn ${isSaved ? 'saved' : ''}" data-resource-id="${r.id}" title="${isSaved ? 'Remove from saved' : 'Save resource'}">
            <i class="fas fa-bookmark"></i>
          </button>
        </div>
      </div>
    `;
  }
};
