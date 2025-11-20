# Instagram Clone - Deployment Guide

## 🚀 Complete Deployment Instructions

This guide will help you deploy your Instagram clone to production with a custom domain.

---

## **Step 1: Deploy Backend (API Server)**

### Option A: Deploy to Render (Recommended)

1. Go to [render.com](https://render.com)
2. Sign up/Login
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Fill in details:
   - **Name**: `instagram-clone-api`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Region**: Choose closest to you
6. Click "Create Web Service"
7. Wait for deployment (2-3 minutes)
8. Copy your backend URL (e.g., `https://instagram-clone-api.onrender.com`)

### Option B: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Configure:
   - **Root Directory**: `server`
   - **Start Command**: `node index.js`
6. Add environment variables:
   - `PORT`: 4000
7. Deploy

---

## **Step 2: Deploy Frontend (React App)**

### Option A: Deploy to Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub
5. Select your repository
6. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Add environment variables:
   - `VITE_API_BASE`: Your backend URL (from Step 1)
8. Click "Deploy site"
9. Wait for deployment (2-3 minutes)
10. Copy your frontend URL (e.g., `https://instagram-clone-abc123.netlify.app`)

### Option B: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables:
   - `VITE_API_BASE`: Your backend URL
7. Deploy

---

## **Step 3: Get a Custom Domain**

### Option A: Buy Domain from Namecheap
1. Go to [namecheap.com](https://namecheap.com)
2. Search for your desired domain (e.g., `myinstagram.com`)
3. Add to cart and checkout
4. Complete payment

### Option B: Buy from GoDaddy
1. Go to [godaddy.com](https://godaddy.com)
2. Search for domain
3. Purchase

### Suggested Domain Names:
- `instaclone.com`
- `photoshare.app`
- `instacopy.com`
- `socialfeed.app`
- `picshare.io`

---

## **Step 4: Connect Custom Domain**

### For Netlify:

1. In Netlify dashboard, go to your site
2. Click "Domain settings"
3. Click "Add custom domain"
4. Enter your domain name
5. Follow instructions to update DNS:
   - Go to your domain registrar (Namecheap/GoDaddy)
   - Update DNS records to point to Netlify
   - Add CNAME record: `your-domain.com` → `your-netlify-site.netlify.app`

### For Render (Backend):

1. In Render dashboard, go to your service
2. Click "Settings"
3. Add custom domain
4. Update DNS records at your registrar

---

## **Step 5: Update API URL**

After deploying backend, update the frontend:

1. In Netlify environment variables, set:
   ```
   VITE_API_BASE=https://your-backend-url.onrender.com
   ```

2. Or update `client/src/api.js`:
   ```javascript
   export const API_BASE = 'https://your-backend-url.onrender.com';
   ```

3. Redeploy frontend

---

## **Step 6: Test Deployment**

1. Open your custom domain in browser
2. Test signup
3. Test login
4. Create a post
5. Check backend: `https://your-backend-url/api/login-attempts`

---

## **Environment Variables Needed**

### Backend (.env)
```
PORT=4000
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_BASE=https://your-backend-url.onrender.com
```

---

## **Troubleshooting**

### Frontend can't connect to backend
- Check `VITE_API_BASE` environment variable
- Ensure backend is running
- Check CORS settings in backend

### Database errors
- Render/Railway creates `posts.db` automatically
- First login will create tables
- Check backend logs for errors

### Domain not working
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Check DNS records at registrar

---

## **Monitoring & Logs**

### Netlify Logs
- Dashboard → Deploys → View logs

### Render Logs
- Dashboard → Service → Logs tab

### Check Backend Health
```
curl https://your-backend-url/api/health
```

---

## **Cost Estimate**

- **Netlify**: Free tier (recommended)
- **Render**: Free tier available
- **Domain**: $10-15/year
- **Total**: ~$10-15/year

---

## **Next Steps**

1. ✅ Push code to GitHub
2. ✅ Deploy backend to Render
3. ✅ Deploy frontend to Netlify
4. ✅ Buy custom domain
5. ✅ Connect domain to Netlify
6. ✅ Test everything
7. ✅ Share your Instagram clone!

---

## **Useful Links**

- [Render Docs](https://render.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Namecheap Support](https://www.namecheap.com/support/)
- [GoDaddy Support](https://www.godaddy.com/help)

---

**Your Instagram clone will be live and accessible worldwide!** 🌍
