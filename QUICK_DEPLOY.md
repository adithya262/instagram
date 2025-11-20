# Quick Deployment Guide - Instagram Clone

## 🚀 Deploy in 10 Minutes

### **Prerequisites:**
- GitHub account
- Render account (free)
- Netlify account (free)

---

## **STEP 1: Push to GitHub**

```powershell
cd c:\Users\Aditya\instagram-clone
git init
git add .
git commit -m "Initial commit - Instagram clone"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/instagram-clone.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## **STEP 2: Deploy Backend to Render**

### 2.1 Go to [render.com](https://render.com)
- Sign up or login
- Click **"New +"** → **"Web Service"**

### 2.2 Connect GitHub
- Select **"Connect Repository"**
- Choose `instagram-clone`

### 2.3 Configure Service
```
Name: instagram-clone-api
Environment: Node
Build Command: npm install
Start Command: node index.js
Region: Choose closest to you
```

### 2.4 Deploy
- Click **"Create Web Service"**
- Wait 2-3 minutes
- **Copy your backend URL** (e.g., `https://instagram-clone-api.onrender.com`)

---

## **STEP 3: Deploy Frontend to Netlify**

### 3.1 Go to [netlify.com](https://netlify.com)
- Sign up or login
- Click **"Add new site"** → **"Import an existing project"**

### 3.2 Connect GitHub
- Select your `instagram-clone` repository

### 3.3 Configure Build
```
Base directory: client
Build command: npm run build
Publish directory: dist
```

### 3.4 Add Environment Variables
Click **"Advanced"** → **"New variable"**

Add:
```
VITE_API_BASE = https://instagram-clone-api.onrender.com
```

(Replace with your actual backend URL from Step 2.4)

### 3.5 Deploy
- Click **"Deploy site"**
- Wait 2-3 minutes
- **Copy your frontend URL** (e.g., `https://instagram-clone-abc123.netlify.app`)

---

## **STEP 4: Test Your Deployment**

1. Open your frontend URL in browser
2. Click **"Sign up"**
3. Create account with email
4. Login with same credentials
5. Create a post with caption and image
6. Verify everything works!

---

## **STEP 5: (Optional) Get Custom Domain**

### 5.1 Buy Domain
- Go to [namecheap.com](https://namecheap.com)
- Search for domain (e.g., `myinstagram.com`)
- Purchase domain

### 5.2 Connect to Netlify
- In Netlify dashboard → **Domain settings**
- Click **"Add custom domain"**
- Follow DNS setup instructions
- Point domain to Netlify

---

## **URLs After Deployment**

| Component | URL |
|-----------|-----|
| Backend API | `https://instagram-clone-api.onrender.com` |
| Frontend | `https://instagram-clone-abc123.netlify.app` |
| Custom Domain | `https://myinstagram.com` (optional) |
| Login Attempts | `https://instagram-clone-api.onrender.com/api/login-attempts` |

---

## **Troubleshooting**

### Frontend shows blank page
- Check browser console (F12)
- Verify `VITE_API_BASE` environment variable
- Redeploy frontend

### Can't login
- Check backend logs on Render
- Verify backend URL in frontend env vars
- Test backend health: `https://your-backend/api/health`

### Images not uploading
- Check backend logs
- Verify uploads folder exists
- Check file permissions

---

## **Important Notes**

✅ Database is created automatically on first login
✅ Login attempts are logged to database
✅ Free tier is sufficient for testing
✅ All data persists between deployments
✅ DNS takes 24-48 hours to propagate

---

## **Next Steps**

1. ✅ Push code to GitHub
2. ✅ Deploy backend to Render
3. ✅ Deploy frontend to Netlify
4. ✅ Test everything
5. ✅ (Optional) Get custom domain
6. ✅ Share your Instagram clone!

---

**Your Instagram clone will be live worldwide!** 🌍
