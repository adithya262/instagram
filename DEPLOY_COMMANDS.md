# Deployment Commands - Copy & Paste Ready

## 🚀 Step 1: Push to GitHub

```powershell
cd c:\Users\Aditya\instagram-clone
git init
git add .
git commit -m "Instagram clone - ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/instagram-clone.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

---

## 📋 Step 2: Backend Deployment (Render)

### Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Select your GitHub repository

### Configure Render Service
```
Name: instagram-clone-api
Environment: Node
Build Command: npm install
Start Command: node index.js
Region: Singapore (or closest to you)
```

### Add Environment Variables
```
PORT=4000
NODE_ENV=production
```

### Deploy
- Click "Create Web Service"
- Wait 2-3 minutes
- **SAVE YOUR BACKEND URL** (looks like: `https://instagram-clone-api.onrender.com`)

---

## 🎨 Step 3: Frontend Deployment (Netlify)

### Create Netlify Account
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository

### Configure Netlify Build
```
Base directory: client
Build command: npm run build
Publish directory: dist
```

### Add Environment Variables
In Netlify dashboard:
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Add environment variables"**
3. Add:
   - **Key**: `VITE_API_BASE`
   - **Value**: `https://instagram-clone-api.onrender.com` (your backend URL)

### Deploy
- Click "Deploy site"
- Wait 2-3 minutes
- **SAVE YOUR FRONTEND URL** (looks like: `https://instagram-clone-abc123.netlify.app`)

---

## ✅ Step 4: Test Deployment

### Test Backend Health
```
https://instagram-clone-api.onrender.com/api/health
```

Should return:
```json
{"ok": true}
```

### Test Frontend
1. Open: `https://instagram-clone-abc123.netlify.app`
2. Click "Sign up"
3. Enter email and password
4. Click "Sign up"
5. Should redirect to feed

### Test Login Attempts
```
https://instagram-clone-api.onrender.com/api/login-attempts
```

Should show all login attempts in JSON format.

---

## 🌐 Step 5: (Optional) Custom Domain

### Buy Domain
1. Go to https://namecheap.com
2. Search for domain (e.g., `myinstagram.com`)
3. Add to cart and checkout
4. Complete payment

### Connect to Netlify
1. In Netlify dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS setup instructions
5. Update nameservers at Namecheap to point to Netlify

---

## 📊 Final URLs

After deployment, you'll have:

```
Backend API:        https://instagram-clone-api.onrender.com
Frontend:           https://instagram-clone-abc123.netlify.app
Login Attempts:     https://instagram-clone-api.onrender.com/api/login-attempts
Health Check:       https://instagram-clone-api.onrender.com/api/health
Custom Domain:      https://myinstagram.com (optional)
```

---

## 🔧 Troubleshooting Commands

### Check Backend Logs (Render)
- Go to Render dashboard
- Click on your service
- Click "Logs" tab
- View real-time logs

### Check Frontend Logs (Netlify)
- Go to Netlify dashboard
- Click on your site
- Click "Deploys" tab
- Click latest deploy
- View build logs

### Test API Endpoints

```powershell
# Health check
curl https://instagram-clone-api.onrender.com/api/health

# Get all posts
curl https://instagram-clone-api.onrender.com/api/posts

# Get login attempts
curl https://instagram-clone-api.onrender.com/api/login-attempts
```

---

## ⚡ Quick Reference

| Step | Time | Action |
|------|------|--------|
| 1 | 2 min | Push to GitHub |
| 2 | 5 min | Deploy backend to Render |
| 3 | 5 min | Deploy frontend to Netlify |
| 4 | 2 min | Test everything |
| 5 | 2 min | (Optional) Buy domain |
| **Total** | **~15 min** | **Live!** |

---

## 📝 Important Notes

✅ Database created automatically on first login
✅ All data persists between deployments
✅ Free tier is sufficient for testing
✅ No credit card needed for free tier
✅ DNS takes 24-48 hours to propagate (if using custom domain)

---

## 🎉 You're Done!

Your Instagram clone is now live and accessible worldwide!

**Share your deployment URL with friends!** 🚀
