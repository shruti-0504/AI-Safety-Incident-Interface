# 🛡️ AI Safety Incident Dashboard

This is a web-based dashboard for reporting and visualizing AI safety-related incidents. It allows users to filter, sort, and view incidents based on severity, report new incidents, and toggle between light and dark themes.

## 🔧 Project Structure

📁 project-root/
├── index.html # Main HTML layout
├── styles.css # Styling for the dashboard and dark mode
├── script.ts # TypeScript for logic, filtering, reporting, and dark mode toggle
└── README.md # Project overview and instructions



---

## ✨ Features

- ✅ View reported AI safety incidents
- 🎯 Filter incidents by severity: `Low`, `Medium`, `High`
- 📅 Sort incidents by newest or oldest
- 📝 Submit new incident reports
- 🌙 Toggle between Light and Dark mode
- ⚡ Built with vanilla HTML, CSS, and TypeScript

---

## 🚀 Getting Started

### Prerequisites

- You need a local development environment or a browser that can run TypeScript-transpiled JavaScript.
- Install [TypeScript](https://www.typescriptlang.org/) if you want to modify and compile `script.ts`.

```bash
npm install -g typescript
```
Run the App
Compile the TypeScript:
```bash
tsc script.ts
```
This will generate a script.js file.

Open index.html in your browser.


📂 Usage Guide
Click "Report New Incident" to open the form and submit new incidents.

Use filter buttons to narrow down incidents by severity.

Use sort buttons to switch between newest and oldest incident view.

📁 Future Improvements
Store incident data using localStorage or a backend

Add pagination for large datasets

Improve form validation

Export incident data (CSV/JSON)

🧠 Inspiration
This project helps raise awareness about the importance of AI safety and provides a practical tool to track real-world issues in a structured format.


