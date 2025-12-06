# Movie Search App with Appwrite

A **movie search application** that tracks trending searches using **Appwrite TablesDB**, fetches movie data from an external API, and displays results in a Tailwind CSS-styled UI.

The app uses **SQL-backed tables** in Appwrite and implements **debounced search** to optimize API calls.

---

## Features

- Fetch movies from an external API (TMDb or similar).
- Track trending searches in Appwrite TablesDB.
- Debounced search input to reduce unnecessary API calls.
- Fully responsive UI styled with **Tailwind CSS**.
- SQL-backed Appwrite Tables for structured data.
- No authentication or storage required.

---

## Prerequisites

- Node.js >= 18
- NPM or Yarn
- Appwrite Cloud Project:
  - Project ID
  - Database ID
  - Table ID for trending movies
