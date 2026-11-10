# AI First CRM

## Project Overview

AI First CRM is a Healthcare Professional (HCP) interaction management system built using React, FastAPI, SQLite, SQLAlchemy, and LangGraph. The application allows users to record doctor interactions, generate AI-powered summaries using Google's Gemini API, and store interaction history.

---

## Features

- Save doctor interactions
- View saved interaction history
- Generate AI summaries using Gemini AI
- FastAPI REST API
- SQLite database
- React frontend
- LangGraph integration

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite
- LangGraph
- LangChain
- Google Gemini API

---

## Project Structure

AI-First-CRM

├── backend

│ ├── app

│ │ ├── ai

│ │ ├── routers

│ │ ├── database.py

│ │ ├── models.py

│ │ ├── schemas.py

│ │ └── main.py

│ ├── .env

│ └── requirements.txt

│

├── frontend

│ ├── src

│ ├── package.json

│ └── App.jsx

│

└── README.md

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI-First-CRM-Project.git

cd AI-First-CRM-Project
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file:

```
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

Start Backend

```bash
python -m uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## API Endpoints

### Get Interactions

```
GET /interactions/
```

### Save Interaction

```
POST /interactions/
```

### Generate AI Summary

```
POST /ai/summary
```

---

## Database

SQLite

Database contains:

- Doctor Name
- Hospital
- Interaction Type
- Notes

---

## AI Integration

The project uses

- LangGraph
- LangChain
- Google Gemini API

for generating intelligent summaries from doctor's interaction notes.

---

## Screenshots

- Home Page
- Save Interaction
- AI Summary
- Saved Interaction Table

---

## Future Improvements

- Authentication
- User Login
- Dashboard Analytics
- Export PDF
- Advanced AI Recommendations
- Search & Filter
- Cloud Database

---

## Author

Mohit Raj

B.Tech CSE

Full Stack Developer