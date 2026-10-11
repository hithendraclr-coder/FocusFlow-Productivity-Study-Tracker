/**
 * ============================================================================
 * FOCUSFLOW — MODERN PRODUCTIVITY & STUDY TRACKER
 * Full-featured Single Page Application Controller
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA MODELS & INITIAL STATE
  // --------------------------------------------------------------------------
  const STORAGE_KEY = 'focusflow_workspace_data_v1';

  // Standard Motivational Quotes
  const MOTIVATIONAL_QUOTES = [
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Focus is a muscle that grows stronger with deliberate practice.", author: "Cal Newport" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Small disciplines repeated with consistency every day lead to great achievements.", author: "John C. Maxwell" },
    { text: "It's not about having time, it's about making time.", author: "Anonymous" },
    { text: "Deep work is the superpower of the 21st century.", author: "Cal Newport" }
  ];

  // Default seed data for first-time users
  const getTodayDateStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const getFutureDateStr = (daysAhead) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const getDefaultData = () => {
    const today = getTodayDateStr();
    return {
      version: '1.0.0',
      settings: {
        theme: 'dark',
        focusDuration: 25,
        shortBreakDuration: 5,
        longBreakDuration: 15,
        autoStartBreaks: false,
        dailyFocusTarget: 120, // in minutes
        soundEnabled: true
      },
      streak: {
        count: 3,
        lastActiveDate: today
      },
      tasks: [
        {
          id: 'task-1',
          title: 'Implement Binary Search Tree & Graph Traversals in Java',
          description: 'Practice DFS and BFS implementations for upcoming exam review.',
          priority: 'high',
          category: 'Study',
          dueDate: today,
          completed: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 'task-2',
          title: 'Review Operating Systems: Virtual Memory & Page Replacement',
          description: 'Understand LRU and FIFO algorithms and solve textbook problem set.',
          priority: 'medium',
          category: 'Study',
          dueDate: getFutureDateStr(1),
          completed: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 'task-3',
          title: 'Draft Project Documentation & System Architecture Schema',
          description: 'Document API endpoints and write clear markdown setup instructions.',
          priority: 'low',
          category: 'Work',
          dueDate: getFutureDateStr(2),
          completed: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 'task-4',
          title: 'Morning 30-Minute Cardio & Mobility Stretch',
          description: 'Keep physical health and mental clarity energized for study sessions.',
          priority: 'medium',
          category: 'Personal',
          dueDate: today,
          completed: true,
          createdAt: new Date().toISOString()
        }
      ],
      goals: [
        {
          id: 'goal-1',
          title: 'Study Java & Data Structures',
          target: 2,
          current: 1,
          unit: 'hours',
          category: 'Study',
          completed: false
        },
        {
          id: 'goal-2',
          title: 'Solve LeetCode Algorithm Problems',
          target: 5,
          current: 3,
          unit: 'problems',
          category: 'Study',
          completed: false
        },
        {
          id: 'goal-3',
          title: 'Read System Design Textbook',
          target: 10,
          current: 10,
          unit: 'pages',
          category: 'Study',
          completed: true
        },
        {
          id: 'goal-4',
          title: 'Cardio & Strength Workout',
          target: 30,
          current: 30,
          unit: 'minutes',
          category: 'Personal',
          completed: true
        }
      ],
      activities: [
        {
          id: 'act-1',
          title: 'DSA Practice: Trees & Graphs',
          startTime: '09:00',
          endTime: '10:30',
          category: 'Study',
          notes: 'Solve 2 medium problems on recursion',
          completed: true
        },
        {
          id: 'act-2',
          title: 'OS Lecture Notes Review',
          startTime: '11:00',
          endTime: '12:30',
          category: 'Study',
          notes: 'Virtual memory & paging concepts',
          completed: false
        },
        {
          id: 'act-3',
          title: 'Lunch & Screen-Free Rest',
          startTime: '12:30',
          endTime: '13:30',
          category: 'Break',
          notes: 'Walk outside and hydrate',
          completed: false
        },
        {
          id: 'act-4',
          title: 'Project Architecture Coding',
          startTime: '14:00',
          endTime: '16:00',
          category: 'Work',
          notes: 'Frontend components and state structure',
          completed: false
        }
      ],
      history: {
        // Daily focus minutes: last 7 days seeded with realistic productivity numbers
        focusMinutes: {
          [getFutureDateStr(-6)]: 75,
          [getFutureDateStr(-5)]: 90,
          [getFutureDateStr(-4)]: 120,
          [getFutureDateStr(-3)]: 50,
          [getFutureDateStr(-2)]: 105,
          [getFutureDateStr(-1)]: 140,
          [today]: 50
        },
        completedTasks: {
          [getFutureDateStr(-6)]: 2,
          [getFutureDateStr(-5)]: 3,
          [getFutureDateStr(-4)]: 4,
          [getFutureDateStr(-3)]: 1,
          [getFutureDateStr(-2)]: 3,
          [getFutureDateStr(-1)]: 5,
          [today]: 2
        },
        totalSessionsCompleted: 14
      },
      activityLog: [
        {
          id: 'log-1',
          text: 'Completed 25-minute Focus Session on "Binary Search Tree"',
          type: 'timer',
          timestamp: new Date(Date.now() - 3600000).toISOString()
        },
        {
          id: 'log-2',
          text: 'Marked "Morning 30-Minute Cardio" as completed',
          type: 'task',
          timestamp: new Date(Date.now() - 7200000).toISOString()
        },
        {
          id: 'log-3',
          text: 'Completed daily goal: "Read System Design Textbook"',
          type: 'goal',
          timestamp: new Date(Date.now() - 10800000).toISOString()
        }
      ]
    };
  };

  // --------------------------------------------------------------------------
  // 2. STATE STORE & PERSISTENCE
  // --------------------------------------------------------------------------
  class Store {
    constructor() {
      this.data = this.load();
      this.timerRuntime = {
        mode: 'pomodoro', // 'pomodoro' | 'shortBreak' | 'longBreak'
        remainingSeconds: this.data.settings.focusDuration * 60,
        totalSeconds: this.data.settings.focusDuration * 60,
        isRunning: false,
        intervalId: null,
        sessionSequence: 1, // 1 to 4
        activeTaskId: ''
      };
    }

    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          const initial = getDefaultData();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
          return initial;
        }
        const parsed = JSON.parse(raw);
        // Ensure critical fields exist
        if (!parsed.tasks || !parsed.goals || !parsed.settings) {
          throw new Error('Incomplete data schema');
        }
        return parsed;
      } catch (err) {
        console.warn('FocusFlow: LocalStorage reset to defaults due to invalid data', err);
        const defaults = getDefaultData();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
        return defaults;
      }
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (err) {
        console.error('FocusFlow: Failed to save to LocalStorage', err);
      }
    }

    logActivity(text, type = 'info') {
      const newEntry = {
        id: 'log-' + Date.now(),
        text,
        type,
        timestamp: new Date().toISOString()
      };
      this.data.activityLog.unshift(newEntry);
      if (this.data.activityLog.length > 30) {
        this.data.activityLog.pop();
      }
      this.save();
    }

    updateStreak() {
      const today = getTodayDateStr();
      const last = this.data.streak.lastActiveDate;
      if (last === today) return;

      const yesterday = getFutureDateStr(-1);
      if (last === yesterday) {
        this.data.streak.count += 1;
      } else {
        this.data.streak.count = 1;
      }
      this.data.streak.lastActiveDate = today;
      this.save();
    }
  }

  const appStore = new Store();

  // --------------------------------------------------------------------------
  // 3. SOUND SYNTHESIZER (Pure Web Audio API - Zero External Dependencies)
  // --------------------------------------------------------------------------
  class AudioChime {
    constructor() {
      this.ctx = null;
    }

    initCtx() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playSessionComplete() {
      if (!appStore.data.settings.soundEnabled) return;
      try {
        this.initCtx();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        // Two-tone harmonic chime (D5 then A5)
        const notes = [
          { freq: 587.33, start: 0, duration: 0.6 },
          { freq: 880.00, start: 0.25, duration: 0.9 }
        ];

        notes.forEach(note => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(note.freq, now + note.start);

          gain.gain.setValueAtTime(0, now + note.start);
          gain.gain.linearRampToValueAtTime(0.3, now + note.start + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + note.start);
          osc.stop(now + note.start + note.duration);
        });
      } catch (e) {
        console.warn('Audio playback not permitted or unavailable:', e);
      }
    }
  }

  const audioChime = new AudioChime();

  // --------------------------------------------------------------------------
  // 4. TOAST NOTIFICATION SYSTEM
  // --------------------------------------------------------------------------
  function showToast(message, type = 'success', duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconHtml = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'info') iconHtml = '<i class="fa-solid fa-circle-info"></i>';
    if (type === 'warning') iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
    if (type === 'error') iconHtml = '<i class="fa-solid fa-circle-xmark"></i>';

    toast.innerHTML = `
      <div class="toast-icon">${iconHtml}</div>
      <div class="toast-content">${escapeHTML(message)}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // Confetti Celebration
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e']
      });
    }
  }

  // HTML escaping utility
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // 5. CHART.JS MANAGER
  // --------------------------------------------------------------------------
  class ChartManager {
    constructor() {
      this.dashboardWeeklyChart = null;
      this.analyticsFocusChart = null;
      this.analyticsCategoryChart = null;
      this.analyticsTasksChart = null;
    }

    getThemeColors() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        textColor: isDark ? '#94a3b8' : '#64748b',
        gridColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
        primary: '#6366f1',
        primaryGlow: 'rgba(99, 102, 241, 0.25)',
        cyan: '#06b6d4',
        emerald: '#10b981',
        amber: '#f59e0b',
        rose: '#f43f5e',
        violet: '#8b5cf6'
      };
    }

    renderDashboardChart() {
      const canvas = document.getElementById('dashboardWeeklyChart');
      if (!canvas || typeof Chart === 'undefined') return;

      if (this.dashboardWeeklyChart) {
        this.dashboardWeeklyChart.destroy();
      }

      const colors = this.getThemeColors();
      const labels = [];
      const dataPoints = [];

      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        labels.push(dayName);
        dataPoints.push(appStore.data.history.focusMinutes[dateKey] || 0);
      }

      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.45)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

      this.dashboardWeeklyChart = new Chart(canvas, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Focus Minutes',
            data: dataPoints,
            borderColor: colors.primary,
            borderWidth: 3,
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: colors.primary,
            pointBorderColor: '#ffffff',
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f8fafc',
              bodyColor: '#e2e8f0',
              padding: 10,
              displayColors: false,
              callbacks: {
                label: (ctx) => `${ctx.parsed.y} mins of focus`
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: colors.textColor }
            },
            y: {
              grid: { color: colors.gridColor },
              ticks: { color: colors.textColor },
              beginAtZero: true
            }
          }
        }
      });
    }

    renderAnalyticsCharts(daysRange = 7) {
      if (typeof Chart === 'undefined') return;
      const colors = this.getThemeColors();

      // 1. Focus Time Trends Chart
      const focusCanvas = document.getElementById('analyticsFocusChart');
      if (focusCanvas) {
        if (this.analyticsFocusChart) this.analyticsFocusChart.destroy();

        const labels = [];
        const focusData = [];

        for (let i = daysRange - 1; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          labels.push(daysRange <= 7 ? d.toLocaleDateString('en-US', { weekday: 'short' }) : `${d.getMonth() + 1}/${d.getDate()}`);
          focusData.push(appStore.data.history.focusMinutes[dateKey] || 0);
        }

        const ctx = focusCanvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 260);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.45)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0.01)');

        this.analyticsFocusChart = new Chart(focusCanvas, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Focus Minutes',
              data: focusData,
              borderColor: colors.cyan,
              borderWidth: 3,
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointBackgroundColor: colors.cyan,
              pointBorderColor: '#ffffff',
              pointRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: colors.textColor } },
              y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor }, beginAtZero: true }
            }
          }
        });
      }

      // 2. Category Distribution Donut Chart
      const catCanvas = document.getElementById('analyticsCategoryChart');
      if (catCanvas) {
        if (this.analyticsCategoryChart) this.analyticsCategoryChart.destroy();

        // Calculate count by category
        const counts = { Study: 0, Work: 0, Personal: 0, Other: 0 };
        appStore.data.tasks.forEach(t => {
          if (counts[t.category] !== undefined) counts[t.category]++;
          else counts.Other++;
        });

        this.analyticsCategoryChart = new Chart(catCanvas, {
          type: 'doughnut',
          data: {
            labels: ['Study', 'Work', 'Personal', 'Other'],
            datasets: [{
              data: [counts.Study, counts.Work, counts.Personal, counts.Other],
              backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#ec4899'],
              borderWidth: 0,
              hoverOffset: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: colors.textColor, padding: 15, font: { size: 12 } }
              }
            },
            cutout: '70%'
          }
        });
      }

      // 3. Tasks Completed by Day Bar Chart
      const tasksCanvas = document.getElementById('analyticsTasksChart');
      if (tasksCanvas) {
        if (this.analyticsTasksChart) this.analyticsTasksChart.destroy();

        const labels = [];
        const taskData = [];

        for (let i = daysRange - 1; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          labels.push(daysRange <= 7 ? d.toLocaleDateString('en-US', { weekday: 'short' }) : `${d.getMonth() + 1}/${d.getDate()}`);
          taskData.push(appStore.data.history.completedTasks[dateKey] || 0);
        }

        this.analyticsTasksChart = new Chart(tasksCanvas, {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'Tasks Completed',
              data: taskData,
              backgroundColor: colors.emerald,
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: colors.textColor } },
              y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor, stepSize: 1 }, beginAtZero: true }
            }
          }
        });
      }
    }

    updateAll() {
      this.renderDashboardChart();
      this.renderAnalyticsCharts(7);
    }
  }

  const chartManager = new ChartManager();

  // --------------------------------------------------------------------------
  // 6. POMODORO TIMER ENGINE
  // --------------------------------------------------------------------------
  class PomodoroController {
    constructor() {
      this.circleCircumference = 2 * Math.PI * 140; // 879.64
      this.initEventListeners();
      this.syncDisplay();
    }

    initEventListeners() {
      // Mode tabs
      document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
          const mode = e.currentTarget.getAttribute('data-mode');
          this.switchMode(mode);
        });
      });

      // Main Controls
      const startBtn = document.getElementById('timerStartBtn');
      const pauseBtn = document.getElementById('timerPauseBtn');
      const resetBtn = document.getElementById('timerResetBtn');
      const skipBtn = document.getElementById('timerSkipBtn');

      if (startBtn) startBtn.addEventListener('click', () => this.start());
      if (pauseBtn) pauseBtn.addEventListener('click', () => this.pause());
      if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
      if (skipBtn) skipBtn.addEventListener('click', () => this.skip());

      // Mini timer in sidebar
      const miniPlayBtn = document.getElementById('sidebarMiniPlayBtn');
      if (miniPlayBtn) {
        miniPlayBtn.addEventListener('click', () => {
          if (appStore.timerRuntime.isRunning) {
            this.pause();
          } else {
            this.start();
          }
        });
      }

      // Quick presets application
      const applyPresetsBtn = document.getElementById('btnApplyTimerPresets');
      if (applyPresetsBtn) {
        applyPresetsBtn.addEventListener('click', () => {
          const pomo = parseInt(document.getElementById('quickPomoDuration').value, 10);
          const shortB = parseInt(document.getElementById('quickShortDuration').value, 10);
          const longB = parseInt(document.getElementById('quickLongDuration').value, 10);

          if (pomo > 0 && shortB > 0 && longB > 0) {
            appStore.data.settings.focusDuration = pomo;
            appStore.data.settings.shortBreakDuration = shortB;
            appStore.data.settings.longBreakDuration = longB;
            appStore.save();
            this.reset();
            showToast('Timer durations updated successfully!', 'success');
          } else {
            showToast('Please enter valid durations in minutes.', 'warning');
          }
        });
      }

      // Task selector
      const activeTaskSelect = document.getElementById('timerActiveTaskSelect');
      if (activeTaskSelect) {
        activeTaskSelect.addEventListener('change', (e) => {
          appStore.timerRuntime.activeTaskId = e.target.value;
        });
      }
    }

    switchMode(mode) {
      if (appStore.timerRuntime.isRunning) {
        this.pause();
      }
      appStore.timerRuntime.mode = mode;

      let durationMins = appStore.data.settings.focusDuration;
      let label = 'FOCUS SESSION';
      let strokeColor = 'var(--primary)';

      if (mode === 'shortBreak') {
        durationMins = appStore.data.settings.shortBreakDuration;
        label = 'SHORT BREAK';
        strokeColor = 'var(--accent-emerald)';
      } else if (mode === 'longBreak') {
        durationMins = appStore.data.settings.longBreakDuration;
        label = 'LONG BREAK';
        strokeColor = 'var(--accent-cyan)';
      }

      appStore.timerRuntime.totalSeconds = durationMins * 60;
      appStore.timerRuntime.remainingSeconds = durationMins * 60;

      // Update Tab Styles
      document.querySelectorAll('.mode-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-mode') === mode);
      });

      const modeLabel = document.getElementById('timerCurrentModeLabel');
      if (modeLabel) modeLabel.textContent = label;

      const progressCircle = document.getElementById('timerProgressCircle');
      if (progressCircle) progressCircle.style.stroke = strokeColor;

      this.syncDisplay();
    }

    start() {
      if (appStore.timerRuntime.isRunning) return;

      audioChime.initCtx(); // Unlock audio context on user interaction
      appStore.timerRuntime.isRunning = true;

      // Update UI button states
      const startBtn = document.getElementById('timerStartBtn');
      const pauseBtn = document.getElementById('timerPauseBtn');
      if (startBtn) startBtn.style.display = 'none';
      if (pauseBtn) pauseBtn.style.display = 'inline-flex';

      const miniPlay = document.getElementById('sidebarMiniPlayBtn');
      if (miniPlay) miniPlay.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';

      const liveDot = document.getElementById('timerLiveIndicator');
      if (liveDot) liveDot.classList.add('active');

      const subStatus = document.getElementById('timerSubStatus');
      if (subStatus) subStatus.textContent = 'Focusing now... Stay present';

      // Start interval
      appStore.timerRuntime.intervalId = setInterval(() => {
        this.tick();
      }, 1000);
    }

    pause() {
      if (!appStore.timerRuntime.isRunning) return;
      appStore.timerRuntime.isRunning = false;

      if (appStore.timerRuntime.intervalId) {
        clearInterval(appStore.timerRuntime.intervalId);
        appStore.timerRuntime.intervalId = null;
      }

      const startBtn = document.getElementById('timerStartBtn');
      const pauseBtn = document.getElementById('timerPauseBtn');
      if (startBtn) startBtn.style.display = 'inline-flex';
      if (pauseBtn) pauseBtn.style.display = 'none';

      const miniPlay = document.getElementById('sidebarMiniPlayBtn');
      if (miniPlay) miniPlay.innerHTML = '<i class="fa-solid fa-play"></i> Resume';

      const liveDot = document.getElementById('timerLiveIndicator');
      if (liveDot) liveDot.classList.remove('active');

      const subStatus = document.getElementById('timerSubStatus');
      if (subStatus) subStatus.textContent = 'Paused';

      document.title = 'FocusFlow — Productivity & Study Tracker';
    }

    reset() {
      this.pause();
      appStore.timerRuntime.remainingSeconds = appStore.timerRuntime.totalSeconds;
      this.syncDisplay();

      const subStatus = document.getElementById('timerSubStatus');
      if (subStatus) subStatus.textContent = 'Ready to focus';
    }

    skip() {
      this.pause();
      this.handleSessionCompletion(false);
    }

    tick() {
      if (appStore.timerRuntime.remainingSeconds > 0) {
        appStore.timerRuntime.remainingSeconds--;
        this.syncDisplay();
      } else {
        this.handleSessionCompletion(true);
      }
    }

    handleSessionCompletion(earnedStats = true) {
      this.pause();
      audioChime.playSessionComplete();

      const isFocus = appStore.timerRuntime.mode === 'pomodoro';

      if (isFocus && earnedStats) {
        triggerConfetti();
        const durationMins = appStore.data.settings.focusDuration;
        const today = getTodayDateStr();

        // Increment today's focus minutes
        appStore.data.history.focusMinutes[today] = (appStore.data.history.focusMinutes[today] || 0) + durationMins;
        appStore.data.history.totalSessionsCompleted = (appStore.data.history.totalSessionsCompleted || 0) + 1;

        // Check if an active task was linked
        let taskMsg = '';
        if (appStore.timerRuntime.activeTaskId) {
          const matchedTask = appStore.data.tasks.find(t => t.id === appStore.timerRuntime.activeTaskId);
          if (matchedTask) {
            taskMsg = ` on "${matchedTask.title}"`;
          }
        }

        appStore.logActivity(`Finished ${durationMins}m focus session${taskMsg}`, 'timer');
        appStore.updateStreak();
        appStore.save();

        showToast(`🎉 Focus session complete! Take a breather.`, 'success', 5000);

        // Sequence update
        appStore.timerRuntime.sessionSequence++;
        if (appStore.timerRuntime.sessionSequence > 4) {
          appStore.timerRuntime.sessionSequence = 1;
          this.switchMode('longBreak');
        } else {
          this.switchMode('shortBreak');
        }

        if (appStore.data.settings.autoStartBreaks) {
          this.start();
        }
      } else if (!isFocus) {
        showToast('Break time is over! Ready for another focus session?', 'info', 5000);
        this.switchMode('pomodoro');
      }

      dashboardController.refresh();
      analyticsController.refresh();
      chartManager.updateAll();
    }

    syncDisplay() {
      const remaining = appStore.timerRuntime.remainingSeconds;
      const total = appStore.timerRuntime.totalSeconds;

      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      // Update Main Timer Countdown
      const countdownEl = document.getElementById('timerCountdown');
      if (countdownEl) countdownEl.textContent = timeStr;

      // Update Sidebar Mini Timer
      const sidebarMiniTime = document.getElementById('sidebarMiniTime');
      if (sidebarMiniTime) sidebarMiniTime.textContent = timeStr;

      const sidebarMiniMode = document.getElementById('sidebarMiniMode');
      if (sidebarMiniMode) {
        sidebarMiniMode.textContent = appStore.timerRuntime.mode === 'pomodoro' ? 'Focus' : 'Break';
      }

      // Update SVG Progress Circle
      const progressCircle = document.getElementById('timerProgressCircle');
      if (progressCircle && total > 0) {
        const offset = this.circleCircumference * (1 - remaining / total);
        progressCircle.style.strokeDashoffset = offset;
      }

      // Browser Tab Title
      if (appStore.timerRuntime.isRunning) {
        const modeTitle = appStore.timerRuntime.mode === 'pomodoro' ? 'Focus' : 'Break';
        document.title = `(${timeStr}) FocusFlow - ${modeTitle}`;
      }

      // Update Session Dots (1 to 4)
      for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`pomoDot${i}`);
        if (dot) {
          dot.classList.toggle('active', i <= appStore.timerRuntime.sessionSequence);
        }
      }

      // Populate Task Linker
      this.populateTaskSelector();
    }

    populateTaskSelector() {
      const select = document.getElementById('timerActiveTaskSelect');
      if (!select) return;

      const currentSelected = appStore.timerRuntime.activeTaskId;
      const pendingTasks = appStore.data.tasks.filter(t => !t.completed);

      let optionsHtml = '<option value="">-- General Focus Session --</option>';
      pendingTasks.forEach(task => {
        const isSel = task.id === currentSelected ? 'selected' : '';
        optionsHtml += `<option value="${task.id}" ${isSel}>${escapeHTML(task.title)}</option>`;
      });

      select.innerHTML = optionsHtml;
    }
  }

  let pomodoroController;

  // --------------------------------------------------------------------------
  // 7. TASK MANAGER CONTROLLER (Full CRUD, Filtering, Sorting)
  // --------------------------------------------------------------------------
  class TaskManagerController {
    constructor() {
      this.statusFilter = 'all'; // all, pending, completed
      this.priorityFilter = 'all';
      this.categoryFilter = 'all';
      this.sortBy = 'dueDateAsc';
      this.searchQuery = '';

      this.initEventListeners();
      this.render();
    }

    initEventListeners() {
      // Open New Task Modal
      const openModalBtn = document.getElementById('btnOpenNewTaskModal');
      const topbarAddBtn = document.getElementById('topbarAddTaskBtn');
      const emptyAddBtn = document.getElementById('emptyStateAddTaskBtn');
      const dashAddTodayBtn = document.getElementById('dashAddTodayTaskBtn');

      [openModalBtn, topbarAddBtn, emptyAddBtn, dashAddTodayBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', () => this.openTaskModal());
      });

      // Task Modal Close / Cancel
      const closeModalBtn = document.getElementById('taskModalCloseBtn');
      const cancelModalBtn = document.getElementById('taskModalCancelBtn');
      if (closeModalBtn) closeModalBtn.addEventListener('click', () => this.closeTaskModal());
      if (cancelModalBtn) cancelModalBtn.addEventListener('click', () => this.closeTaskModal());

      // Task Form Submit
      const form = document.getElementById('taskForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFormSubmit();
        });
      }

      // Search
      const searchInput = document.getElementById('taskSearchInput');
      const clearSearchBtn = document.getElementById('taskSearchClearBtn');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.trim().toLowerCase();
          if (clearSearchBtn) clearSearchBtn.style.display = this.searchQuery ? 'block' : 'none';
          this.render();
        });
      }
      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          this.searchQuery = '';
          clearSearchBtn.style.display = 'none';
          this.render();
        });
      }

      // Status Filter Pills
      document.querySelectorAll('#taskStatusFilterGroup .filter-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          document.querySelectorAll('#taskStatusFilterGroup .filter-pill').forEach(p => p.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.statusFilter = e.currentTarget.getAttribute('data-filter');
          this.render();
        });
      });

      // Priority Filter
      const prioritySelect = document.getElementById('taskPriorityFilter');
      if (prioritySelect) {
        prioritySelect.addEventListener('change', (e) => {
          this.priorityFilter = e.target.value;
          this.render();
        });
      }

      // Category Filter
      const catSelect = document.getElementById('taskCategoryFilter');
      if (catSelect) {
        catSelect.addEventListener('change', (e) => {
          this.categoryFilter = e.target.value;
          this.render();
        });
      }

      // Sort By
      const sortSelect = document.getElementById('taskSortBy');
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          this.sortBy = e.target.value;
          this.render();
        });
      }
    }

    openTaskModal(task = null) {
      const modal = document.getElementById('taskModal');
      const modalTitle = document.getElementById('taskModalTitle');
      const idInput = document.getElementById('taskFormId');
      const titleInput = document.getElementById('taskTitleInput');
      const descInput = document.getElementById('taskDescInput');
      const priorityInput = document.getElementById('taskPriorityInput');
      const catInput = document.getElementById('taskCategoryInput');
      const dueInput = document.getElementById('taskDueDateInput');

      // Clear previous error markers
      document.getElementById('taskTitleError').classList.remove('visible');
      document.getElementById('taskDueDateError').classList.remove('visible');

      if (task) {
        modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Task';
        idInput.value = task.id;
        titleInput.value = task.title;
        descInput.value = task.description || '';
        priorityInput.value = task.priority;
        catInput.value = task.category;
        dueInput.value = task.dueDate;
      } else {
        modalTitle.innerHTML = '<i class="fa-solid fa-list-check"></i> Add New Task';
        idInput.value = '';
        titleInput.value = '';
        descInput.value = '';
        priorityInput.value = 'medium';
        catInput.value = 'Study';
        dueInput.value = getTodayDateStr();
      }

      modal.classList.add('active');
      titleInput.focus();
    }

    closeTaskModal() {
      const modal = document.getElementById('taskModal');
      if (modal) modal.classList.remove('active');
    }

    handleFormSubmit() {
      const id = document.getElementById('taskFormId').value;
      const title = document.getElementById('taskTitleInput').value.trim();
      const desc = document.getElementById('taskDescInput').value.trim();
      const priority = document.getElementById('taskPriorityInput').value;
      const category = document.getElementById('taskCategoryInput').value;
      const dueDate = document.getElementById('taskDueDateInput').value;

      let hasError = false;
      if (!title) {
        document.getElementById('taskTitleError').classList.add('visible');
        hasError = true;
      } else {
        document.getElementById('taskTitleError').classList.remove('visible');
      }

      if (!dueDate) {
        document.getElementById('taskDueDateError').classList.add('visible');
        hasError = true;
      } else {
        document.getElementById('taskDueDateError').classList.remove('visible');
      }

      if (hasError) return;

      if (id) {
        // Edit existing
        const task = appStore.data.tasks.find(t => t.id === id);
        if (task) {
          task.title = title;
          task.description = desc;
          task.priority = priority;
          task.category = category;
          task.dueDate = dueDate;
          appStore.save();
          showToast(`Task "${title}" updated successfully!`, 'success');
        }
      } else {
        // Create new
        const newTask = {
          id: 'task-' + Date.now(),
          title,
          description: desc,
          priority,
          category,
          dueDate,
          completed: false,
          createdAt: new Date().toISOString()
        };
        appStore.data.tasks.unshift(newTask);
        appStore.logActivity(`Created new task: "${title}"`, 'task');
        appStore.save();
        showToast(`Task "${title}" created successfully!`, 'success');
      }

      this.closeTaskModal();
      this.render();
      dashboardController.refresh();
      analyticsController.refresh();
      chartManager.updateAll();
    }

    toggleTaskComplete(id) {
      const task = appStore.data.tasks.find(t => t.id === id);
      if (!task) return;

      task.completed = !task.completed;
      const today = getTodayDateStr();

      if (task.completed) {
        triggerConfetti();
        showToast(`Completed: "${task.title}"! Keep it up!`, 'success');
        appStore.data.history.completedTasks[today] = (appStore.data.history.completedTasks[today] || 0) + 1;
        appStore.logActivity(`Marked "${task.title}" as completed`, 'task');
        appStore.updateStreak();
      } else {
        showToast(`Task marked as pending`, 'info');
      }

      appStore.save();
      this.render();
      dashboardController.refresh();
      analyticsController.refresh();
      chartManager.updateAll();
    }

    deleteTask(id) {
      const task = appStore.data.tasks.find(t => t.id === id);
      if (!task) return;

      modalController.showConfirm(
        `Are you sure you want to delete task "${task.title}"?`,
        () => {
          appStore.data.tasks = appStore.data.tasks.filter(t => t.id !== id);
          appStore.save();
          showToast(`Task deleted.`, 'info');
          this.render();
          dashboardController.refresh();
          analyticsController.refresh();
          chartManager.updateAll();
        }
      );
    }

    render() {
      const wrapper = document.getElementById('tasksListWrapper');
      const emptyState = document.getElementById('tasksEmptyState');
      if (!wrapper) return;

      const today = getTodayDateStr();

      // Counts for filter pills
      const totalCount = appStore.data.tasks.length;
      const pendingCount = appStore.data.tasks.filter(t => !t.completed).length;
      const completedCount = appStore.data.tasks.filter(t => t.completed).length;

      document.getElementById('countFilterAll').textContent = totalCount;
      document.getElementById('countFilterPending').textContent = pendingCount;
      document.getElementById('countFilterCompleted').textContent = completedCount;

      const sidebarTasksBadge = document.getElementById('sidebarTasksBadge');
      if (sidebarTasksBadge) sidebarTasksBadge.textContent = pendingCount;

      // Filter tasks
      let filtered = appStore.data.tasks.filter(task => {
        // Status filter
        if (this.statusFilter === 'pending' && task.completed) return false;
        if (this.statusFilter === 'completed' && !task.completed) return false;

        // Priority filter
        if (this.priorityFilter !== 'all' && task.priority !== this.priorityFilter) return false;

        // Category filter
        if (this.categoryFilter !== 'all' && task.category !== this.categoryFilter) return false;

        // Search query
        if (this.searchQuery) {
          const matchTitle = task.title.toLowerCase().includes(this.searchQuery);
          const matchDesc = (task.description || '').toLowerCase().includes(this.searchQuery);
          if (!matchTitle && !matchDesc) return false;
        }

        return true;
      });

      // Sort tasks
      filtered.sort((a, b) => {
        if (this.sortBy === 'dueDateAsc') return a.dueDate.localeCompare(b.dueDate);
        if (this.sortBy === 'dueDateDesc') return b.dueDate.localeCompare(a.dueDate);
        if (this.sortBy === 'priority') {
          const weight = { high: 3, medium: 2, low: 1 };
          return (weight[b.priority] || 0) - (weight[a.priority] || 0);
        }
        if (this.sortBy === 'titleAsc') return a.title.localeCompare(b.title);
        if (this.sortBy === 'createdDesc') return (b.createdAt || '').localeCompare(a.createdAt || '');
        return 0;
      });

      if (filtered.length === 0) {
        wrapper.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
      }

      emptyState.style.display = 'none';

      let html = '';
      filtered.forEach(task => {
        const isCompleted = task.completed;
        const isOverdue = !isCompleted && task.dueDate < today;
        const isToday = !isCompleted && task.dueDate === today;

        let dueDateBadgeClass = '';
        let dueDateLabel = task.dueDate;
        if (isOverdue) {
          dueDateBadgeClass = 'overdue';
          dueDateLabel = `${task.dueDate} (Overdue)`;
        } else if (isToday) {
          dueDateBadgeClass = 'today';
          dueDateLabel = 'Today';
        }

        html += `
          <div class="task-card-row ${isCompleted ? 'completed' : ''}" data-id="${task.id}">
            <div class="col-check">
              <div class="custom-checkbox ${isCompleted ? 'checked' : ''}" onclick="taskManagerController.toggleTaskComplete('${task.id}')" title="Toggle Complete">
                ${isCompleted ? '<i class="fa-solid fa-check"></i>' : ''}
              </div>
            </div>
            <div class="col-details">
              <span class="task-title">${escapeHTML(task.title)}</span>
              ${task.description ? `<span class="task-desc">${escapeHTML(task.description)}</span>` : ''}
            </div>
            <div class="col-category">
              <span class="category-tag cat-${task.category.toLowerCase()}">
                ${escapeHTML(task.category)}
              </span>
            </div>
            <div class="col-priority">
              <span class="priority-tag ${task.priority}">
                ${task.priority.toUpperCase()}
              </span>
            </div>
            <div class="col-date">
              <span class="due-date-badge ${dueDateBadgeClass}">
                <i class="fa-regular fa-calendar"></i> ${dueDateLabel}
              </span>
            </div>
            <div class="col-actions">
              <div class="row-actions">
                <button class="action-icon" onclick="taskManagerController.editTask('${task.id}')" title="Edit Task">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button class="action-icon delete-btn" onclick="taskManagerController.deleteTask('${task.id}')" title="Delete Task">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });

      wrapper.innerHTML = html;
    }

    editTask(id) {
      const task = appStore.data.tasks.find(t => t.id === id);
      if (task) this.openTaskModal(task);
    }
  }

  let taskManagerController;

  // --------------------------------------------------------------------------
  // 8. DAILY GOALS CONTROLLER
  // --------------------------------------------------------------------------
  class GoalsController {
    constructor() {
      this.initEventListeners();
      this.render();
    }

    initEventListeners() {
      const addGoalBtn = document.getElementById('btnOpenNewGoalModal');
      const emptyGoalBtn = document.getElementById('btnGoalEmptyCreate');
      [addGoalBtn, emptyGoalBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', () => this.openGoalModal());
      });

      const closeBtn = document.getElementById('goalModalCloseBtn');
      const cancelBtn = document.getElementById('goalModalCancelBtn');
      if (closeBtn) closeBtn.addEventListener('click', () => this.closeGoalModal());
      if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeGoalModal());

      const form = document.getElementById('goalForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFormSubmit();
        });
      }
    }

    openGoalModal(goal = null) {
      const modal = document.getElementById('goalModal');
      const titleInput = document.getElementById('goalTitleInput');
      const targetInput = document.getElementById('goalTargetInput');
      const unitInput = document.getElementById('goalUnitInput');
      const catInput = document.getElementById('goalCategoryInput');
      const idInput = document.getElementById('goalFormId');

      document.getElementById('goalTitleError').classList.remove('visible');
      document.getElementById('goalTargetError').classList.remove('visible');

      if (goal) {
        idInput.value = goal.id;
        titleInput.value = goal.title;
        targetInput.value = goal.target;
        unitInput.value = goal.unit;
        catInput.value = goal.category;
      } else {
        idInput.value = '';
        titleInput.value = '';
        targetInput.value = '5';
        unitInput.value = 'problems';
        catInput.value = 'Study';
      }

      modal.classList.add('active');
      titleInput.focus();
    }

    closeGoalModal() {
      const modal = document.getElementById('goalModal');
      if (modal) modal.classList.remove('active');
    }

    handleFormSubmit() {
      const id = document.getElementById('goalFormId').value;
      const title = document.getElementById('goalTitleInput').value.trim();
      const target = parseFloat(document.getElementById('goalTargetInput').value);
      const unit = document.getElementById('goalUnitInput').value.trim() || 'units';
      const category = document.getElementById('goalCategoryInput').value;

      let hasError = false;
      if (!title) {
        document.getElementById('goalTitleError').classList.add('visible');
        hasError = true;
      }
      if (isNaN(target) || target <= 0) {
        document.getElementById('goalTargetError').classList.add('visible');
        hasError = true;
      }

      if (hasError) return;

      if (id) {
        const goal = appStore.data.goals.find(g => g.id === id);
        if (goal) {
          goal.title = title;
          goal.target = target;
          goal.unit = unit;
          goal.category = category;
          goal.completed = goal.current >= target;
          appStore.save();
          showToast(`Goal updated: "${title}"`, 'success');
        }
      } else {
        const newGoal = {
          id: 'goal-' + Date.now(),
          title,
          target,
          current: 0,
          unit,
          category,
          completed: false
        };
        appStore.data.goals.push(newGoal);
        appStore.logActivity(`Added new goal: "${title}"`, 'goal');
        appStore.save();
        showToast(`Goal "${title}" added!`, 'success');
      }

      this.closeGoalModal();
      this.render();
      dashboardController.refresh();
    }

    stepGoal(id, step) {
      const goal = appStore.data.goals.find(g => g.id === id);
      if (!goal) return;

      const wasCompleted = goal.completed;
      goal.current = Math.max(0, goal.current + step);
      goal.completed = goal.current >= goal.target;

      if (!wasCompleted && goal.completed) {
        triggerConfetti();
        showToast(`🎯 Goal completed: "${goal.title}"! Awesome work!`, 'success');
        appStore.logActivity(`Completed daily goal: "${goal.title}"`, 'goal');
        appStore.updateStreak();
      }

      appStore.save();
      this.render();
      dashboardController.refresh();
    }

    deleteGoal(id) {
      const goal = appStore.data.goals.find(g => g.id === id);
      if (!goal) return;

      modalController.showConfirm(
        `Are you sure you want to delete goal "${goal.title}"?`,
        () => {
          appStore.data.goals = appStore.data.goals.filter(g => g.id !== id);
          appStore.save();
          showToast('Goal deleted.', 'info');
          this.render();
          dashboardController.refresh();
        }
      );
    }

    render() {
      const grid = document.getElementById('goalsCardsGrid');
      const emptyState = document.getElementById('goalsEmptyState');
      if (!grid) return;

      const total = appStore.data.goals.length;
      const done = appStore.data.goals.filter(g => g.completed).length;
      const active = total - done;
      const overallPercent = total > 0 ? Math.round((done / total) * 100) : 0;

      // Summary top ring & counts
      document.getElementById('goalsOverallPercent').textContent = `${overallPercent}%`;
      document.getElementById('goalsActiveCount').textContent = active;
      document.getElementById('goalsDoneCount').textContent = done;
      document.getElementById('goalsTotalCount').textContent = total;
      document.getElementById('goalsSummarySub').textContent = `${done} of ${total} daily objectives completed.`;

      const ringFg = document.getElementById('goalsOverallRing');
      if (ringFg) {
        const circumference = 2 * Math.PI * 42; // 263.89
        const offset = circumference * (1 - overallPercent / 100);
        ringFg.style.strokeDashoffset = offset;
      }

      if (total === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
      }

      emptyState.style.display = 'none';

      let html = '';
      appStore.data.goals.forEach(goal => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        const isDone = goal.completed;

        html += `
          <div class="goal-card ${isDone ? 'completed' : ''}" data-id="${goal.id}">
            <div class="goal-top">
              <span class="goal-title">${escapeHTML(goal.title)}</span>
              <span class="goal-status-badge ${isDone ? 'done' : 'in-progress'}">
                ${isDone ? '<i class="fa-solid fa-check"></i> Done' : `${percent}%`}
              </span>
            </div>

            <div class="goal-progress-wrap">
              <div class="goal-progress-info">
                <span>Progress: ${goal.current} / ${goal.target} ${escapeHTML(goal.unit)}</span>
                <span>${percent}%</span>
              </div>
              <div class="goal-bar">
                <div class="goal-bar-fill" style="width: ${percent}%"></div>
              </div>
            </div>

            <div class="goal-actions-row">
              <div class="stepper-group">
                <button class="stepper-btn" onclick="goalsController.stepGoal('${goal.id}', -1)" title="Decrease">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button class="stepper-btn" onclick="goalsController.stepGoal('${goal.id}', 1)" title="Increase">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div class="row-actions">
                <button class="action-icon" onclick="goalsController.openGoalModal(${JSON.stringify(goal).replace(/"/g, '&quot;')})" title="Edit Goal">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button class="action-icon delete-btn" onclick="goalsController.deleteGoal('${goal.id}')" title="Delete Goal">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });

      grid.innerHTML = html;
    }
  }

  let goalsController;

  // --------------------------------------------------------------------------
  // 9. DAILY PLANNER CONTROLLER (Timeblocking & Visual Timeline)
  // --------------------------------------------------------------------------
  class PlannerController {
    constructor() {
      this.initEventListeners();
      this.render();
      this.initLiveTimelineIndicator();
    }

    initEventListeners() {
      const addBtn = document.getElementById('btnOpenNewActivityModal');
      if (addBtn) addBtn.addEventListener('click', () => this.openActivityModal());

      const closeBtn = document.getElementById('activityModalCloseBtn');
      const cancelBtn = document.getElementById('activityModalCancelBtn');
      if (closeBtn) closeBtn.addEventListener('click', () => this.closeActivityModal());
      if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeActivityModal());

      const form = document.getElementById('activityForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFormSubmit();
        });
      }

      const clearFinishedBtn = document.getElementById('btnClearCompletedActivitiesBtn');
      if (clearFinishedBtn) {
        clearFinishedBtn.addEventListener('click', () => {
          appStore.data.activities = appStore.data.activities.filter(a => !a.completed);
          appStore.save();
          showToast('Completed activities cleared from timeline.', 'info');
          this.render();
        });
      }
    }

    openActivityModal() {
      const modal = document.getElementById('activityModal');
      document.getElementById('activityTitleError').classList.remove('visible');
      document.getElementById('activityTimeError').classList.remove('visible');

      document.getElementById('activityTitleInput').value = '';
      document.getElementById('activityStartTimeInput').value = '10:00';
      document.getElementById('activityEndTimeInput').value = '11:30';
      document.getElementById('activityCategoryInput').value = 'Study';
      document.getElementById('activityDescInput').value = '';

      modal.classList.add('active');
      document.getElementById('activityTitleInput').focus();
    }

    closeActivityModal() {
      const modal = document.getElementById('activityModal');
      if (modal) modal.classList.remove('active');
    }

    handleFormSubmit() {
      const title = document.getElementById('activityTitleInput').value.trim();
      const start = document.getElementById('activityStartTimeInput').value;
      const end = document.getElementById('activityEndTimeInput').value;
      const category = document.getElementById('activityCategoryInput').value;
      const notes = document.getElementById('activityDescInput').value.trim();

      let hasError = false;
      if (!title) {
        document.getElementById('activityTitleError').classList.add('visible');
        hasError = true;
      }
      if (start >= end) {
        document.getElementById('activityTimeError').classList.add('visible');
        hasError = true;
      }

      if (hasError) return;

      const newAct = {
        id: 'act-' + Date.now(),
        title,
        startTime: start,
        endTime: end,
        category,
        notes,
        completed: false
      };

      appStore.data.activities.push(newAct);
      // Sort chronologically
      appStore.data.activities.sort((a, b) => a.startTime.localeCompare(b.startTime));
      appStore.save();
      showToast(`Planned activity "${title}" scheduled!`, 'success');

      this.closeActivityModal();
      this.render();
    }

    toggleComplete(id) {
      const act = appStore.data.activities.find(a => a.id === id);
      if (!act) return;

      act.completed = !act.completed;
      if (act.completed) {
        showToast(`Finished: "${act.title}"`, 'success');
      }
      appStore.save();
      this.render();
    }

    deleteActivity(id) {
      appStore.data.activities = appStore.data.activities.filter(a => a.id !== id);
      appStore.save();
      showToast('Activity removed.', 'info');
      this.render();
    }

    render() {
      this.renderTimelineGrid();
      this.renderActivitiesList();
    }

    renderTimelineGrid() {
      const container = document.getElementById('visualTimelineContainer');
      if (!container) return;

      // Start at 06:00, End at 23:00 (17 hours total = 1020 minutes)
      const startHour = 6;
      const endHour = 23;
      const totalHours = endHour - startHour;
      const hourHeight = 55; // pixels per hour

      let gridHtml = '';
      for (let h = startHour; h <= endHour; h++) {
        const timeLabel = `${String(h).padStart(2, '0')}:00`;
        gridHtml += `
          <div class="timeline-hour-row" style="height: ${hourHeight}px;">
            <span class="timeline-hour-label">${timeLabel}</span>
          </div>
        `;
      }

      // Scheduled Blocks
      let blocksHtml = '';
      appStore.data.activities.forEach(act => {
        const [sh, sm] = act.startTime.split(':').map(Number);
        const [eh, em] = act.endTime.split(':').map(Number);

        const startMinFromBase = (sh - startHour) * 60 + sm;
        const durationMins = (eh * 60 + em) - (sh * 60 + sm);

        if (startMinFromBase >= 0 && startMinFromBase <= totalHours * 60) {
          const topPx = (startMinFromBase / 60) * hourHeight;
          const heightPx = Math.max(30, (durationMins / 60) * hourHeight);

          blocksHtml += `
            <div class="timeline-event-block cat-${act.category.toLowerCase()} ${act.completed ? 'completed' : ''}" 
                 style="top: ${topPx}px; height: ${heightPx}px;"
                 onclick="plannerController.toggleComplete('${act.id}')"
                 title="${escapeHTML(act.title)} (${act.startTime} - ${act.endTime})">
              <strong>${act.startTime} - ${escapeHTML(act.title)}</strong>
              ${act.notes ? `<div>${escapeHTML(act.notes)}</div>` : ''}
            </div>
          `;
        }
      });

      // Live Now Indicator Line
      const now = new Date();
      const nowH = now.getHours();
      const nowM = now.getMinutes();
      let nowIndicatorHtml = '';

      if (nowH >= startHour && nowH <= endHour) {
        const nowMinsFromBase = (nowH - startHour) * 60 + nowM;
        const nowTopPx = (nowMinsFromBase / 60) * hourHeight;
        nowIndicatorHtml = `<div class="timeline-now-line" style="top: ${nowTopPx}px;" title="Current Time"></div>`;
      }

      container.innerHTML = gridHtml + blocksHtml + nowIndicatorHtml;
    }

    renderActivitiesList() {
      const listEl = document.getElementById('plannerActivitiesList');
      const emptyState = document.getElementById('plannerEmptyState');
      const countEl = document.getElementById('plannerActivitiesCount');
      if (!listEl) return;

      const total = appStore.data.activities.length;
      if (countEl) countEl.textContent = `${total} activities planned`;

      if (total === 0) {
        listEl.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
      }

      emptyState.style.display = 'none';

      let html = '';
      appStore.data.activities.forEach(act => {
        html += `
          <div class="activity-card ${act.completed ? 'completed' : ''}">
            <div class="custom-checkbox ${act.completed ? 'checked' : ''}" onclick="plannerController.toggleComplete('${act.id}')">
              ${act.completed ? '<i class="fa-solid fa-check"></i>' : ''}
            </div>
            <div class="act-info" style="flex: 1;">
              <span class="act-title">${escapeHTML(act.title)}</span>
              <span class="act-time-range">
                <i class="fa-regular fa-clock"></i> ${act.startTime} – ${act.endTime} • <span class="category-tag cat-${act.category.toLowerCase()}">${act.category}</span>
              </span>
            </div>
            <button class="action-icon delete-btn" onclick="plannerController.deleteActivity('${act.id}')" title="Delete">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        `;
      });

      listEl.innerHTML = html;
    }

    initLiveTimelineIndicator() {
      // Re-render timeline now line every minute
      setInterval(() => {
        const activeView = document.querySelector('.view-panel.active');
        if (activeView && activeView.id === 'view-planner') {
          this.renderTimelineGrid();
        }
      }, 60000);
    }
  }

  let plannerController;

  // --------------------------------------------------------------------------
  // 10. PRODUCTIVITY ANALYTICS CONTROLLER
  // --------------------------------------------------------------------------
  class AnalyticsController {
    constructor() {
      this.daysRange = 7;
      this.initEventListeners();
      this.refresh();
    }

    initEventListeners() {
      const btn7 = document.getElementById('btnRange7Days');
      const btn30 = document.getElementById('btnRange30Days');

      if (btn7) {
        btn7.addEventListener('click', () => {
          btn7.classList.add('active');
          btn30.classList.remove('active');
          this.daysRange = 7;
          chartManager.renderAnalyticsCharts(7);
        });
      }

      if (btn30) {
        btn30.addEventListener('click', () => {
          btn30.classList.add('active');
          btn7.classList.remove('active');
          this.daysRange = 30;
          chartManager.renderAnalyticsCharts(30);
        });
      }
    }

    refresh() {
      const today = getTodayDateStr();
      const todayMinutes = appStore.data.history.focusMinutes[today] || 0;

      // Weekly Focus calculation (last 7 days sum)
      let weeklyMinutes = 0;
      let maxMinutes = -1;
      let maxDayName = 'Sunday';

      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const mins = appStore.data.history.focusMinutes[dateKey] || 0;
        weeklyMinutes += mins;
        if (mins > maxMinutes) {
          maxMinutes = mins;
          maxDayName = d.toLocaleDateString('en-US', { weekday: 'long' });
        }
      }

      // Format weekly
      const weeklyHours = Math.floor(weeklyMinutes / 60);
      const weeklyRemMins = weeklyMinutes % 60;

      // Task Completion %
      const totalTasks = appStore.data.tasks.length;
      const completedTasks = appStore.data.tasks.filter(t => t.completed).length;
      const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      // Update DOM elements
      document.getElementById('analyticsDailyFocus').textContent = `${todayMinutes}m`;
      document.getElementById('analyticsDailyComparison').textContent = `Target: ${Math.floor(appStore.data.settings.dailyFocusTarget / 60)}h ${appStore.data.settings.dailyFocusTarget % 60}m`;
      document.getElementById('analyticsWeeklyFocus').textContent = `${weeklyHours}h ${weeklyRemMins}m`;
      document.getElementById('analyticsSessionsTotal').textContent = `${appStore.data.history.totalSessionsCompleted || 0} Pomodoro blocks`;
      document.getElementById('analyticsTaskCompletionRate').textContent = `${completionRate}%`;
      document.getElementById('analyticsCompletedVsTotal').textContent = `${completedTasks} of ${totalTasks} tasks`;
      document.getElementById('analyticsBestDay').textContent = maxDayName;
      document.getElementById('analyticsBestDayMetric').textContent = `${maxMinutes}m high output`;

      // Streak insight
      const streakTitle = document.getElementById('insightStreakTitle');
      const streakDesc = document.getElementById('insightStreakDesc');
      if (streakTitle && streakDesc) {
        streakTitle.textContent = `${appStore.data.streak.count}-Day Streak Going Strong!`;
        streakDesc.textContent = `You've maintained consistent focus. Complete your goals today to push your streak to ${appStore.data.streak.count + 1} days!`;
      }
    }
  }

  let analyticsController;

  // --------------------------------------------------------------------------
  // 11. DASHBOARD CONTROLLER (Widgets, Statistics & Feeds)
  // --------------------------------------------------------------------------
  class DashboardController {
    constructor() {
      this.initEventListeners();
      this.refresh();
      this.initMotivationalQuote();
    }

    initEventListeners() {
      const refreshQuoteBtn = document.getElementById('refreshQuoteBtn');
      if (refreshQuoteBtn) {
        refreshQuoteBtn.addEventListener('click', () => this.shuffleQuote());
      }

      // Quick banner CTA buttons
      const startTimerBtn = document.getElementById('dashStartTimerBtn');
      if (startTimerBtn) {
        startTimerBtn.addEventListener('click', () => {
          navigationController.navigateTo('timer');
          pomodoroController.start();
        });
      }

      const newTaskBtn = document.getElementById('dashNewTaskBtn');
      if (newTaskBtn) {
        newTaskBtn.addEventListener('click', () => {
          taskManagerController.openTaskModal();
        });
      }

      const planDayBtn = document.getElementById('dashPlanDayBtn');
      if (planDayBtn) {
        planDayBtn.addEventListener('click', () => {
          navigationController.navigateTo('planner');
        });
      }

      const viewAllTasksBtn = document.getElementById('dashViewAllTasksBtn');
      if (viewAllTasksBtn) {
        viewAllTasksBtn.addEventListener('click', () => {
          navigationController.navigateTo('tasks');
        });
      }

      const clearLogBtn = document.getElementById('clearActivityLogBtn');
      if (clearLogBtn) {
        clearLogBtn.addEventListener('click', () => {
          appStore.data.activityLog = [];
          appStore.save();
          this.renderActivityFeed();
          showToast('Activity feed cleared.', 'info');
        });
      }
    }

    initMotivationalQuote() {
      this.shuffleQuote();
    }

    shuffleQuote() {
      const quote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
      const textEl = document.getElementById('quoteText');
      const authorEl = document.getElementById('quoteAuthor');
      if (textEl) textEl.textContent = `"${quote.text}"`;
      if (authorEl) authorEl.textContent = `— ${quote.author}`;
    }

    refresh() {
      const today = getTodayDateStr();

      // Tasks stats
      const totalTasks = appStore.data.tasks.length;
      const completedTasks = appStore.data.tasks.filter(t => t.completed).length;
      const pendingTasks = totalTasks - completedTasks;
      const overdueTasks = appStore.data.tasks.filter(t => !t.completed && t.dueDate < today).length;
      const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      document.getElementById('dashTotalTasks').textContent = totalTasks;
      document.getElementById('dashCompletedTasks').textContent = completedTasks;
      document.getElementById('dashPendingTasks').textContent = pendingTasks;
      document.getElementById('dashCompletionRate').textContent = `${completionRate}% completed`;
      document.getElementById('dashOverdueTasks').textContent = `${overdueTasks} overdue`;

      // Focus Time stats
      const todayMinutes = appStore.data.history.focusMinutes[today] || 0;
      const hours = Math.floor(todayMinutes / 60);
      const remMins = todayMinutes % 60;
      const timeFormatted = hours > 0 ? `${hours}h ${remMins}m` : `${remMins}m`;

      document.getElementById('dashTotalFocusTime').textContent = timeFormatted;
      document.getElementById('dashFocusSessionsCount').textContent = `${appStore.data.history.totalSessionsCompleted || 0} sessions done`;

      // Goals stats
      const totalGoals = appStore.data.goals.length;
      const completedGoals = appStore.data.goals.filter(g => g.completed).length;
      const goalsRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

      document.getElementById('dashGoalRate').textContent = `${goalsRate}%`;
      document.getElementById('dashGoalProgressBar').style.width = `${goalsRate}%`;

      // Streak
      document.getElementById('dashStreakCount').textContent = `${appStore.data.streak.count} Day${appStore.data.streak.count === 1 ? '' : 's'}`;
      document.getElementById('sidebarStreakCount').textContent = appStore.data.streak.count;

      // Timer section badges
      const timerTotalTodayMinutes = document.getElementById('timerTotalTodayMinutes');
      if (timerTotalTodayMinutes) timerTotalTodayMinutes.textContent = timeFormatted;
      const timerSessionsCompletedCount = document.getElementById('timerSessionsCompletedCount');
      if (timerSessionsCompletedCount) timerSessionsCompletedCount.textContent = appStore.data.history.totalSessionsCompleted || 0;

      // Populate Today's Tasks
      this.renderTodayTasks();

      // Populate Goals snapshot
      this.renderGoalsSnapshot();

      // Populate Activity Feed
      this.renderActivityFeed();
    }

    renderTodayTasks() {
      const listEl = document.getElementById('dashTodayTaskList');
      const emptyEl = document.getElementById('dashEmptyTasksState');
      const subEl = document.getElementById('dashTodayTaskSub');
      if (!listEl) return;

      const today = getTodayDateStr();
      const todayTasks = appStore.data.tasks.filter(t => t.dueDate === today);

      if (subEl) subEl.textContent = `${todayTasks.length} tasks scheduled for today`;

      if (todayTasks.length === 0) {
        listEl.innerHTML = '';
        emptyEl.style.display = 'flex';
        return;
      }

      emptyEl.style.display = 'none';

      let html = '';
      todayTasks.forEach(task => {
        html += `
          <li class="task-item-compact ${task.completed ? 'completed' : ''}">
            <div class="task-left">
              <div class="custom-checkbox ${task.completed ? 'checked' : ''}" onclick="taskManagerController.toggleTaskComplete('${task.id}')">
                ${task.completed ? '<i class="fa-solid fa-check"></i>' : ''}
              </div>
              <span class="task-text">${escapeHTML(task.title)}</span>
            </div>
            <span class="priority-tag ${task.priority}">${task.priority}</span>
          </li>
        `;
      });

      listEl.innerHTML = html;
    }

    renderGoalsSnapshot() {
      const listEl = document.getElementById('dashGoalsList');
      if (!listEl) return;

      let html = '';
      appStore.data.goals.forEach(goal => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        html += `
          <div class="dash-goal-item">
            <div class="dash-goal-header">
              <span>${escapeHTML(goal.title)}</span>
              <span>${goal.current}/${goal.target} ${goal.unit} (${percent}%)</span>
            </div>
            <div class="dash-goal-progress">
              <div class="dash-goal-fill" style="width: ${percent}%;"></div>
            </div>
          </div>
        `;
      });

      listEl.innerHTML = html || '<div class="empty-state-mini"><p>No active goals.</p></div>';
    }

    renderActivityFeed() {
      const feedEl = document.getElementById('dashboardActivityFeed');
      if (!feedEl) return;

      if (!appStore.data.activityLog || appStore.data.activityLog.length === 0) {
        feedEl.innerHTML = '<li class="empty-state-mini"><p>No recent activity yet.</p></li>';
        return;
      }

      let html = '';
      appStore.data.activityLog.slice(0, 7).forEach(log => {
        const timeAgo = formatTimeAgo(new Date(log.timestamp));
        let dotColor = 'var(--primary)';
        if (log.type === 'timer') dotColor = 'var(--accent-cyan)';
        if (log.type === 'task') dotColor = 'var(--accent-emerald)';
        if (log.type === 'goal') dotColor = 'var(--accent-amber)';

        html += `
          <li class="activity-item">
            <div class="activity-dot" style="background: ${dotColor};"></div>
            <div class="activity-content">
              <span class="activity-title">${escapeHTML(log.text)}</span>
              <span class="activity-time">${timeAgo}</span>
            </div>
          </li>
        `;
      });

      feedEl.innerHTML = html;
    }
  }

  let dashboardController;

  function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  // --------------------------------------------------------------------------
  // 12. SETTINGS CONTROLLER (Persistence, Themes, Export/Import, Danger Zone)
  // --------------------------------------------------------------------------
  class SettingsController {
    constructor() {
      this.initEventListeners();
      this.populateForm();
    }

    initEventListeners() {
      // Save Settings button
      const saveBtn = document.getElementById('btnSaveAllSettings');
      if (saveBtn) {
        saveBtn.addEventListener('click', () => this.saveSettings());
      }

      // Theme toggle in topbar
      const themeToggleBtn = document.getElementById('themeToggleBtn');
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          this.applyTheme(newTheme);
        });
      }

      // Theme select dropdown in settings
      const themeSelect = document.getElementById('settingThemeSelect');
      if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
          this.applyTheme(e.target.value);
        });
      }

      // Test chime button
      const testSoundBtn = document.getElementById('btnTestSound');
      if (testSoundBtn) {
        testSoundBtn.addEventListener('click', () => {
          audioChime.playSessionComplete();
          showToast('Playing chime preview...', 'info');
        });
      }

      // Export JSON
      const exportBtn = document.getElementById('btnExportData');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => this.exportBackup());
      }

      // Import JSON
      const importTrigger = document.getElementById('btnTriggerImport');
      const fileInput = document.getElementById('importFileInput');
      if (importTrigger && fileInput) {
        importTrigger.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => this.importBackup(e));
      }

      // Reset All Data
      const resetBtn = document.getElementById('btnResetAllData');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          modalController.showConfirm(
            'CRITICAL WARNING: This will permanently delete all your tasks, habits, daily goals, focus statistics, and customizations. Are you absolutely certain?',
            () => {
              localStorage.removeItem(STORAGE_KEY);
              showToast('Workspace reset to defaults. Reloading...', 'warning', 2000);
              setTimeout(() => window.location.reload(), 1500);
            }
          );
        });
      }
    }

    applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      appStore.data.settings.theme = theme;
      appStore.save();

      const themeSelect = document.getElementById('settingThemeSelect');
      if (themeSelect) themeSelect.value = theme;

      // Update Chart.js color schemes
      chartManager.updateAll();
    }

    populateForm() {
      const s = appStore.data.settings;
      this.applyTheme(s.theme || 'dark');

      const focusDur = document.getElementById('settingFocusDuration');
      const shortDur = document.getElementById('settingShortBreak');
      const longDur = document.getElementById('settingLongBreak');
      const autoStart = document.getElementById('settingAutoStartBreaks');
      const dailyTarget = document.getElementById('settingDailyFocusTarget');
      const soundCheck = document.getElementById('settingSoundEnabled');

      if (focusDur) focusDur.value = s.focusDuration;
      if (shortDur) shortDur.value = s.shortBreakDuration;
      if (longDur) longDur.value = s.longBreakDuration;
      if (autoStart) autoStart.checked = s.autoStartBreaks;
      if (dailyTarget) dailyTarget.value = s.dailyFocusTarget;
      if (soundCheck) soundCheck.checked = s.soundEnabled;

      // Populate timer preset fields
      const quickP = document.getElementById('quickPomoDuration');
      const quickS = document.getElementById('quickShortDuration');
      const quickL = document.getElementById('quickLongDuration');
      if (quickP) quickP.value = s.focusDuration;
      if (quickS) quickS.value = s.shortBreakDuration;
      if (quickL) quickL.value = s.longBreakDuration;
    }

    saveSettings() {
      const focusDur = parseInt(document.getElementById('settingFocusDuration').value, 10);
      const shortDur = parseInt(document.getElementById('settingShortBreak').value, 10);
      const longDur = parseInt(document.getElementById('settingLongBreak').value, 10);
      const autoStart = document.getElementById('settingAutoStartBreaks').checked;
      const dailyTarget = parseInt(document.getElementById('settingDailyFocusTarget').value, 10);
      const soundEnabled = document.getElementById('settingSoundEnabled').checked;

      if (focusDur > 0 && shortDur > 0 && longDur > 0 && dailyTarget > 0) {
        appStore.data.settings.focusDuration = focusDur;
        appStore.data.settings.shortBreakDuration = shortDur;
        appStore.data.settings.longBreakDuration = longDur;
        appStore.data.settings.autoStartBreaks = autoStart;
        appStore.data.settings.dailyFocusTarget = dailyTarget;
        appStore.data.settings.soundEnabled = soundEnabled;

        appStore.save();
        pomodoroController.reset();
        analyticsController.refresh();
        showToast('Settings saved successfully!', 'success');
      } else {
        showToast('Please check all fields for valid numeric values.', 'error');
      }
    }

    exportBackup() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appStore.data, null, 2));
      const downloadAnchor = document.createElement('a');
      const filename = `focusflow-backup-${getTodayDateStr()}.json`;
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', filename);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Workspace backup exported successfully.', 'success');
    }

    importBackup(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (!parsed.tasks || !parsed.goals || !parsed.settings) {
            throw new Error('Invalid FocusFlow JSON backup format.');
          }
          appStore.data = parsed;
          appStore.save();
          showToast('Workspace imported! Refreshing app...', 'success');
          setTimeout(() => window.location.reload(), 1200);
        } catch (err) {
          showToast(`Import failed: ${err.message}`, 'error', 4500);
        }
      };
      reader.readAsText(file);
    }
  }

  let settingsController;

  // --------------------------------------------------------------------------
  // 13. CONFIRMATION MODAL CONTROLLER
  // --------------------------------------------------------------------------
  class ModalController {
    constructor() {
      this.confirmCallback = null;
      this.init();
    }

    init() {
      const modal = document.getElementById('confirmModal');
      const closeBtn = document.getElementById('confirmModalCloseBtn');
      const cancelBtn = document.getElementById('confirmModalCancelBtn');
      const acceptBtn = document.getElementById('confirmModalAcceptBtn');

      const hide = () => {
        if (modal) modal.classList.remove('active');
        this.confirmCallback = null;
      };

      if (closeBtn) closeBtn.addEventListener('click', hide);
      if (cancelBtn) cancelBtn.addEventListener('click', hide);
      if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
          if (this.confirmCallback) {
            this.confirmCallback();
          }
          hide();
        });
      }

      // Close modal on escape key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
        }
      });
    }

    showConfirm(message, callback) {
      const modal = document.getElementById('confirmModal');
      const msgEl = document.getElementById('confirmModalMessage');
      if (msgEl) msgEl.textContent = message;
      this.confirmCallback = callback;
      if (modal) modal.classList.add('active');
    }
  }

  const modalController = new ModalController();

  // --------------------------------------------------------------------------
  // 14. ROUTING & SPA NAVIGATION CONTROLLER
  // --------------------------------------------------------------------------
  class NavigationController {
    constructor() {
      this.views = ['dashboard', 'tasks', 'timer', 'goals', 'planner', 'analytics', 'settings'];
      this.currentView = 'dashboard';
      this.init();
    }

    init() {
      // Sidebar collapsible toggle
      const sidebar = document.getElementById('sidebar');
      const sidebarToggle = document.getElementById('sidebarCollapseBtn');
      const appLayout = document.getElementById('appLayout');

      if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
          sidebar.classList.toggle('collapsed');
          if (appLayout) appLayout.classList.toggle('sidebar-collapsed');
        });
      }

      // Mobile Menu Toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const backdrop = document.getElementById('sidebarBackdrop');

      if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
          sidebar.classList.add('mobile-open');
          if (backdrop) backdrop.classList.add('active');
        });
      }

      if (backdrop && sidebar) {
        backdrop.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
          backdrop.classList.remove('active');
        });
      }

      // Topbar Quick Timer button
      const topbarTimerBtn = document.getElementById('topbarTimerBtn');
      if (topbarTimerBtn) {
        topbarTimerBtn.addEventListener('click', () => this.navigateTo('timer'));
      }

      // Nav Links
      document.querySelectorAll('.nav-link, .card-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const target = e.currentTarget.getAttribute('data-view');
          if (target && this.views.includes(target)) {
            e.preventDefault();
            this.navigateTo(target);

            // Close mobile menu if open
            if (sidebar) sidebar.classList.remove('mobile-open');
            if (backdrop) backdrop.classList.remove('active');
          }
        });
      });

      // Handle Hash Changes
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if (this.views.includes(hash)) {
          this.navigateTo(hash, false);
        }
      });

      // Initial route
      const initialHash = window.location.hash.replace('#', '');
      if (this.views.includes(initialHash)) {
        this.navigateTo(initialHash, false);
      } else {
        this.navigateTo('dashboard', false);
      }
    }

    navigateTo(viewId, updateHash = true) {
      if (!this.views.includes(viewId)) return;
      this.currentView = viewId;

      if (updateHash) {
        window.location.hash = viewId;
      }

      // Switch active view panels
      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      const activePanel = document.getElementById(`view-${viewId}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }

      // Switch active nav items
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-view') === viewId);
      });

      // Update Topbar Breadcrumb
      const breadcrumb = document.getElementById('breadcrumbTitle');
      if (breadcrumb) {
        const titleMap = {
          dashboard: 'Dashboard',
          tasks: 'My Tasks',
          timer: 'Focus Timer',
          goals: 'Daily Goals',
          planner: 'Daily Planner',
          analytics: 'Productivity Analytics',
          settings: 'Settings'
        };
        breadcrumb.textContent = titleMap[viewId] || 'Dashboard';
      }

      // Trigger view-specific re-renders
      if (viewId === 'dashboard') {
        dashboardController.refresh();
        chartManager.renderDashboardChart();
      } else if (viewId === 'tasks') {
        taskManagerController.render();
      } else if (viewId === 'timer') {
        pomodoroController.syncDisplay();
      } else if (viewId === 'goals') {
        goalsController.render();
      } else if (viewId === 'planner') {
        plannerController.render();
      } else if (viewId === 'analytics') {
        analyticsController.refresh();
        chartManager.renderAnalyticsCharts(analyticsController.daysRange);
      }
    }
  }

  let navigationController;

  // --------------------------------------------------------------------------
  // 15. GLOBAL DATE & LIVE CLOCK
  // --------------------------------------------------------------------------
  function initLiveDate() {
    const dateText = document.getElementById('dateText');
    if (!dateText) return;

    const updateDate = () => {
      const now = new Date();
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      dateText.textContent = now.toLocaleDateString('en-US', options);
    };

    updateDate();
  }

  // --------------------------------------------------------------------------
  // 16. GLOBAL KEYBOARD SHORTCUTS
  // --------------------------------------------------------------------------
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignore if typing inside input, textarea, or select
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      // Ctrl+N / Cmd+N -> New Task
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        taskManagerController.openTaskModal();
      }

      // Spacebar -> Toggle Timer
      if (e.code === 'Space') {
        e.preventDefault();
        if (appStore.timerRuntime.isRunning) {
          pomodoroController.pause();
        } else {
          pomodoroController.start();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 17. APP BOOTSTRAPPER
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initLiveDate();

    // Initialize Subsystems
    pomodoroController = new PomodoroController();
    taskManagerController = new TaskManagerController();
    goalsController = new GoalsController();
    plannerController = new PlannerController();
    analyticsController = new AnalyticsController();
    dashboardController = new DashboardController();
    settingsController = new SettingsController();
    navigationController = new NavigationController();

    // Charts Initial Render
    setTimeout(() => {
      chartManager.updateAll();
    }, 150);

    initKeyboardShortcuts();

    // Expose controllers to window for inline onclick handlers
    window.taskManagerController = taskManagerController;
    window.goalsController = goalsController;
    window.plannerController = plannerController;
    window.pomodoroController = pomodoroController;
    window.navigationController = navigationController;

    console.log('%c🚀 FocusFlow Productivity & Study Tracker initialized successfully!', 'color: #6366f1; font-weight: bold; font-size: 14px;');
  });

})();
