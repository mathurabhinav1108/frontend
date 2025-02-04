# Data Project

## Overview
This project is a full-stack web application built with FastAPI for the backend and React for the frontend. It features authentication, real-time data visualization, and CRUD operations on stored data. The frontend is deployed on a free hosting platform like Vercel or Netlify.

## Tech Stack
- **Frontend:** React, TailwindCSS, Redux/Zustand (for state management), Chart.js, React Router
- **Backend:** FastAPI, Python
- **Database:** CSV file for data storage
- **Deployment:** Vercel/Netlify (Frontend), Railway/Render/Heroku (Backend)

## Features
### Authentication
- Users can log in with a username and password.
- Session token is stored using a state management library (e.g., Redux or Zustand for React).
- Unauthenticated users cannot access application pages.

### Main Application
- **Dark Theme UI** for an enhanced user experience.
- **Interactive Plot:** Real-time streamed random numbers displayed using Chart.js.
- **Dynamic Table:** Paginated, sortable table displaying stored numbers and records.
- **CRUD Interface:** Users can create, read, update, and delete entries in `backend_table.csv`.

### Additional Functionalities
- **Dynamic Updates:** Real-time data streaming updates the plot and table dynamically.
- **Error Handling:** Errors are displayed for failed logins, unauthorized actions, or conflicting CRUD operations.
- **Session Persistence:** User sessions are maintained using `localStorage` or `sessionStorage`.
- **Concurrency Handling:** Users are informed of conflicting or pending operations during simultaneous CRUD actions.
- **Recovery UI:** Provides an option to restore data from the most recent backup file.

## Project Structure
```
/data_project
├── src
│   ├── Pages
│   │   ├── Home
│   │   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   ├── Numbers.js
│   │   ├── FileReading.js
│   ├── components
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── store (Redux/Zustand state management)
│
├── public
├── package.json
├── tailwind.config.js
├── README.md
```

## Installation and Setup
### Prerequisites
- Node.js and npm installed
- Python installed

### Backend Setup
```sh
# Clone the repository
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```sh
# Navigate to frontend
cd frontend
npm install
npm run dev
```

## Deployment
- The frontend is deployed on **Vercel** or **Netlify**.
- The backend is deployed on **Railway, Render, or Heroku**.

## Routes
| Path | Component |
|------|----------|
| `/` | Dashboard |
| `/login` | Login Page |
| `/random-numbers` | Real-time Numbers Plot |
| `/excel` | File Reading Component |

## Contributing
Feel free to submit issues or pull requests to improve the project!

## License
MIT License

