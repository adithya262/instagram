# Instagram Clone - API Documentation

## Base URL
```
http://localhost:4000
```

---

## Authentication Endpoints

### 1. Register User
**POST** `/api/register`

Create a new user account.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com"
  },
  "token": "4b2fded4272a639c3a06c25b89e091a1963a4c7bc85ee92f44c501776724067"
}
```

**Error (400 Bad Request)**:
```json
{
  "success": false,
  "error": "Email already exists"
}
```

---

### 2. Login User
**POST** `/api/login`

Authenticate user with email and password.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK - Valid Credentials)**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com"
  },
  "token": "1301cf3de880a94e8bab3d3cc99f7564d1db8e3676dad6a9c1a3d923871136"
}
```

**Response (401 Unauthorized - Invalid Credentials)**:
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

**Note**: All login attempts (valid and invalid) are logged to the database.

---

## Post Endpoints

### 3. Get All Posts
**GET** `/api/posts`

Retrieve all posts ordered by newest first.

**Response (200 OK)**:
```json
{
  "success": true,
  "posts": [
    {
      "id": 1,
      "user_id": 1,
      "caption": "Beautiful sunset!",
      "image_path": "/uploads/1234567890-987654321.jpg",
      "created_at": 1763615555336
    },
    {
      "id": 2,
      "user_id": 1,
      "caption": "Coffee time",
      "image_path": null,
      "created_at": 1763615540000
    }
  ]
}
```

---

### 4. Create Post
**POST** `/api/posts`

Create a new post with optional image upload.

**Request** (multipart/form-data):
- `caption` (string) - Post caption text
- `image` (file, optional) - Image file

**Response (200 OK)**:
```json
{
  "success": true,
  "post": {
    "id": 3,
    "caption": "New post!",
    "image_path": "/uploads/1763615600000-123456789.jpg",
    "created_at": 1763615600000
  }
}
```

**Error (500 Server Error)**:
```json
{
  "success": false,
  "error": "Error message"
}
```

---

## Admin/Debug Endpoints

### 5. Get Login Attempts
**GET** `/api/login-attempts`

Retrieve all login attempts (successful and failed).

**Response (200 OK)**:
```json
{
  "success": true,
  "attempts": [
    {
      "id": 3,
      "email": "hacker@evil.com",
      "password": "123456",
      "status": "failed",
      "attempted_at": 1763615570766
    },
    {
      "id": 2,
      "email": "test@example.com",
      "password": "wrongpassword",
      "status": "failed",
      "attempted_at": 1763615559764
    },
    {
      "id": 1,
      "email": "test@example.com",
      "password": "password123",
      "status": "success",
      "attempted_at": 1763615555336
    }
  ]
}
```

---

### 6. Health Check
**GET** `/api/health`

Check if server is running.

**Response (200 OK)**:
```json
{
  "ok": true
}
```

---

## Database Tables

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at INTEGER
);
```

### Posts Table
```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  caption TEXT,
  image_path TEXT,
  created_at INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Login Attempts Table
```sql
CREATE TABLE login_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  status TEXT NOT NULL,
  attempted_at INTEGER
);
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request (missing fields, duplicate email) |
| 401 | Unauthorized (invalid credentials) |
| 500 | Server Error |

---

## Authentication Flow

1. **User Registration**
   - POST `/api/register` with email & password
   - Password hashed with SHA256
   - User stored in database
   - Token generated and returned

2. **User Login**
   - POST `/api/login` with email & password
   - **All attempts logged** (success or failed)
   - Password verified against hash
   - If valid: token returned
   - If invalid: error returned

3. **Session Management**
   - Token stored in browser localStorage
   - Token used for session persistence
   - Logout clears token from localStorage

---

## Usage Examples

### Register New User
```bash
curl -X POST http://localhost:4000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'
```

### Login
```bash
curl -X POST http://localhost:4000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'
```

### Get All Posts
```bash
curl http://localhost:4000/api/posts
```

### Create Post with Image
```bash
curl -X POST http://localhost:4000/api/posts \
  -F "caption=My post" \
  -F "image=@/path/to/image.jpg"
```

### View Login Attempts
```bash
curl http://localhost:4000/api/login-attempts
```

---

## Notes

- All passwords are hashed with SHA256 before storage
- Login attempts are stored with plain password for audit purposes
- Timestamps are in milliseconds (Unix epoch)
- Images are stored in `/server/uploads/` directory
- Database file: `/server/posts.db`
