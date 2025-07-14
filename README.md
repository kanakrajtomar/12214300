#  Frontend Assignment – Roll No: 12214300

This repository contains the solution for the frontend track of the technical evaluation. The project is a **React (TypeScript)** application for a URL Shortener tool that integrates a **custom reusable logging middleware** to capture important application events and errors.

---

## Tech Stack

- React (TypeScript)
- Native CSS (Material UI usage optional)
- ES Modules
- Custom Logging Middleware
- Fetch API for server communication

---

##  Folder Structure

12214300/
├── Logging Middleware/
│ └── logger.ts # Custom reusable logger function
├── frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── URLForm.tsx # Component to handle shortening form
│ │ │ └── URLStats.tsx # Component to display URL stats
│ │ ├── pages/
│ │ │ ├── Home.tsx # Main page for URL shortening
│ │ │ └── Stats.tsx # Stats and analytics view
│ │ ├── services/
│ │ │ ├── api.ts # API integration logic
│ │ │ └── logger.ts # Logging logic for reusable use
│ │ ├── App.tsx # App component with routing
│ │ ├── index.tsx # Application entry point
│ │ ├── reportWebVitals.ts
│ │ ├── setupTests.ts
│ │ └── react-app-env.d.ts
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── tsconfig.json


---

##  Features

- Shorten multiple URLs concurrently (up to 5 at a time)
- Optional custom shortcode input
- Optional expiration time input (defaults to 30 minutes)
- Client-side validation of inputs
- Logs all key actions and errors via custom middleware
- Displays click analytics (location, timestamp, source)

---

##  Design Decisions

- **Logger Abstraction**: Created a reusable function (`logEvent`) to send structured log events to the test server.
- **Code Splitting**: Split components by function – form logic and analytics display handled separately.
- **Types First**: Fully typed codebase using TypeScript to improve maintainability and developer experience.
- **Material UI or CSS**: Styling supports either Material UI or pure CSS as per allowed constraints.

---

## Testing and Output

- App is designed to run on: `http://localhost:3000`
- Screenshots for mobile and desktop views are included in the submission.
- Logs are pushed in real-time via the protected test API.
- Console logs have been **disabled** as per the requirements.

---

## How to Run the Project

# Step 1: Clone the repository
git clone https://github.com/yourusername/12214300.git

# Step 2: Navigate to frontend folder
cd 12214300/frontend

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev

Logging Token & API Note
All API calls to the log endpoint (/logs) are authenticated using a protected bearer token. The token is securely used within the logger and is not exposed elsewhere in the code.

Roll No: 12214300

Logger and frontend have been kept in separate folders as instructed.
