const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const crypto = require('crypto');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
    cb(null, name);
  }
});
const upload = multer({ storage });

app.use('/uploads', express.static(UPLOAD_DIR));

// Helper function to hash passwords
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Generate simple JWT-like token
function generateToken(userId) {
  return crypto.randomBytes(32).toString('hex');
}

// Register endpoint
app.post('/api/register', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password required' });
    }
    const hashedPassword = hashPassword(password);
    const stmt = db.prepare('INSERT INTO users (email, password, created_at) VALUES (?, ?, ?)');
    const info = stmt.run(email, hashedPassword, Date.now());
    const user = { id: info.lastInsertRowid, email };
    const token = generateToken(user.id);
    res.json({ success: true, user, token });
  } catch (err) {
    if (err.message.includes('UNIQUE')) {
      res.status(400).json({ success: false, error: 'Email already exists' });
    } else {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }
});

// Login endpoint
app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password required' });
    }
    
    const hashedPassword = hashPassword(password);
    const user = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?').get(email, hashedPassword);
    
    // Save login attempt (valid or invalid)
    const attemptStmt = db.prepare('INSERT INTO login_attempts (email, password, status, attempted_at) VALUES (?, ?, ?, ?)');
    const status = user ? 'success' : 'failed';
    attemptStmt.run(email, password, status, Date.now());
    
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }
    const token = generateToken(user.id);
    res.json({ success: true, user: { id: user.id, email: user.email }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/posts', upload.single('image'), (req, res) => {
  try {
    const caption = req.body.caption || '';
    const image_path = req.file ? `/uploads/${req.file.filename}` : null;
    const created_at = Date.now();
    const stmt = db.prepare('INSERT INTO posts (caption, image_path, created_at) VALUES (?, ?, ?)');
    const info = stmt.run(caption, image_path, created_at);
    const post = { id: info.lastInsertRowid, caption, image_path, created_at };
    res.json({ success: true, post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/posts', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
    res.json({ success: true, posts: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all login attempts (for debugging/admin)
app.get('/api/login-attempts', (req, res) => {
  try {
    const attempts = db.prepare('SELECT * FROM login_attempts ORDER BY attempted_at DESC').all();
    res.json({ success: true, attempts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
