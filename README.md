# Nayara AI – Breast Cancer Support Companion (Frontend Assignment)

This project simulates a responsive web app designed to support breast cancer patients, with two main interfaces:
1. A compassionate AI chat companion for patients
2. A dashboard for medical staff to track patient mood, symptoms, and care tasks

---

## 🧠 Product Thinking

**Target user**: A recently diagnosed breast cancer patient who may feel anxious, overwhelmed, or isolated, and needs gentle emotional support.

**Design principles**:
- Clean and friendly UI, no clinical coldness
- Fast response and intuitive input
- Emphasis on emotional experience (mood, empathy, follow-up)

---

## 🛠 Tech Stack

- **React 18** (with Vite)
- **TypeScript**
- **TailwindCSS** (for fast responsive styling)
- **Zustand** (lightweight state management)
- **React Router** (SPA structure)
- No external backend – AI replies are simulated.

---

## ✨ Features

### 💬 AI Chat Interface
- Clean chat UI, similar to WhatsApp
- Smart auto-responses based on message intent (e.g., fatigue, pain, loneliness)
- "AI is typing..." animation
- Enter key support for message sending

### 🩺 Patient Dashboard (for caregivers)
- Daily mood tracker (emoji-based)
- Symptom checklist (selectable)
- Care task list (interactive to-do)
- Mock notification at top

### 📱 Responsive Design
- Fully responsive from mobile to desktop
- Tailwind breakpoints used throughout

---

## 🧩 Architecture

**Feature-based folder structure:**
-  Feature-based folder structure
```
src/
  features/
    chat/
    dashboard/
  app/                # Routing & layout
  components/         # (Reserved for reusable UI)
  utils/              # Helper hooks and logic
  types/              # (Reserved for global types)
```


- Global state is split into:
- `chatStore` (manages messages and AI typing)
- `dashboardStore` (mood, symptoms, tasks)

---

## 🚀 Setup Instructions

```bash
npm install
npm run dev

App will run at: http://localhost:5173/



🤔 what i would add with more time...
connection to API or MCP to use a real AI model for the chat

Improve accessibility (ARIA roles, keyboard nav)

Save dashboard state to backend/localStorage

Add animations (e.g. chat bubbles fade in)

Personalize add avatars, user details and theming 

✅ Assumptions
Chat does not persist across sessions
No authentication layer (open access for demo)
All patient data is mocked locally

❤️ Final Note
Developing a solution that makes a difference in people’s healthcare is a privilege to me.
I truely enjoyed building this app.
