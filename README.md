🎬 Movie Review App

A responsive movie review application built with React JS and Tailwind CSS. The application allows users to browse movies, search and filter them, view detailed movie information, and rate movies using a star-based rating system.

🚀 Features

🎥 Browse a list of movies

🔍 Search movies by title

🎯 Filter movies by genre, year, or rating

📄 View detailed movie information

⭐ Rate movies using a 1–5 star rating system

📊 Display movie ratings

📱 Responsive design for desktop, tablet, and mobile

⚡ React Hooks for state management

🎨 Styled using Tailwind CSS

🛠️ Tech Stack

React JS

Tailwind CSS

React Hooks

JavaScript

OMDb API / Mock JSON Data

📂 Project Structure
movie-review/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── README.md

⚙️ Installation
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project directory
cd movie-review

3. Install dependencies
npm install

4. Start the development server
npm run dev


The application will be available at the local development URL shown in your terminal.

🔑 API Configuration

If you are using the OMDb API, create a .env file in the root directory:

VITE_OMDB_API_KEY=your_api_key


Then access the API key in your React application:

import.meta.env.VITE_OMDB_API_KEY


⚠️ Note: Never commit your .env file or API key to GitHub.

⭐ Rating System

Users can rate movies from 1 to 5 stars.

The application provides visual feedback when a user selects a rating and displays the rating associated with each movie.

🔍 Search & Filter

Users can:

Search movies by title

Filter movies by genre

Filter movies by release year

Filter movies based on rating

These features make it easier for users to discover and browse movies.

📱 Responsive Design

The application is designed to work across different screen sizes:

💻 Desktop

📱 Mobile

📟 Tablet

Tailwind CSS utility classes are used to create the responsive layout.

🌐 Deployment

The application can be deployed using Netlify.

Build the project
npm run build


The generated production files can then be deployed to Netlify.

🔗 Links

Live Demo: Add your Netlify URL here

GitHub Repository: Add your GitHub URL here

📸 Screenshots

Add screenshots of your application to showcase the UI.

Example:

![Movie Review App](./screenshots/home.png)

📄 License

This project was created as a frontend development project for learning and assessment purposes.

===========================================================================
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```