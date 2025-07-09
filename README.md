<p align="center">
  <img src="https://i.postimg.cc/ZRT3mwn4/Pingsy-Logo.png" alt="Pingsy Logo" width="100"/>
</p>

<h1 align="center">Pingsy</h1>

<p align="center">
  <a href="https://pingsy.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render Badge" align="center"/>
  </a>
</p>


## Description

Pingsy is a real-time communication and social application. It allows users to connect with friends, engage in chat conversations, and potentially make calls. The application features user authentication, friend management, notifications, and real-time chat functionalities.

## Technologies Used

**Frontend:**

*   React
*   Vite
*   Tailwind CSS
*   ESLint
*   PostCSS
*   Axios

**Backend:**

*   Node.js
*   Express
*   MongoDB (on `backend/src/lib/db.js`)
*   [Stream API](https://getstream.io/) - for chat and video calling functionality

## Installation

1.  **Clone the repository:**

    
```
    git clone https://github.com/Optimized-Brain/Pingsy-Video-Calling-Realtime-Chat-App.git
    cd Pingsy-Video-Calling-Realtime-Chat-App
```
2.  **Install backend dependencies:**
```
    cd backend
    npm install
```
3.  **Install frontend dependencies:**
```
    cd ../frontend
    npm install 
```
## How to Run

1.  **Set up the backend:**

    *   Navigate to the `backend` directory.
    *   Set up your MongoDB database and update the connection string in `backend/src/lib/db.js`.
    *   Start the backend server:
```
        npm start     
```
2.  **Run the frontend:**

    *   Navigate to the `frontend` directory.
    *   Start the frontend development server:
```
        npm run dev 
```
3.  Open your web browser and visit the address provided by the Vite development server (`http://localhost:5173`).

## Project Structure

The project is structured into two main directories: `backend` and `frontend`.

*   `backend`: Contains the server-side code, including API routes, controllers, models, middleware, and database connection logic.
*   `frontend`: Contains the client-side code, including React components, pages, hooks, utility functions, and styling.

## Features]

*   User Authentication (Sign Up, Login, Logout)
*   Friend Management (Sending/Accepting Friend Requests)
*   Real-time Chat
*   Notifications
*   User Profiles
*   Theming (multiple themes mode based on `ThemeSelector.jsx` and `useThemeStore.js`)
*   Voice/Video Calls (`CallButton.jsx`, `CallPage.jsx`)



