# 📸 Instagram Clone

A full-stack Instagram clone with authentication, post creation, and login attempt logging.

**Live Demo:** [Deploy to Render + Netlify](#deployment)

---

## ✨ Features

- ✅ User authentication (register/login)
- ✅ Login attempt logging (audit trail)
- ✅ Create posts with captions and images
- ✅ View feed with all posts
- ✅ Image upload with multer
- ✅ Instagram-style UI with Billabong font
- ✅ SVG Instagram logo
- ✅ Dark theme
- ✅ Responsive design
- ✅ SQLite database persistence

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React 18 + Vite + Tailwind CSS |
| **Backend** | Express.js + better-sqlite3 |
| **Database** | SQLite |
| **File Storage** | Local uploads folder |
| **Authentication** | SHA256 password hashing |

---

## 📁 Project Structure

```
instagram-clone/
├── server/
│   ├── index.js              # Express API server
│   ├── db.js                 # SQLite database setup
│   ├── package.json
│   ├── Procfile              # For Render deployment
│   └── .gitignore
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx     # Login page with SVG logo
│   │   │   └── SignUp.jsx    # Sign up page
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── PostCard.jsx
│   │   ├── assets/
│   │   │   └── instagram-logo.svg
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── index.css
│   ├── netlify.toml          # For Netlify deployment
│   ├── package.json
│   └── .gitignore
├── render.yaml               # Render deployment config
└── README.md
```

---

## 🚀 Quick Start (Local)

### Prerequisites
- Node.js 18+
- npm or yarn

### Terminal 1 - Backend

```bash
cd server
npm install
node index.js
```

Backend runs on `http://localhost:4000`

### Terminal 2 - Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Login user |
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create new post |
| GET | `/api/login-attempts` | View all login attempts |
| GET | `/api/health` | Health check |

---

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT,
  created_at INTEGER
)
```

### Posts Table
```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  caption TEXT,
  image_url TEXT,
  created_at INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
)
```

### Login Attempts Table
```sql
CREATE TABLE login_attempts (
  id INTEGER PRIMARY KEY,
  email TEXT,
  password TEXT,
  status TEXT,
  attempted_at INTEGER
)
```

---

## 🌐 Deployment

### Deploy Backend to Render

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && node index.js`
5. Add environment variables:
   - `PORT=4000`
   - `NODE_ENV=production`
6. Deploy

### Deploy Frontend to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Import existing project
3. Configure:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add environment variable:
   - `VITE_API_BASE=https://your-backend-url.onrender.com`
5. Deploy

### Get Custom Domain (Optional)

1. Buy domain from [namecheap.com](https://namecheap.com)
2. Connect to Netlify in Domain settings
3. Update DNS records

---

## 📊 Testing

### Test Login Attempts Endpoint

```bash
curl https://your-backend-url/api/login-attempts
```

### Test Health Check

```bash
curl https://your-backend-url/api/health
```

---

## 🔐 Authentication

- Passwords are hashed using SHA256
- Tokens generated using crypto.randomBytes
- All login attempts (valid and invalid) are logged
- Session stored in localStorage

---

## 📦 Environment Variables

### Backend
```
PORT=4000
NODE_ENV=production
```

### Frontend
```
VITE_API_BASE=https://your-backend-url.onrender.com
```

---

## 💡 Key Features Explained

### Login Attempt Logging
Every login attempt (successful or failed) is logged to the database with:
- Email used
- Password entered
- Status (success/failed)
- Timestamp

### Image Upload
- Uses multer for file handling
- Stores images in `server/uploads/`
- Supports JPG, PNG, GIF formats

### Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Works on all screen sizes

---

## 🎨 Design

- **Logo:** Billabong font (classic Instagram style)
- **SVG Logo:** Professional Instagram logo
- **Theme:** Dark mode
- **Colors:** Instagram brand colors
- **Layout:** Instagram-inspired UI

---

## 📝 Notes

- Database (`posts.db`) is created automatically on first run
- Uploaded images stored in `server/uploads/`
- CORS enabled for development
- Free tier sufficient for testing
- No credit card required for free deployments

---

## 🐛 Troubleshooting

### Backend won't start
- Check if port 4000 is in use
- Verify Node.js version (18+)
- Check database permissions

### Frontend can't connect to backend
- Verify `VITE_API_BASE` environment variable
- Check backend is running
- Check CORS settings

### Images not uploading
- Check `server/uploads/` folder exists
- Verify file permissions
- Check backend logs

---

## 📚 Documentation

- `QUICK_DEPLOY.md` - Step-by-step deployment guide
- `DEPLOY_COMMANDS.md` - Copy-paste deployment commands
- `FIX_RENDER_DEPLOY.md` - Fix for Render deployment errors
- `API_DOCUMENTATION.md` - Detailed API documentation

---

## 📄 License

MIT

---

## 👨‍💻 Author

Built with ❤️ as a full-stack Instagram clone

---

**Ready to deploy?** Follow the [Deployment](#-deployment) section above! 🚀
