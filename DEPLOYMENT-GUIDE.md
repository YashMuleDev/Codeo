# 🚀 Codeo Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now **deployment-ready**! Follow these steps to deploy.

---

## 📋 What's Already Configured

✅ **Backend (Render)**
- Build command: `npm install --include=dev && npm run build`
- Start command: `npm start`
- Port: 3000
- CORS: Configured to accept all origins

✅ **Frontend (Vercel)**
- Framework: Vite
- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`

✅ **Code Quality**
- No TypeScript errors
- Error boundaries added
- Socket connection with retry logic
- Environment variables properly configured

---

## 🌐 Deployment Steps

### Step 1: Deploy Backend on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in with GitHub

2. **Create New Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository: `YashMuleDev/Codeo`
   - Click "Connect"

3. **Configure Service**
   ```
   Name: codeo-server (or any name)
   Region: Oregon (or closest to you)
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: npm install --include=dev && npm run build
   Start Command: npm start
   ```

4. **Add Environment Variables**
   - Click "Advanced" → "Add Environment Variable"
   - Add these variables:
   ```
   PORT = 3000
   NODE_ENV = production
   FRONTEND_URL = https://yash-code-editor.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Copy your backend URL (e.g., `https://yashmule-codeo-server.onrender.com`)

---

### Step 2: Deploy Frontend on Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your repository: `YashMuleDev/Codeo`
   - Click "Import"

3. **Configure Project**
   ```
   Project Name: codeo-client (or any name)
   Framework Preset: Vite
   Root Directory: client
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add this variable:
   ```
   Key: VITE_BACKEND_URL
   Value: https://yashmule-codeo-server.onrender.com
   Environments: Production, Preview, Development (check all)
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Copy your frontend URL (e.g., `https://yash-code-editor.vercel.app`)

---

### Step 3: Update CORS Configuration

1. **Go back to Render Dashboard**
   - Open your `codeo-server` service
   - Go to "Environment" tab
   - Update `FRONTEND_URL` with your actual Vercel URL
   - Click "Save Changes"
   - Wait for automatic redeployment

2. **Verify Deployment**
   - Open your Vercel URL in browser
   - Try creating a room
   - Test the code editor
   - Check if real-time features work

---

## 🔧 Troubleshooting

### Issue: "Failed to connect to server"

**Solution:**
1. Check Render logs for errors
2. Verify `FRONTEND_URL` in Render matches your Vercel URL exactly
3. Verify `VITE_BACKEND_URL` in Vercel matches your Render URL exactly
4. Make sure both URLs have NO trailing slashes

### Issue: "CORS Error"

**Solution:**
1. Go to Render → Environment
2. Make sure `FRONTEND_URL` is set correctly
3. Redeploy the backend service

### Issue: Frontend shows blank page

**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Go to Vercel → Deployments → View Function Logs
4. Check if `VITE_BACKEND_URL` is set correctly

### Issue: Backend build fails

**Solution:**
1. Make sure build command includes `--include=dev`
2. Check Render logs for specific error
3. Verify `package.json` has all required dependencies

---

## 📊 Verify Deployment

### Backend Health Check
```bash
curl https://yashmule-codeo-server.onrender.com
```
Should return HTML page with "Code Sync Server"

### Frontend Check
1. Open: https://yash-code-editor.vercel.app
2. Open browser console (F12)
3. Should see: "Connecting to backend: https://yashmule-codeo-server.onrender.com"
4. No errors should appear

### Full Integration Test
1. Open frontend URL
2. Enter username
3. Click "Generate Unique Room Id"
4. Click "Join"
5. Should see the code editor
6. Try typing code
7. Open same room in another browser/tab
8. Verify real-time synchronization works

---

## 🎯 Current Deployment URLs

**Frontend (Vercel):** https://yash-code-editor.vercel.app  
**Backend (Render):** https://yashmule-codeo-server.onrender.com

---

## 📝 Environment Variables Summary

### Vercel (Frontend)
```env
VITE_BACKEND_URL=https://yashmule-codeo-server.onrender.com
```

### Render (Backend)
```env
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://yash-code-editor.vercel.app
```

---

## 🔄 Redeployment

### When you make code changes:

1. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Automatic deployment:**
   - Vercel will auto-deploy frontend (1-2 min)
   - Render will auto-deploy backend (2-3 min)

3. **Manual redeploy (if needed):**
   - **Vercel:** Deployments → three dots → Redeploy
   - **Render:** Manual Deploy → Deploy latest commit

---

## ✅ Deployment Complete!

Your Codeo application is now live and ready to use! 🎉

Share your Room IDs with teammates and start coding together in real-time.

---

## 📞 Need Help?

- Check Render logs: Dashboard → Your Service → Logs
- Check Vercel logs: Dashboard → Your Project → Deployments → View Function Logs
- Open browser console (F12) for frontend errors
- Check GitHub Issues: https://github.com/YashMuleDev/Codeo/issues
