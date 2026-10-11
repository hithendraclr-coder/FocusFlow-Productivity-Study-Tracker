# FocusFlow — Productivity & Study Tracker

> **A modern, responsive, all-in-one productivity SaaS web application designed for students and professionals.** Master your time with deep focus Pomodoro sessions, comprehensive task management, habit-forming daily goals, visual timeblocking, and dynamic productivity analytics.

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Markup-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design%20System-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Storage](https://img.shields.io/badge/Storage-LocalStorage-green.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🌟 Overview & Key Highlights

**FocusFlow** transforms daily chaos into structured progress. Engineered with clean vanilla web technologies, it delivers the snappy, polished experience of a modern SaaS tool (like Linear or Notion) without requiring heavy frameworks or server backends. All your data is stored securely in your browser's `localStorage` and persists seamlessly across reloads.

---

## 🚀 Key Features

### 1. 📊 Executive Dashboard
- **Live Metric Counter Cards:** Real-time metrics for Total Tasks, Completed Tasks, Pending Tasks, Total Focus Time, Daily Goal Progress (%), and Active Productivity Streaks.
- **Weekly Productivity Mini-Chart:** Smooth area chart visualizing daily focus time trends over the last 7 days.
- **Today's Tasks Quick List:** Check off daily tasks with instant inline checkboxes.
- **Goals Progress Snapshot:** Animated progress bars showing quantitative completion rates.
- **Recent Activity Feed:** Timestamped feed logging focus sessions, completed tasks, and updated goals.
- **Motivational Spark:** Dynamic quote widget with author attributions and a refresh button for continuous inspiration.

### 2. ⏱️ Scientific Pomodoro Timer
- **Three Core Modes:** 25-minute Focus Session, 5-minute Short Break, and 15-minute Long Break.
- **Animated SVG Circular Progress Ring:** Smoothly depletes as the countdown progresses.
- **Browser Tab Live Sync:** Displays remaining time directly in the document title (`(24:45) FocusFlow - Focus`).
- **Web Audio API Harmonic Chime:** Dual-tone sine wave bell chime synthesized client-side with zero external audio assets required.
- **Session Sequence Dots:** Tracks cycles (4 sessions before triggering a recommended long break).
- **Task Linker:** Tag a specific task to your focus session to track deep work spent per assignment.
- **Customizable Durations:** Quick preset adjustments and fine-grained controls in Settings.

### 3. 📋 Comprehensive Task Manager
- **Full CRUD Support:** Add, edit, delete, and toggle tasks with confirmation dialogs.
- **Priority Classification:** High (🔴), Medium (🟡), and Low (🟢) with color-coded badges.
- **Categorization:** Study (📚), Work (💼), Personal (🌱), and Other (⚡).
- **Due Date Tracking:** Smart detection of overdue tasks and tasks due today.
- **Multi-criteria Filtering:** Filter by status (All, Pending, Completed), Priority, or Category.
- **Instant Search:** Real-time keyword filtering across task titles and descriptions.
- **Flexible Sorting:** Sort by Due Date, Priority (High to Low), Title (A–Z), or Date Added.
- **Empty State Views:** Friendly illustrations and call-to-actions when no tasks match.

### 4. 🎯 Habit & Quantitative Daily Goals
- **Target Tracking:** Track quantifiable habits (e.g. *Solve 5 coding problems*, *Study Java for 2 hours*, *Read 10 pages*).
- **Interactive Steppers:** Increment or decrement progress with one-click `+` / `–` buttons.
- **SVG Circular Completion Ring:** Displays aggregate goal completion across all active targets.
- **Celebratory Milestone Confetti:** Triggers confetti bursts upon goal completion.

### 5. 📅 Daily Planner & 24-Hour Timeline
- **Visual Timeblocking:** Schedule activities from 06:00 to 23:00.
- **Live "Now Indicator":** Glowing real-time line that moves down the schedule according to the current time of day.
- **Categorized Event Blocks:** Color-coded timeline blocks with duration and notes.
- **One-click Completion:** Mark events completed or clear finished activities.

### 6. 📈 Productivity Analytics (Chart.js)
- **Focus Time Trends:** Daily focus distribution over the last 7 or 30 days.
- **Category Breakdown:** Donut chart illustrating task distribution across Study, Work, Personal, and Other.
- **Completion Velocity:** Bar chart of completed tasks per day.
- **Automated Insights:** Smart performance insights identifying your most productive days and streak milestones.

### 7. ⚙️ Settings, Customization & Data Privacy
- **Sleek Themes:** Toggle seamlessly between Dark Mode and crisp Light Mode.
- **Duration Configuration:** Set custom durations for Focus, Short Breaks, Long Breaks, and Daily Targets.
- **Auto-start Breaks Option:** Automatically launch break timers when focus intervals finish.
- **Sound Alert Toggle & Preview:** Test audio alerts with a single click.
- **Backup & Restore:** Export your entire workspace as a JSON file or restore from a previous backup.
- **Danger Zone:** Secure reset mechanism with verification dialogs.

### 8. ⌨️ Keyboard Shortcuts & Accessibility
- <kbd>Ctrl</kbd> + <kbd>N</kbd> / <kbd>Cmd</kbd> + <kbd>N</kbd>: Quickly open the New Task modal.
- <kbd>Spacebar</kbd>: Start or pause the Pomodoro focus timer.
- <kbd>Escape</kbd>: Dismiss any active modal dialog.
- Accessible ARIA labels and semantic HTML5 hierarchy.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible landmarks, and modal dialogs |
| **CSS3** | Modern design system, custom properties, glassmorphism, flexbox, grid, and animations |
| **Vanilla JavaScript (ES6+)** | Object-oriented state architecture, timer calculation, event handling, and data models |
| **LocalStorage API** | Complete client-side state persistence across browser sessions |
| **Web Audio API** | Harmonic audio synthesis for timer completion chimes |
| **Chart.js (v4.4.1 CDN)** | Interactive productivity line, donut, and bar charts |
| **Canvas Confetti (v1.9.2 CDN)** | Micro-animation particle celebration on task/goal milestones |
| **Font Awesome (v6.5.1 CDN)** | Crisp SVG icons for intuitive visual cues |
| **Google Fonts** | Typography pairings: *Outfit* (headings) & *Plus Jakarta Sans* (body) |

---

## 📁 Folder Structure

```text
focusflow/
│
├── index.html        # Main semantic single-page application structure & modals
├── style.css         # Complete design system, themes (Dark/Light), layout & micro-animations
├── script.js         # Core application logic, state store, timer engine, and Chart.js integration
└── README.md         # Comprehensive documentation, setup guide, and features manual
```

---

## 💻 Installation & How to Run Locally

Because FocusFlow is built using pure client-side web technologies, **no Node.js server, build step, or installation is required**.

### Method 1: Using VS Code Live Server (Recommended)
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** and select the `FocusFlow Productivity & Study Tracker` folder.
3. Install the **Live Server** extension (by *Ritwick Dey*) from the VS Code Marketplace if you haven't already.
4. Right-click `index.html` in the file explorer and select **"Open with Live Server"**.
5. Your default browser will launch FocusFlow automatically at `http://127.0.0.1:5500/index.html`.

### Method 2: Using Any Lightweight HTTP Server
If you prefer running a command from your terminal:
```bash
# Using Python 3:
python -m http.server 8000

# Using Node.js (npx):
npx serve .
```
Then navigate to `http://localhost:8000` or the port shown.

### Method 3: Direct Browser Launch
Simply double-click `index.html` or drag and drop it into Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

---

## 📸 Screenshots & UI Previews

### Executive Dashboard
> *Sleek dark mode dashboard showcasing key statistics, weekly focus trends, daily goals, and motivational quotes.*
```
+-----------------------------------------------------------------------------------+
|  [Logo] FocusFlow    |   [Live Date]   |   [+ New Task]   [Theme: ☀️/🌙]   [User] |
+-----------------------------------------------------------------------------------+
| [Dashboard]        |  Welcome Back, Make Today Count!                             |
| [My Tasks] (3)     |  "Focus is a muscle that grows stronger with practice."     |
| [Focus Timer]      |  [Total Tasks: 4] [Completed: 2] [Focus: 50m] [Streak: 3d]   |
| [Daily Goals]      |  +--------------------------------+ +----------------------+ |
| [Daily Planner]    |  | Weekly Productivity Chart      | | Today's Goals        | |
| [Analytics]        |  +--------------------------------+ +----------------------+ |
| [Settings]         |  | Today's Scheduled Tasks        | | Recent Activity Feed | |
+--------------------+-----------------------------------+--------------------------+
```

### Pomodoro Timer
> *High-contrast circular progress ring with sequence indicator dots and linked task tracking.*

### Task Manager
> *Filter by All, Pending, Completed, Priority, and Category with real-time keyword search.*

---

## 🧪 Testing Checklist

- [x] **Navigation:** Switching between Dashboard, Tasks, Timer, Goals, Planner, Analytics, and Settings without page reload.
- [x] **Task Manager:** Create new task, edit existing task, toggle completion, search by keyword, filter by category/priority, and delete with confirmation.
- [x] **Pomodoro Timer:** Start, pause, resume, skip, and reset. Ring updates smoothly, title bar updates, and audio chime sounds on completion.
- [x] **Daily Goals:** Increment/decrement progress using stepper buttons. Progress bars animate and goals trigger celebration on reaching 100%.
- [x] **Daily Planner:** Add activities with start and end times. Scheduled blocks display on the timeline and current time indicator reflects actual clock time.
- [x] **Charts & Analytics:** Chart.js diagrams render seamlessly in both dark and light modes.
- [x] **Theme Switcher:** Toggling between dark and light themes preserves layout clarity and saves preference.
- [x] **LocalStorage Persistence:** Refreshing the browser preserves all created tasks, history, goals, and settings.
- [x] **Responsiveness:** Validated on mobile (hamburger menu & collapsed drawer), tablet, and desktop viewports.

---

## 🔮 Future Enhancements

- [ ] Ambient background audio generator (Rain, White Noise, Lo-Fi beats, Coffee Shop sounds).
- [ ] Tagging & sub-task checklist support within individual tasks.
- [ ] Cloud sync via Supabase or Firebase for cross-device synchronization.
- [ ] Export summary reports to PDF for weekly study review.
- [ ] Browser Push Notifications for timer alerts when the tab is running in the background.

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

*FocusFlow — Build Better Habits, One Day at a Time.*
