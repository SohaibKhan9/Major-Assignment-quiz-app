# 🧠 MindSpark Tech - Dynamic Quiz App

A modern, responsive, and dynamic quiz application that generates technical questions on the fly. Built with Vanilla JavaScript, Tailwind CSS, and the QuizAPI.io API, this app allows users to test their knowledge on various tech topics like Linux, Docker, SQL, and DevOps.

## ✨ Features

* **Dynamic Quiz Generation**: Fetches live questions based on user-selected topics and difficulty levels.
* **Difficulty Selection**: Choose between Easy, Medium, and Hard modes.
* **Interactive UI**:
    * Real-time progress bar.
    * Immediate feedback with explanations for answers.
    * Smooth animations (fade-ins, slide-ups) using CSS and Tailwind.
* **Results Dashboard**: Displays final score, accuracy percentage, and a detailed question-by-question review.
* **Robust Error Handling**: Dedicated error pages for API failures or missing data.
* **Responsive Design**: Fully responsive layout optimized for mobile and desktop using Tailwind CSS.

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (ES6+ Modules).
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN) & Custom CSS.
* **Icons**: [Lucide Icons](https://lucide.dev/) (via CDN).
* **API**: [QuizAPI.io](https://quizapi.io/) (for fetching tech questions).
* **State Management**: `sessionStorage` is used to persist quiz state and results across pages.

## 📂 Project Structure

```text
Quiz App/
├── index.html            # Landing page (Topic & Difficulty selection)
├── quiz.html             # Main quiz interface
├── results.html          # Score and review page
├── error.html            # Error handling page
├── shared/               # Shared resources
│   ├── api.js            # API fetching logic
│   └── global.css        # Global styles and animations
├── home/                 # Home page specific assets
│   ├── home.css
│   └── home.js
├── quiz/                 # Quiz page specific assets
│   ├── quiz.css
│   └── quiz.js
├── results/              # Results page specific assets
│   ├── results.css
│   └── results.js
└── error/                # Error page specific assets
    ├── error.css
    └── error.js
