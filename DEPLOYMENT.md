# Codeo - Complete Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel + Render (Recommended)
- **Time**: 5 minutes
- **Difficulty**: Easy
- **Cost**: Free
- **Guide**: [QUICK-DEPLOY.md](./QUICK-DEPLOY.md)

### Option 2: Netlify + Railway
- **Time**: 7 minutes
- **Difficulty**: Easy
- **Cost**: Free

### Option 3: Fly.io (Full Stack)
- **Time**: 10 minutes
- **Difficulty**: Medium
- **Cost**: Free

### Option 4: Docker Self-Hosted
- **Time**: 15 minutes
- **Difficulty**: Advanced
- **Cost**: Varies

---

## Option 1: Vercel + Render (Recommended)

See [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) for step-by-step instructions.

---

## Option 2: Netlify + Railway

### Deploy Backend on Railway

1. Create [Railway](https://railway.app) account
2. Create new project from GitHub repo
3. Select `server` directory
4. Add environment variable: `PORT=3000`
5. Deploy and copy backend URL

### Deploy Frontend on Netlify

1. Create [Netlify](https://netlify.com) account
2. Import from Git
3. Configure:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
4. Add environment variable:
   - `VITE_BACKEND_URL` = Your Railway backend URL
5. Deploy

---

## Option 3: Fly.io (Full Stack)

### Install Fly CLI
```bash
# Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex

# Mac/Linux
curl -L https://fly.io/install.sh | sh
```

### Deploy Backend
```bash
cd server
fly auth login
fly launch --name codeo-server
fly secrets set PORT=3000
fly deploy
```

### Deploy Frontend
```bash
cd ../client
fly launch --name codeo-client
fly secrets set VITE_BACKEND_URL=https://codeo-server.fly.dev
fly deploy
```

---

## Option 4: Docker Self-Hosted

### Using Docker Compose

1. Update `docker-compose.yml` with environment variables
2. Run:
```bash
docker-compose up -d
```

3. Access:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

---

## 🔧 Environment Variables

### Backend
```env
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend
```env
VITE_BACKEND_URL=https://your-backend-url.com
```

---

## 🐛 Troubleshooting

### Backend Connection Issues
- Wait 60 seconds for free tier to wake up
- Check environment variables are set correctly
- Verify backend URL is accessible

### WebSocket Connection Failed
- Check CORS configuration in `server/src/server.ts`
- Ensure backend URL is correct in frontend env vars
- Check browser console for specific errors

### Build Failures
- Review build logs in platform dashboard
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility

---

## 💰 Free Tier Comparison

| Platform | Bandwidth | Sleep | Custom Domain |
|----------|-----------|-------|---------------|
| Vercel   | 100 GB/mo | Never | ✅            |
| Render   | 100 GB/mo | 15min | ✅            |
| Netlify  | 100 GB/mo | Never | ✅            |
| Railway  | Included  | Never | ✅            |
| Fly.io   | 160 GB/mo | Never | ✅            |

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Fly.io Documentation](https://fly.io/docs)
- [Socket.IO Deployment](https://socket.io/docs/v4/deployment/)

---

**Quick Start**: Use [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) for fastest deployment!
