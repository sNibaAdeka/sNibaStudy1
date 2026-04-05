/* ═══════════════════════════════════════════
   sNibaStudy — Social Page (Real Firestore)
   Friends, Rooms, Leaderboard
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};
SNS.pages = SNS.pages || {};

SNS.pages.social = {
  activeTab: 'friends',
  friendsData: [],
  roomsData: [],

  async render(container, params) {
    if (params && params.tab) this.activeTab = params.tab;
    const profile = SNS.store.get('profile');
    const friendRequests = SNS.store.get('friendRequests') || [];

    container.innerHTML = `
      <div class="page-header">
        <div class="page-header-text">
          <h2><i class="fas fa-user-group" style="color:var(--green);margin-right:8px;"></i>Social</h2>
          <p>Study with friends, compete on the leaderboard, and join study rooms</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-secondary" id="add-friend-modal-btn">
            <i class="fas fa-user-plus"></i> Add Friend
          </button>
        </div>
      </div>

      ${friendRequests.length ? `
        <div class="friend-requests-banner" id="friend-requests-section">
          <div class="section-title" style="margin-bottom:10px;">
            <i class="fas fa-inbox"></i> Friend Requests (${friendRequests.length})
          </div>
          <div class="friend-requests-list">
            ${friendRequests.map(r => `
              <div class="friend-request-item" data-uid="${r.uid}">
                <div class="user-avatar" style="width:36px;height:36px;font-size:14px">${SNS.utils.escapeHtml(r.avatar || r.name.charAt(0))}</div>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${SNS.utils.escapeHtml(r.name)}</div>
                  <div style="font-size:12px;color:var(--text-muted)">${SNS.utils.escapeHtml(r.school || '')} · ${SNS.utils.escapeHtml(r.grade || '')}</div>
                </div>
                <button class="btn btn-sm btn-primary accept-friend-btn" data-uid="${r.uid}"><i class="fas fa-check"></i> Accept</button>
                <button class="btn btn-sm btn-ghost decline-friend-btn" data-uid="${r.uid}"><i class="fas fa-times"></i></button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Tab Bar -->
      <div class="tabs" style="margin-bottom:20px;max-width:400px;">
        <button class="tab ${this.activeTab === 'friends' ? 'active' : ''}" data-tab="friends">
          <i class="fas fa-user-group"></i> Friends
        </button>
        <button class="tab ${this.activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">
          <i class="fas fa-trophy"></i> Leaderboard
        </button>
        <button class="tab ${this.activeTab === 'rooms' ? 'active' : ''}" data-tab="rooms">
          <i class="fas fa-door-open"></i> Rooms
        </button>
      </div>

      <div id="social-tab-content">
        <div style="text-align:center;padding:40px;color:var(--text-muted);">
          <i class="fas fa-spinner fa-spin" style="font-size:24px;margin-bottom:10px;display:block;"></i>
          Loading...
        </div>
      </div>
    `;

    // Wire tabs
    container.querySelectorAll('.tab[data-tab]').forEach(tab => {
      tab.addEventListener('click', () => {
        container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeTab = tab.dataset.tab;
        this.renderActiveTab();
      });
    });

    // Wire friend requests
    container.querySelectorAll('.accept-friend-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        const ok = await SNS.store.acceptFriendRequest(btn.dataset.uid);
        if (ok) {
          SNS.utils.toast('Friend added!', 'success');
          btn.closest('.friend-request-item')?.remove();
          this.loadFriendsAndRender();
        } else {
          SNS.utils.toast('Error accepting request', 'error');
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-check"></i> Accept';
        }
      });
    });

    container.querySelectorAll('.decline-friend-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        await SNS.store.declineFriendRequest(btn.dataset.uid);
        btn.closest('.friend-request-item')?.remove();
        SNS.utils.toast('Request declined', 'info');
      });
    });

    document.getElementById('add-friend-modal-btn')?.addEventListener('click', () => {
      showAddFriendModal();
    });

    // Load data async
    await this.loadFriendsAndRender();
  },

  async loadFriendsAndRender() {
    this.friendsData = await SNS.store.getFriendsWithStats();
    this.roomsData = await SNS.store.getRooms();
    this.renderActiveTab();
  },

  renderActiveTab() {
    const content = document.getElementById('social-tab-content');
    if (!content) return;

    if (this.activeTab === 'friends') {
      content.innerHTML = this.renderFriends(this.friendsData);
    } else if (this.activeTab === 'leaderboard') {
      content.innerHTML = this.renderLeaderboard(this.friendsData);
    } else if (this.activeTab === 'rooms') {
      content.innerHTML = this.renderRooms(this.roomsData);
    }
    this.wireTabContent();
  },

  renderFriends(friends) {
    if (!friends.length) {
      return `
        <div class="empty-state" style="padding:60px 20px;">
          <div class="empty-state-icon"><i class="fas fa-user-group"></i></div>
          <h3>No friends yet</h3>
          <p>Search for other sNibaStudy users and add them as friends to study together!</p>
          <button class="btn btn-primary" style="margin-top:12px;" onclick="document.getElementById('add-friend-modal-btn').click()">
            <i class="fas fa-user-plus"></i> Find Friends
          </button>
        </div>
      `;
    }

    const friendCards = friends.map(f => `
      <div class="friend-card card-appear">
        <div class="friend-card-header">
          <div class="friend-avatar-wrap">
            <div class="friend-avatar">${SNS.utils.escapeHtml(f.avatar || f.name.charAt(0))}</div>
          </div>
          <div class="friend-info">
            <div class="friend-name">${SNS.utils.escapeHtml(f.name)}</div>
            <div class="friend-school">${SNS.utils.escapeHtml(f.school || 'NIS')} · ${SNS.utils.escapeHtml(f.grade || '')}</div>
          </div>
        </div>

        <div class="friend-stats">
          <div class="friend-stat">
            <div class="friend-stat-value text-accent">${f.xp}</div>
            <div class="friend-stat-label">XP</div>
          </div>
          <div class="friend-stat">
            <div class="friend-stat-value text-orange">${f.streak || 0}</div>
            <div class="friend-stat-label">Streak</div>
          </div>
          <div class="friend-stat">
            <div class="friend-stat-value">${SNS.utils.formatMinutes(f.studyTimeToday || 0)}</div>
            <div class="friend-stat-label">Today</div>
          </div>
          <div class="friend-stat">
            <div class="friend-stat-value">Lv.${f.level}</div>
            <div class="friend-stat-label">Level</div>
          </div>
        </div>

        <div class="friend-study-bar">
          <div class="friend-study-label">
            <span>Study time today</span>
            <span>${SNS.utils.formatMinutes(f.studyTimeToday || 0)}</span>
          </div>
          <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${Math.min((f.studyTimeToday/180)*100,100)}%;background:var(--accent)"></div></div>
        </div>
      </div>
    `).join('');

    return `<div class="friends-grid stagger">${friendCards}</div>`;
  },

  renderLeaderboard(friends) {
    const profile = SNS.store.get('profile');
    const streak = SNS.store.get('streak');
    const todayMin = (SNS.store.get('studyTime') || {})[SNS.utils.today()] || 0;

    const self = {
      name: profile.name,
      avatar: profile.avatar,
      grade: profile.grade,
      school: profile.school,
      level: profile.level,
      xp: profile.xp,
      streak: streak.current,
      studyTimeToday: todayMin,
      isMe: true
    };

    const lb = [self, ...friends]
      .sort((a, b) => b.xp - a.xp)
      .map((f, i) => ({ ...f, rank: i + 1 }));

    const rowsHtml = lb.map(f => `
      <div class="lb-table-row ${f.isMe ? 'is-me' : ''}">
        <div class="lb-rank-cell ${f.rank === 1 ? 'gold' : f.rank === 2 ? 'silver' : f.rank === 3 ? 'bronze' : ''}">
          ${f.rank <= 3 ? ['&#x1f947;','&#x1f948;','&#x1f949;'][f.rank-1] : f.rank}
        </div>
        <div class="lb-user-cell">
          <div class="lb-avatar">${SNS.utils.escapeHtml(f.avatar || f.name.charAt(0))}</div>
          <div>
            <div class="lb-user-name">${SNS.utils.escapeHtml(f.name)}${f.isMe ? ' <span style="color:var(--accent);font-size:11px">(you)</span>' : ''}</div>
            <div class="lb-user-grade">${SNS.utils.escapeHtml(f.school || 'NIS')} · ${SNS.utils.escapeHtml(f.grade || '')}</div>
          </div>
        </div>
        <div class="lb-xp-cell">${f.xp} XP</div>
        <div class="lb-time-cell"><i class="fas fa-clock"></i> ${SNS.utils.formatMinutes(f.studyTimeToday || 0)}</div>
        <div class="lb-streak-cell"><i class="fas fa-fire"></i> ${f.streak || 0}</div>
      </div>
    `).join('');

    return `
      <div class="leaderboard-full">
        <div class="leaderboard-full-header">
          <i class="fas fa-trophy" style="color:var(--yellow)"></i>
          <span>Leaderboard</span>
        </div>
        <div class="lb-table-head">
          <span>Rank</span><span>Student</span><span>XP</span><span>Study Time</span><span>Streak</span>
        </div>
        ${rowsHtml}
      </div>
    `;
  },

  renderRooms(rooms) {
    const createBtn = `
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:14px;font-weight:600;color:var(--text-primary)">Study Rooms</h3>
        <button class="btn btn-secondary btn-sm" id="create-room-btn">
          <i class="fas fa-plus"></i> Create Room
        </button>
      </div>
    `;

    if (!rooms.length) {
      return createBtn + `
        <div class="empty-state" style="padding:60px 20px;">
          <div class="empty-state-icon"><i class="fas fa-door-open"></i></div>
          <h3>No active rooms</h3>
          <p>Create a study room and invite friends to study together in real time!</p>
        </div>
      `;
    }

    const roomsHtml = rooms.map(room => {
      const participantCount = (room.participants || []).length;
      const participantAvatars = (room.participants || []).slice(0, 4).map(p =>
        `<div class="mini-avatar">${(p.avatar || p.name.charAt(0))}</div>`
      ).join('');

      return `
        <div class="room-card ${room.status === 'live' ? 'active' : ''} card-appear">
          <div class="room-card-header">
            <div class="room-icon" style="background:var(--accent-dim);font-size:20px"><i class="fas fa-door-open"></i></div>
            <div class="room-info">
              <div class="room-name">${SNS.utils.escapeHtml(room.name)}</div>
              <div class="room-subject">${SNS.utils.escapeHtml(room.subject || 'Any Subject')}</div>
            </div>
            <span class="room-status ${room.status}">${room.status === 'live' ? 'LIVE' : 'OPEN'}</span>
          </div>
          <div class="room-participants">
            <div class="room-avatars">${participantAvatars}</div>
            <span class="room-participant-count">${participantCount} studying</span>
          </div>
          <button class="btn btn-primary w-full" style="justify-content:center;" data-room="${room.id}">
            <i class="fas fa-door-open"></i> Join Room
          </button>
        </div>
      `;
    }).join('');

    return createBtn + `<div class="rooms-grid stagger">${roomsHtml}</div>`;
  },

  wireTabContent() {
    // Room join buttons
    document.querySelectorAll('[data-room]').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
        const ok = await SNS.store.joinRoom(btn.dataset.room);
        if (ok) {
          SNS.utils.toast('Joined room!', 'success');
          SNS.router.navigate('tools'); // Go to pomodoro
        } else {
          SNS.utils.toast('Could not join room', 'error');
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-door-open"></i> Join Room';
        }
      });
    });

    // Create room button
    document.getElementById('create-room-btn')?.addEventListener('click', () => {
      showCreateRoomModal();
    });
  }
};

// ── Create Room Modal ──
function showCreateRoomModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fas fa-door-open"></i> Create Study Room</div>
        <div class="modal-close" id="cr-close"><i class="fas fa-times"></i></div>
      </div>
      <div class="input-group">
        <label class="input-label">Room Name</label>
        <input type="text" class="input" id="cr-name" placeholder="e.g. Math Focus Group" maxlength="50">
      </div>
      <div class="input-group" style="margin-top:12px">
        <label class="input-label">Subject</label>
        <select class="input" id="cr-subject">
          <option value="Any Subject">Any Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="English">English</option>
          <option value="IELTS Prep">IELTS Prep</option>
        </select>
      </div>
      <div class="modal-footer" style="margin-top:16px">
        <button class="btn btn-ghost" id="cr-cancel">Cancel</button>
        <button class="btn btn-primary" id="cr-create"><i class="fas fa-plus"></i> Create</button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  backdrop.querySelector('#cr-close')?.addEventListener('click', () => backdrop.remove());
  backdrop.querySelector('#cr-cancel')?.addEventListener('click', () => backdrop.remove());
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });

  backdrop.querySelector('#cr-create')?.addEventListener('click', async () => {
    const name = document.getElementById('cr-name')?.value.trim();
    const subject = document.getElementById('cr-subject')?.value;
    if (!name) { SNS.utils.toast('Enter a room name', 'error'); return; }

    const btn = backdrop.querySelector('#cr-create');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';

    const roomId = await SNS.store.createRoom({ name, subject });
    if (roomId) {
      SNS.utils.toast('Room created!', 'success');
      backdrop.remove();
      // Reload rooms
      SNS.pages.social.roomsData = await SNS.store.getRooms();
      SNS.pages.social.renderActiveTab();
    } else {
      SNS.utils.toast('Error creating room', 'error');
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-plus"></i> Create';
    }
  });
}

// ── Add Friend Modal (real search from Firestore) ──
function showAddFriendModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fas fa-user-plus"></i> Find Friends</div>
        <div class="modal-close" id="af-close"><i class="fas fa-times"></i></div>
      </div>
      <div class="input-group">
        <label class="input-label">Search by name</label>
        <input type="text" class="input" id="af-search" placeholder="Type a name to search..." autocomplete="off">
      </div>
      <div id="af-results" style="margin-top:12px;display:flex;flex-direction:column;gap:6px;">
        <p style="font-size:13px;color:var(--text-muted);text-align:center;padding:16px;">
          Search for other sNibaStudy users by their name
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="af-close2">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  backdrop.querySelector('#af-close')?.addEventListener('click', () => backdrop.remove());
  backdrop.querySelector('#af-close2')?.addEventListener('click', () => backdrop.remove());
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });

  const searchInput = backdrop.querySelector('#af-search');
  searchInput?.focus();

  searchInput?.addEventListener('input', SNS.utils.debounce(async (e) => {
    const q = e.target.value.trim();
    const resultsEl = document.getElementById('af-results');
    if (!q || q.length < 2) {
      resultsEl.innerHTML = '<p style="font-size:13px;color:var(--text-muted);text-align:center;padding:16px;">Type at least 2 characters to search</p>';
      return;
    }

    resultsEl.innerHTML = '<div style="text-align:center;padding:16px;"><i class="fas fa-spinner fa-spin" style="color:var(--text-muted)"></i></div>';

    const users = await SNS.store.searchUsers(q);

    if (!users.length) {
      resultsEl.innerHTML = '<p style="font-size:13px;color:var(--text-muted);text-align:center;padding:16px;">No users found</p>';
      return;
    }

    const myFriends = SNS.store.get('friends') || [];
    const friendUIDs = new Set(myFriends.map(f => f.uid));

    resultsEl.innerHTML = users.map(u => {
      const isFriend = friendUIDs.has(u.uid);
      return `
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-surface);border-radius:var(--radius-xs);border:1px solid var(--border);">
          <div class="user-avatar" style="width:36px;height:36px;font-size:14px">${SNS.utils.escapeHtml(u.avatar)}</div>
          <div style="flex:1">
            <div style="font-size:14px;font-weight:600">${SNS.utils.escapeHtml(u.name)}</div>
            <div style="font-size:12px;color:var(--text-muted)">${SNS.utils.escapeHtml(u.school)} · ${SNS.utils.escapeHtml(u.grade)} · Lv.${u.level}</div>
          </div>
          ${isFriend
            ? '<span class="badge badge-green" style="font-size:10px">Friends</span>'
            : `<button class="btn btn-sm btn-primary add-friend-btn" data-uid="${u.uid}" data-name="${SNS.utils.escapeHtml(u.name)}"><i class="fas fa-user-plus"></i> Add</button>`
          }
        </div>
      `;
    }).join('');

    // Wire add buttons
    resultsEl.querySelectorAll('.add-friend-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        const ok = await SNS.store.sendFriendRequest(btn.dataset.uid);
        if (ok) {
          btn.innerHTML = '<i class="fas fa-check"></i> Sent';
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-ghost');
          SNS.utils.toast(`Friend request sent to ${btn.dataset.name}!`, 'success');
        } else {
          btn.innerHTML = 'Already sent';
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-ghost');
        }
      });
    });
  }, 400));
}
