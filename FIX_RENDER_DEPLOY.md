# Fix Render Deployment Error

## ❌ Error You Got:
```
npm error path /opt/render/project/src/package.json
npm error enoent Could not read package.json
```

## ✅ Solution:

Render was looking for `package.json` in the wrong location. The backend is in the `server` folder, not the root.

### **Fix: Update Render Configuration**

1. Go to your Render dashboard
2. Click on your `instagram-clone-api` service
3. Click **"Settings"**
4. Scroll to **"Build & Deploy"**
5. Update the commands:

**Build Command:**
```
cd server && npm install
```

**Start Command:**
```
cd server && node index.js
```

6. Click **"Save"**
7. Click **"Manual Deploy"** → **"Deploy latest commit"**
8. Wait 2-3 minutes for deployment

---

## 📝 Why This Happens

Your project structure is:
```
instagram-clone/
├── server/          ← Backend here
│   ├── index.js
│   ├── db.js
│   └── package.json
├── client/          ← Frontend here
│   ├── src/
│   └── package.json
```

Render needs to know to look in the `server` folder for the backend.

---

## ✅ After Fix

You should see:
```
==> Build successful ✓
==> Deploying...
==> Server listening on http://localhost:4000
```

Then your backend URL will be ready!

---

## 🔗 Backend URL Format

After successful deployment:
```
https://instagram-clone-api.onrender.com
```

Use this URL in your Netlify frontend environment variable:
```
VITE_API_BASE=https://instagram-clone-api.onrender.com
```

---

## 📊 Render Settings Checklist

- [x] Build Command: `cd server && npm install`
- [x] Start Command: `cd server && node index.js`
- [x] Environment: Node
- [x] Node Version: 22.16.0 (default is fine)
- [x] Environment Variables:
  - PORT: 4000
  - NODE_ENV: production

---

**Try deploying again now!** 🚀
