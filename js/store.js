/* ═══════════════════════════════════════════
   sNibaStudy — Store (Firestore + localStorage)
   - Firestore is the source of truth
   - localStorage is used as cache for speed
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.store = (function () {

  const PREFIX = 'sniba_';
  let currentUID = null;

  const DEFAULTS = {
    profile: {
      name: 'Student',
      avatar: 'S',
      grade: 'Grade 10',
      school: 'NIS',
      level: 1,
      xp: 0,
      joinDate: new Date().toISOString().slice(0, 10)
    },
    settings: {
      notifications: true,
      soundEnabled: true,
      focusHideSidebar: true
    },
    studySessions: [],
    quizScores: {},
    dailyGoals: [],
    studyTime: {},
    savedTopics: [],
    savedSessions: [],
    friends: [],
    friendRequests: [],
    pomodoroStats: {
      totalSessions: 0,
      totalMinutes: 0,
      todaySessions: 0,
      todayDate: ''
    },
    weakAreas: {},
    flashcardDecks: {},
    streak: {
      current: 0,
      longest: 0,
      lastStudyDate: ''
    },
    achievements: [],
    notifications: []
  };

  const subscribers = {};

  function key(k) { return PREFIX + k; }

  // ── Set the current user ID ──
  function setUser(uid) {
    currentUID = uid;
  }

  function getUserRef() {
    if (!currentUID) return null;
    if (typeof DB === 'undefined') return null;
    return DB.collection('users').doc(currentUID);
  }

  // ── LocalStorage (cache) ──
  function getLocal(k) {
    try {
      const raw = localStorage.getItem(key(k));
      if (raw === null) return structuredClone(DEFAULTS[k]);
      return JSON.parse(raw);
    } catch (e) {
      return structuredClone(DEFAULTS[k]);
    }
  }

  function setLocal(k, value) {
    try {
      localStorage.setItem(key(k), JSON.stringify(value));
    } catch (e) {}
  }

  // ── Get (reads from localStorage cache) ──
  function get(k) {
    return getLocal(k);
  }

  // ── Set (writes to localStorage + Firestore) ──
  function set(k, value) {
    setLocal(k, value);

    // Sync to Firestore
    syncToFirestore(k, value);

    // Notify subscribers
    if (subscribers[k]) {
      subscribers[k].forEach(fn => {
        try { fn(value); } catch (e) {}
      });
    }
  }

  // ── Update (read-modify-write) ──
  function update(k, updater) {
    set(k, updater(get(k)));
  }

  function subscribe(k, fn) {
    if (!subscribers[k]) subscribers[k] = [];
    subscribers[k].push(fn);
    return () => {
      subscribers[k] = subscribers[k].filter(f => f !== fn);
    };
  }

  // ── Sync a key to Firestore ──
  function syncToFirestore(k, value) {
    const ref = getUserRef();
    if (!ref) return;

    // Store everything under the user document in subcollections or fields
    const simpleKeys = ['profile', 'settings', 'studyTime', 'quizScores', 'savedTopics',
      'savedSessions', 'weakAreas', 'flashcardDecks', 'streak', 'achievements',
      'pomodoroStats', 'notifications', 'friends', 'friendRequests'];

    if (simpleKeys.includes(k)) {
      ref.set({ [k]: value }, { merge: true }).catch(err => {
        console.warn('[Store] Firestore sync error for', k, err);
      });
    } else if (k === 'studySessions' || k === 'dailyGoals') {
      ref.set({ [k]: value }, { merge: true }).catch(err => {
        console.warn('[Store] Firestore sync error for', k, err);
      });
    }
  }

  // ── Load all data from Firestore into localStorage ──
  async function loadFromFirestore() {
    const ref = getUserRef();
    if (!ref) return;

    try {
      const doc = await ref.get();
      if (!doc.exists) return;

      const data = doc.data();
      const keysToLoad = Object.keys(DEFAULTS);

      keysToLoad.forEach(k => {
        if (data[k] !== undefined) {
          setLocal(k, data[k]);
        }
      });

      return data;
    } catch (err) {
      console.warn('[Store] Error loading from Firestore:', err);
      return null;
    }
  }

  // ── Initialize user data in Firestore (on first login) ──
  async function initUserData(user) {
    const ref = getUserRef();
    if (!ref) return;

    try {
      const doc = await ref.get();
      if (doc.exists) {
        // User exists, load their data
        await loadFromFirestore();
      } else {
        // New user - create with defaults
        const profile = {
          name: user.displayName || 'Student',
          avatar: (user.displayName || 'S').charAt(0).toUpperCase(),
          email: user.email,
          grade: 'Grade 10',
          school: 'NIS',
          level: 1,
          xp: 0,
          joinDate: new Date().toISOString().slice(0, 10)
        };

        await ref.set({
          profile,
          settings: DEFAULTS.settings,
          studySessions: [],
          quizScores: {},
          dailyGoals: [],
          studyTime: {},
          savedTopics: [],
          savedSessions: [],
          friends: [],
          friendRequests: [],
          pomodoroStats: DEFAULTS.pomodoroStats,
          weakAreas: {},
          flashcardDecks: {},
          streak: DEFAULTS.streak,
          achievements: [],
          notifications: [{
            id: 'welcome',
            text: 'Welcome to sNibaStudy! Start your first study session.',
            time: new Date().toISOString(),
            read: false
          }],
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Set locally too
        setLocal('profile', profile);
        setLocal('notifications', [{
          id: 'welcome',
          text: 'Welcome to sNibaStudy! Start your first study session.',
          time: new Date().toISOString(),
          read: false
        }]);
      }
    } catch (err) {
      console.warn('[Store] Error initializing user data:', err);
    }
  }

  function clearAll() {
    Object.keys(DEFAULTS).forEach(k => localStorage.removeItem(key(k)));
    localStorage.removeItem('sniba_seeded');
    localStorage.removeItem('sniba_savedResources');
    localStorage.removeItem('sniba_user');
    currentUID = null;
  }

  // ── Streak Management ──
  function updateStreak() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const streak = get('streak');
    if (streak.lastStudyDate === todayStr) return streak;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().slice(0, 10);

    let newStreak;
    if (streak.lastStudyDate === yStr) {
      newStreak = { ...streak, current: streak.current + 1, lastStudyDate: todayStr };
    } else {
      newStreak = { ...streak, current: 1, lastStudyDate: todayStr };
    }

    newStreak.longest = Math.max(newStreak.longest, newStreak.current);
    set('streak', newStreak);
    return newStreak;
  }

  // ── XP Management ──
  function addXP(amount) {
    update('profile', profile => {
      const newXP = profile.xp + amount;
      const newLevel = Math.floor(newXP / 500) + 1;
      return { ...profile, xp: newXP, level: newLevel };
    });
  }

  // ── Session Tracking ──
  function saveSession(sessionData) {
    const todayStr = new Date().toISOString().slice(0, 10);

    update('studyTime', time => ({
      ...time,
      [todayStr]: (time[todayStr] || 0) + (sessionData.durationMin || 0)
    }));

    update('studySessions', sessions => {
      const newSession = {
        id: SNS.utils.generateId(),
        date: new Date().toISOString(),
        ...sessionData
      };
      return [newSession, ...sessions].slice(0, 100);
    });

    updateStreak();

    const xpGain = (sessionData.durationMin || 0) * 2 + (sessionData.quizScore || 0);
    if (xpGain > 0) addXP(xpGain);

    update('pomodoroStats', stats => {
      const newStats = { ...stats };
      if (stats.todayDate !== todayStr) {
        newStats.todaySessions = 0;
        newStats.todayDate = todayStr;
      }
      return newStats;
    });
  }

  // ── Pomodoro completed ──
  function recordPomodoro(type) {
    const todayStr = new Date().toISOString().slice(0, 10);
    update('pomodoroStats', stats => {
      const upd = { ...stats };
      if (type === 'work') {
        upd.totalSessions = (upd.totalSessions || 0) + 1;
        upd.totalMinutes  = (upd.totalMinutes  || 0) + 25;
        if (upd.todayDate !== todayStr) {
          upd.todaySessions = 1;
          upd.todayDate = todayStr;
        } else {
          upd.todaySessions = (upd.todaySessions || 0) + 1;
        }
      }
      return upd;
    });

    if (type === 'work') addXP(50);
  }

  // ── Friend System (Firestore) ──
  async function searchUsers(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();

    try {
      const snapshot = await DB.collection('users')
        .orderBy('profile.name')
        .limit(50)
        .get();

      const results = [];
      snapshot.forEach(doc => {
        if (doc.id === currentUID) return; // Skip self
        const data = doc.data();
        const profile = data.profile || {};
        if (profile.name && profile.name.toLowerCase().includes(q)) {
          results.push({
            uid: doc.id,
            name: profile.name,
            avatar: profile.avatar || profile.name.charAt(0),
            grade: profile.grade || '',
            school: profile.school || '',
            level: profile.level || 1,
            xp: profile.xp || 0
          });
        }
      });

      return results.slice(0, 10);
    } catch (err) {
      console.warn('[Store] User search error:', err);
      return [];
    }
  }

  async function sendFriendRequest(targetUID) {
    if (!currentUID || !targetUID) return false;

    try {
      // Add to target's friendRequests
      const targetRef = DB.collection('users').doc(targetUID);
      const targetDoc = await targetRef.get();
      if (!targetDoc.exists) return false;

      const targetData = targetDoc.data();
      const requests = targetData.friendRequests || [];
      const friends = targetData.friends || [];

      // Check if already friends or request pending
      if (friends.some(f => f.uid === currentUID)) return false;
      if (requests.some(r => r.uid === currentUID)) return false;

      const myProfile = get('profile');
      await targetRef.update({
        friendRequests: firebase.firestore.FieldValue.arrayUnion({
          uid: currentUID,
          name: myProfile.name,
          avatar: myProfile.avatar || myProfile.name.charAt(0),
          grade: myProfile.grade || '',
          school: myProfile.school || '',
          time: new Date().toISOString()
        })
      });

      return true;
    } catch (err) {
      console.warn('[Store] Friend request error:', err);
      return false;
    }
  }

  async function acceptFriendRequest(requesterUID) {
    if (!currentUID) return false;

    try {
      const myRef = getUserRef();
      const myData = (await myRef.get()).data();
      const requests = myData.friendRequests || [];
      const request = requests.find(r => r.uid === requesterUID);
      if (!request) return false;

      const myProfile = get('profile');

      // Add to my friends list
      const friendEntry = {
        uid: requesterUID,
        name: request.name,
        avatar: request.avatar,
        grade: request.grade,
        school: request.school,
        addedAt: new Date().toISOString()
      };

      // Add to requester's friends list
      const myEntry = {
        uid: currentUID,
        name: myProfile.name,
        avatar: myProfile.avatar || myProfile.name.charAt(0),
        grade: myProfile.grade,
        school: myProfile.school,
        addedAt: new Date().toISOString()
      };

      await myRef.update({
        friends: firebase.firestore.FieldValue.arrayUnion(friendEntry),
        friendRequests: requests.filter(r => r.uid !== requesterUID)
      });

      const requesterRef = DB.collection('users').doc(requesterUID);
      await requesterRef.update({
        friends: firebase.firestore.FieldValue.arrayUnion(myEntry)
      });

      // Update local
      update('friends', f => [...f, friendEntry]);
      update('friendRequests', r => r.filter(rq => rq.uid !== requesterUID));

      return true;
    } catch (err) {
      console.warn('[Store] Accept friend error:', err);
      return false;
    }
  }

  async function declineFriendRequest(requesterUID) {
    if (!currentUID) return;
    try {
      const myRef = getUserRef();
      const myData = (await myRef.get()).data();
      const requests = (myData.friendRequests || []).filter(r => r.uid !== requesterUID);
      await myRef.update({ friendRequests: requests });
      update('friendRequests', () => requests);
    } catch (err) {
      console.warn('[Store] Decline friend error:', err);
    }
  }

  // ── Get friend profiles with live data ──
  async function getFriendsWithStats() {
    const friends = get('friends');
    if (!friends.length) return [];

    try {
      const results = [];
      for (const friend of friends) {
        try {
          const doc = await DB.collection('users').doc(friend.uid).get();
          if (doc.exists) {
            const data = doc.data();
            const p = data.profile || {};
            const todayStr = new Date().toISOString().slice(0, 10);
            const todayMin = (data.studyTime || {})[todayStr] || 0;
            results.push({
              uid: friend.uid,
              name: p.name || friend.name,
              avatar: p.avatar || (p.name || 'U').charAt(0),
              grade: p.grade || '',
              school: p.school || '',
              level: p.level || 1,
              xp: p.xp || 0,
              streak: (data.streak || {}).current || 0,
              studyTimeToday: todayMin,
              status: 'online' // simplified
            });
          }
        } catch (e) {}
      }
      return results;
    } catch (err) {
      console.warn('[Store] Get friends error:', err);
      return [];
    }
  }

  // ── Study Rooms (Firestore) ──
  async function createRoom(roomData) {
    if (!currentUID) return null;
    try {
      const profile = get('profile');
      const ref = await DB.collection('rooms').add({
        name: roomData.name,
        subject: roomData.subject,
        createdBy: currentUID,
        createdByName: profile.name,
        participants: [{
          uid: currentUID,
          name: profile.name,
          avatar: profile.avatar,
          joinedAt: new Date().toISOString()
        }],
        status: 'open',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return ref.id;
    } catch (err) {
      console.warn('[Store] Create room error:', err);
      return null;
    }
  }

  async function joinRoom(roomId) {
    if (!currentUID) return false;
    try {
      const profile = get('profile');
      await DB.collection('rooms').doc(roomId).update({
        participants: firebase.firestore.FieldValue.arrayUnion({
          uid: currentUID,
          name: profile.name,
          avatar: profile.avatar,
          joinedAt: new Date().toISOString()
        }),
        status: 'live'
      });
      return true;
    } catch (err) {
      console.warn('[Store] Join room error:', err);
      return false;
    }
  }

  async function getRooms() {
    try {
      const snapshot = await DB.collection('rooms')
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get();

      const rooms = [];
      snapshot.forEach(doc => {
        rooms.push({ id: doc.id, ...doc.data() });
      });
      return rooms;
    } catch (err) {
      console.warn('[Store] Get rooms error:', err);
      return [];
    }
  }

  async function leaveRoom(roomId) {
    if (!currentUID) return;
    try {
      const doc = await DB.collection('rooms').doc(roomId).get();
      if (!doc.exists) return;
      const data = doc.data();
      const newParticipants = (data.participants || []).filter(p => p.uid !== currentUID);
      await DB.collection('rooms').doc(roomId).update({
        participants: newParticipants,
        status: newParticipants.length > 0 ? 'live' : 'open'
      });
    } catch (err) {
      console.warn('[Store] Leave room error:', err);
    }
  }

  return {
    get,
    set,
    update,
    subscribe,
    clearAll,
    updateStreak,
    addXP,
    saveSession,
    recordPomodoro,
    setUser,
    loadFromFirestore,
    initUserData,
    searchUsers,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    getFriendsWithStats,
    createRoom,
    joinRoom,
    getRooms,
    leaveRoom,
    DEFAULTS
  };

})();
