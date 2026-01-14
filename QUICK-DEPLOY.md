# 🚀 Quick Deploy Codeo (5 Minutes)

## Prerequisites
- GitHub repository with your code
- 5 minutes of time

---

## Step 1: Deploy Backend on Render (2 min)

1. Go to [render.com](https://render.com) and sign up
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `codeo-server`
   - **Root Directory**: `server`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node
   - **Plan**: Free
5. Add Environment Variable:
   - **Key**: `PORT`
   - **Value**: `3000`
6. Click **"Create Web Service"**
7. **Copy your backend URL** (e.g., `https://codeo-server.onrender.com`)

---

## Step 2: Deploy Frontend on Vercel (2 min)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - **Key**: `VITE_BACKEND_URL`
   - **Value**: Your Render backend URL (from Step 1)
6. Click **"Deploy"**

---

## Step 3: Test (1 min)

1. Open your Vercel URL (e.g., `https://codeo.vercel.app`)
2. Create a room with a username
3. Open the same URL in another browser/tab
4. Join the same room with a different username
5. Test real-time collaboration!

---

## ⚠️ Important Notes

### First Load May Be Slow
- Render free tier sleeps after 15 minutes of inactivity
- First request takes 30-60 seconds to wake up
- Subsequent requests are fast

### Keep Backend Awake (Optional)
Use [UptimeRobot](https://uptimerobot.com/):
- Create free account
- Add HTTP(s) monitor
- URL: Your Render backend URL
- Interval: 14 minutes

---

## 🐛 Troubleshooting

**"Failed to connect to server"**
- Wait 60 seconds (backend is waking up)
- Check backend URL in Vercel environment variables
- Ensure backend deployed successfully on Render

**"WebSocket connection failed"**
- Verify CORS settings in server
- Check browser console for errors
- Ensure both frontend and backend are deployed

---

## 🎉 Done!

Your Codeo is now live! Share your URL:
```
https://your-app-name.vercel.app
```

---

**Need more options?** See [DEPLOYMENT.md](./DEPLOYMENT.md)
