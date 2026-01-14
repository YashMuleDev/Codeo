# 🚀 Deploy Codeo - Complete Guide

## Your Situation: Downloaded Project Without GitHub Access

This guide covers everything you need to deploy Codeo for free online.

---

## ⚡ FASTEST METHOD (5 minutes)

### Option 1: Create Your Own GitHub Repo + Vercel + Render

#### Step 1: Create Your GitHub Repository (2 min)
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `codeo` (or any name)
3. Make it Public or Private
4. Click "Create repository"

#### Step 2: Push Your Code (1 min)
```bash
# Remove old git history
rm -rf .git

# Initialize new repository
git init
git add .
git commit -m "Initial commit - Codeo"

# Add your GitHub repo
git remote add origin https://github.com/YOUR-USERNAME/codeo.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy Backend on Render (2 min)
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: `codeo-server`
   - Root Directory: `server`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node
5. Add Environment Variable:
   - `PORT` = `3000`
6. Click "Create Web Service"
7. **Copy your backend URL** (e.g., `https://codeo-server.onrender.com`)

#### Step 4: Deploy Frontend on Vercel (2 min)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variable:
   - `VITE_BACKEND_URL` = Your Render backend URL
6. Click "Deploy"

#### Step 5: Test! 🎉
Open your Vercel URL and start coding together!

---

## 🐳 ALTERNATIVE: Deploy with Docker (No GitHub)

### Option 2: Fly.io (10 minutes)

#### Install Fly CLI
```bash
# Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex
```

#### Deploy Backend
```bash
cd server
fly auth login
fly launch --name codeo-server-yourname
fly secrets set PORT=3000
fly deploy
```

Copy backend URL: `https://codeo-server-yourname.fly.dev`

#### Deploy Frontend
```bash
cd ../client
fly launch --name codeo-client-yourname
fly secrets set VITE_BACKEND_URL=https://codeo-server-yourname.fly.dev
fly deploy
```

Access: `https://codeo-client-yourname.fly.dev`

---

## 🔧 Environment Variables

### Backend (Render/Fly.io)
```env
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend (Vercel/Fly.io)
```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

---

## 🐛 Troubleshooting

### Backend is slow to respond
- Wait 60 seconds (Render free tier wakes up slowly)
- Use [UptimeRobot](https://uptimerobot.com/) to keep it awake (ping every 14 min)

### WebSocket connection failed
- Check if backend URL is correct in frontend environment variables
- Ensure backend is running (check Render dashboard)
- Wait for backend to wake up

### Build failed
- Check build logs in platform dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

---

## 💰 Free Tier Limits

| Platform | Bandwidth | Sleep | Custom Domain |
|----------|-----------|-------|---------------|
| Vercel   | 100 GB/mo | Never | ✅ Yes        |
| Render   | 100 GB/mo | 15min | ✅ Yes        |
| Fly.io   | 160 GB/mo | Never | ✅ Yes        |

**Total Cost: $0**

---

## 📊 Comparison

| Method | Time | Difficulty | GitHub Required |
|--------|------|------------|-----------------|
| Vercel + Render | 5 min | Easy | Yes (your own) |
| Fly.io | 10 min | Medium | No |

---

## ✅ Post-Deployment Checklist

- [ ] Frontend loads without errors
- [ ] Can create and join rooms
- [ ] Real-time code editing works
- [ ] File operations sync across users
- [ ] Chat functionality works
- [ ] No console errors

---

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Render Dashboard](https://dashboard.render.com)
- [Fly.io Dashboard](https://fly.io/dashboard)
- [UptimeRobot](https://uptimerobot.com/) - Keep backend awake

---

**Recommended**: Use Option 1 (GitHub + Vercel + Render) - it's the easiest! 🚀


