# Deployment Checklist

## Pre-Deployment ✅

- [x] Code is ready and tested locally
- [x] `.gitignore` files created
- [x] `netlify.toml` configured
- [x] `Procfile` created for backend
- [x] Environment variables documented

## Deployment Steps

### Backend Deployment (Render)
- [ ] Create Render account
- [ ] Connect GitHub repository
- [ ] Deploy backend service
- [ ] Copy backend URL: `_____________________`
- [ ] Test health endpoint: `https://your-backend/api/health`

### Frontend Deployment (Netlify)
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Add environment variable: `VITE_API_BASE=<backend-url>`
- [ ] Deploy frontend
- [ ] Copy frontend URL: `_____________________`

### Domain Setup
- [ ] Choose domain name: `_____________________`
- [ ] Buy domain (Namecheap/GoDaddy)
- [ ] Get domain registrar login
- [ ] Update DNS records to point to Netlify
- [ ] Wait 24-48 hours for propagation
- [ ] Test custom domain

## Post-Deployment Testing

- [ ] Open custom domain in browser
- [ ] Test signup with new email
- [ ] Test login with correct password
- [ ] Test login with wrong password
- [ ] Check login attempts: `https://your-backend/api/login-attempts`
- [ ] Create a post with caption
- [ ] Upload image with post
- [ ] Verify post appears in feed
- [ ] Test logout
- [ ] Test login again

## URLs to Save

**Backend API**: `_____________________`

**Frontend URL**: `_____________________`

**Custom Domain**: `_____________________`

**Database**: SQLite (auto-created on first run)

**Admin Endpoint**: `https://your-backend/api/login-attempts`

## Important Notes

- Database is created automatically on first backend run
- Login attempts are logged to `login_attempts` table
- Images stored in `uploads/` folder on backend
- All data persists between deployments
- Free tier is sufficient for testing

## Support

If you encounter issues:
1. Check backend logs on Render
2. Check frontend logs on Netlify
3. Verify DNS records propagated
4. Clear browser cache
5. Check CORS settings

---

**Status**: Ready for deployment! 🚀
