# Instagram Clone — Full Stack

A minimal Instagram-like clone using React frontend + Express backend + SQLite.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Express + better-sqlite3 + multer
- **Storage:** SQLite file + local uploads folder

## Project Structure

```
instagram-clone/
├── server/
│   ├── index.js
│   ├── db.js
│   ├── package.json
│   └── README.md
├── client/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api.js
│       ├── index.css
│       └── components/
│           ├── Header.jsx
│           ├── CreatePost.jsx
│           └── PostCard.jsx
└── README.md
```

## Quick Start

### Terminal 1 - Server

```bash
cd server
npm install
node index.js
```

Server runs on `http://localhost:4000`

### Terminal 2 - Client

```bash
cd client
npm install
npm run dev
```

Client runs on `http://localhost:5173`

## Features

- Create posts with caption and image
- View all posts in reverse chronological order
- Image upload with multer
- SQLite persistence
- Tailwind CSS styling

## Notes

- The server automatically creates `posts.db` on first run
- Uploaded images are stored in `server/uploads/`
- CORS is enabled for local development
