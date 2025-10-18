# 🐦 TweetCopilot.ai: AI-Powered full-stack web application

## ✨ Overview

**TweetCopilot.ai** is a modern, full-stack web application that leverages advanced LLM orchestration to instantly generate creative, professional, and context-aware tweets. This project showcases a robust, containerized architecture using Python for the AI-heavy backend and React for the dynamic frontend.

## 🚀 Features

  * **Secure Authentication:** User registration, sign-in, and profile management handled by **Clerk**.
  * **Protected Routing:** Ensures pages like the main generator (`/tweetcopilot`) are only accessible to authenticated users.
  * **Intelligent Content Generation:** Utilizes a complex **LangGraph** state machine for multi-step AI reasoning.
  * **High-Performance API:** Fast, asynchronous API service built with **FastAPI**.
  * **Scalable Deployment:** Entire stack containerized with **Docker** and deployed on **Render**.
  * **Responsive UI:** A clean, mobile-friendly interface built with **React** and **Tailwind CSS**.

-----

## ⚙️ Technology Stack

This project is built on a modern, decoupled architecture:

### Frontend

| Technology | Description |
| :--- | :--- |
| **React** | Core library for building the user interface. |
| **Vite** | Blazing-fast build tool and development server. |
| **Tailwind CSS** | Utility-first framework for rapid and responsive styling. |
| **Clerk** | Secure and integrated authentication and user management. |
| **React Router DOM** | Handles client-side navigation between pages. |

### Backend (AI Service)

| Technology | Description |
| :--- | :--- |
| **FastAPI** | High-performance, asynchronous Python web framework for the API. |
| **Pydantic** | Data validation and serialization for clear, type-hinted API contracts. |
| **LangChain** | Framework for developing applications powered by large language models. |
| **LangGraph** | Tool for building robust, stateful LLM applications (the "brain" of the tweet generation). |

### Infrastructure

| Technology | Description |
| :--- | :--- |
| **Docker** | Containerization for consistent and reproducible environment setup. |
| **Render** | Cloud platform used for production deployment and hosting. |

-----

## 🛠️ Local Development Setup

Follow these steps to get a copy of the project running on your local machine.

### Prerequisites

  * Node.js (v18+) & npm
  * Python (v3.10+)
  * Docker (Optional, but recommended for the backend)
  * A **Clerk** account (for authentication keys)
  * An **OpenAI** API Key (for the AI services)

### 1\. Clone the Repository

```bash
git clone https://github.com/Warishayat/TweetCopilot.ai.git
cd TweetCopilot.ai
```

### 2\. Configure Environment Variables

You will need to create separate `.env` files for the Frontend and Backend directories.

#### 📁 Frontend (`./frontend/.env`)

The Publishable Key is required for Clerk to initialize in the browser.

```env
# FRONTEND/.env

# Get this from your Clerk Dashboard (pk_test_...)
VITE_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
```

#### 📁 Backend (`./backend/.env`)

The Secret Key and OpenAI Key are sensitive and must be kept private.

```env
# BACKEND/.env

# Get this from your Clerk Dashboard (sk_test_...)
CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"

# Get this from your OpenAI developer dashboard
OPENAI_API_KEY="YOUR_OPENAI_KEY"
```

### 3\. Run the Backend Service

Navigate to the backend directory and install dependencies:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The FastAPI service should now be running at `http://localhost:8000`.

### 4\. Run the Frontend Application

Open a new terminal, navigate to the frontend directory, and start the development server:

```bash
cd ../frontend
npm install
npm run dev
```

The React application will be available at `http://localhost:5173/`.

-----

## 🔑 Authentication Details

This project uses Clerk's powerful components for authentication:

  * **`ClerkProvider`**: Initialized in `src/main.jsx` to wrap the entire app.
  * **`SignedIn` / `SignedOut`**: Used in `src/components/Navbar.jsx` to conditionally render the `UserButton` or `SignInButton`.
  * **`ProtectedRoute`**: A custom wrapper component in `src/App.jsx` that guards pages against unauthorized access using `<RedirectToSignIn />`.

-----

## 🚀 Deployment

The recommended deployment strategy uses **Docker** to containerize both the Frontend and Backend for reliable scaling on services like **Render**.

1.  **Dockerization:** The repository includes a `Dockerfile` for the FastAPI backend, ensuring the environment is isolated and consistent.
2.  **Render Configuration:** Configure two separate services on Render:
      * **Web Service (Backend):** Deployed from the Docker image. Set **Production Environment Variables** for `CLERK_SECRET_KEY` and `OPENAI_API_KEY`.
      * **Static Site (Frontend):** Deployed from the built React assets. Set the **Production Environment Variable** for `VITE_CLERK_PUBLISHABLE_KEY`.

-----

## 🤝 Contributing

We welcome contributions, bug reports, and feature suggestions\!

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

-----

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

