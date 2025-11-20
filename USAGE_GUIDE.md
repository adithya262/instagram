# Instagram Clone - Usage Guide

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Two terminal windows

### Step 1: Start the Backend Server

```bash
cd c:\Users\Aditya\instagram-clone\server
npm install
node index.js
```

**Expected Output**:
```
Server listening on http://localhost:4000
```

### Step 2: Start the Frontend Client

```bash
cd c:\Users\Aditya\instagram-clone\client
npm install
npm run dev
```

**Expected Output**:
```
VITE v5.4.21  ready in 391 ms
➜  Local:   http://localhost:5173/
```

### Step 3: Open in Browser

Navigate to: **http://localhost:5173**

---

## 📱 User Flow

### First Time User (Sign Up)

1. **Click "Sign up"** link on login page
2. **Enter email** (e.g., `user@example.com`)
3. **Enter password** (minimum 6 characters)
4. **Confirm password**
5. **Click "Sign up"** button
6. ✅ Account created and stored in database
7. ✅ Automatically logged in

### Returning User (Login)

1. **Enter email** (e.g., `user@example.com`)
2. **Enter password**
3. **Click "Log in"** button
4. ✅ Credentials verified against database
5. ✅ Session token created and stored in browser
6. ✅ Redirected to feed

---

## 📝 Create Posts

Once logged in:

1. **Write caption** in the text area
2. **Click file input** to upload image (optional)
3. **Click "Post"** button
4. ✅ Post saved to database with user_id
5. ✅ Post appears at top of feed

---

## 🔐 Database Storage

### What Gets Stored

#### User Registration
```
Email: test@example.com
Password: [SHA256 hashed]
Created At: [timestamp]
```

#### User Login
```
Email: test@example.com
Password: [SHA256 hashed - verified]
Token: [generated for session]
```

#### Posts
```
User ID: [linked to user]
Caption: [post text]
Image: [stored in /server/uploads/]
Created At: [timestamp]
```

---

## 🛠️ Troubleshooting

### Port Already in Use
If you get `EADDRINUSE: address already in use :::4000`:
```bash
Get-Process -Name node | Stop-Process -Force
```

### Database Issues
To reset the database:
```bash
rm c:\Users\Aditya\instagram-clone\server\posts.db
```
Then restart the server - it will create a fresh database.

### Clear Browser Session
To logout and clear session:
1. Click **"Logout"** button in header
2. Or manually clear localStorage in browser DevTools

---

## 📊 Database Files

- **Location**: `c:\Users\Aditya\instagram-clone\server\posts.db`
- **Type**: SQLite 3
- **Tables**: `users`, `posts`
- **Auto-created**: On first server run

---

## 🔗 API Endpoints

### Authentication
- `POST /api/register` - Create new user
- `POST /api/login` - Login user

### Posts
- `GET /api/posts` - Fetch all posts
- `POST /api/posts` - Create new post (with image upload)

### Health
- `GET /api/health` - Server status check

---

## 💾 Data Persistence

✅ **Persistent Storage**:
- User credentials stored in SQLite database
- Posts stored with user_id reference
- Images stored in `/server/uploads/` folder
- Session tokens stored in browser localStorage

✅ **Survives**:
- Browser refresh
- Browser close and reopen
- Server restart (data remains in database)

❌ **Cleared on**:
- User logout
- Browser localStorage clear
- Database deletion

---

## 🎨 Features

### Login Page
- Dark theme (Instagram-style)
- Email/password input
- Sign up link
- Forgot password link
- Facebook login placeholder

### Feed Page
- Create post form
- Image upload preview
- Post list (newest first)
- User info display
- Logout button

### Security
- Password hashing (SHA256)
- Token-based sessions
- Email uniqueness validation
- Input validation

---

## 📱 Test Accounts

After running the app, you can create test accounts:

**Example 1**:
- Email: `user1@example.com`
- Password: `password123`

**Example 2**:
- Email: `user2@example.com`
- Password: `securepass456`

Each account is independent and can only see posts from all users.

---

## 🚀 Next Steps

1. ✅ Test signup with new email
2. ✅ Test login with same credentials
3. ✅ Create a post with caption and image
4. ✅ Logout and login again
5. ✅ Verify post is still there
6. ✅ Check database file size increased

---

**Ready to use!** 🎉
