# 🤖 Persona AI – Your Custom AI Chatbot Framework

**Persona AI** is a full-stack AI chatbot framework designed to let you create chatbots that behave like real people — mentors, creators, influencers, or even fictional characters.

The project is split into two main parts:

- **Frontend:** Built using React + TailwindCSS for clean, responsive UI.
- **Backend:** Built with Node.js + Express + Langchain + OpenAI SDKs to handle persona logic, LLM routing, and dynamic prompts.

Whether you’re building an AI version of a real creator (like Hitesh Choudhary or Piyush Garg) or a fictional mentor, **Persona AI** gives you the tools to do it.

---

## 🧠 Features

- Create custom personas using Langchain + OpenAI
- Modular chatbot system (easy to plug in new personas)
- Desi-style prompt engineering (with chain-of-thought)
- Real-time communication
- Full-stack architecture (React + Node.js)

---

## 🚀 Getting Started

Follow the steps below to clone the repo and get everything running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ankitjha209/persona-ai.git
cd persona-ai
```

### 2. Install Dependencies

The project has two main directories:

- `frontend` – for the user interface built in React.
- `backend` – for handling AI persona logic and APIs using Node.js and Express.

You’ll need to install dependencies for both separately.

#### 🖥️ Frontend Setup

```bash
cd frontend
npm install
```
```bash
cd ../backend
npm install
```

### 3. Set Up Environment Variables

You need to create `.env` files in both the `frontend` and `backend` folders to store your environment-specific configurations.

---

#### 📁 Frontend `.env`

Create a `.env` file inside the `backend/` folder:

```env
API_KEY=your_gemini_api_key_here
```

### 4. Run the Project Locally

Once you’ve installed all dependencies and set up your `.env` files, you can run both the frontend and backend servers.

Follow these steps:

---

#### ▶️ Start the Backend Server

In one terminal:

```bash
cd backend
npm run dev
```

--- 

#### 💻 Start the Frontend Server

In a **separate terminal window or tab**, run the following commands:

```bash
cd frontend
npm run dev
```
