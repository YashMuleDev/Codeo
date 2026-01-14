# 🚀 Deploy Codeo From Scratch - Complete Guide

## Complete Step-by-Step Instructions (No Prior Knowledge Required)

This guide assumes you're starting from zero and will walk you through every single step.

---

## 📋 What You'll Need

- [ ] A computer with internet connection
- [ ] 15 minutes of time
- [ ] Email address (for creating accounts)
- [ ] This Codeo project folder

---

## STEP 1: Install Git (If Not Already Installed)

### Check if Git is Installed
Open PowerShell (Windows) or Terminal (Mac/Linux) and type:
```bash
git --version
```

**If you see a version number** (e.g., `git version 2.40.0`), skip to Step 2.

**If you see an error**, install Git:

### Windows
1. Go to [git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the installer
3. Run the installer (click Next, Next, Next... use default settings)
4. Restart PowerShell

### Mac
```bash
# Install Homebrew first (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git
```

---

## STEP 2: Create GitHub Account

### 2.1 Sign Up for GitHub
1. Go to [github.com](https://github.com)
2. Click **"Sign up"** (top right)
3. Enter your email address
4. Create a password
5. Choose a username (e.g., `yourname123`)
6. Verify you're human (solve the puzzle)
7. Click **"Create account"**
8. Check your email and verify your account

### 2.2 Create New Repository
1. After logging in, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Fill in:
   - **Repository name**: `codeo` (or any name you like)
   - **Description**: `Real-time collaborative code editor`
   - **Public** or **Private**: Choose Public (recommended)
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license
4. Click **"Create repository"**
5. **Keep this page open** - you'll need the URL

---

## STEP 3: Push Your Code to GitHub

### 3.1 Open Terminal/PowerShell in Your Project Folder

**Windows:**
1. Open File Explorer
2. Navigate to your Codeo project folder
3. Click in the address bar and type `powershell`
4. Press Enter

**Mac/Linux:**
1. Open Terminal
2. Navigate to your project:
   ```bash
   cd /path/to/your/codeo/folder
   ```

### 3.2 Initialize Git Repository

Copy and paste these commands one by one:

```bash
# Remove any existing git history
rm -rf .git

# Initialize new git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Codeo project"
```

### 3.3 Connect to Your GitHub Repository

**Replace `YOUR-USERNAME` with your actual GitHub username:**

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/codeo.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**If asked for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)

**To create a Personal Access Token:**
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: `Codeo Deployment`
4. Check: `repo` (all repo permissions)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password

### 3.4 Verify Upload
1. Go to your GitHub repository page
2. Refresh the page
3. You should see all your files!

---

## STEP 4: Deploy Backend on Render

### 4.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Click **"Get Started"** or **"Sign Up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Render to access your GitHub
5. Complete your profile

### 4.2 Create Web Service
1. Click **"New +"** (top right)
2. Select **"Web Service"**
3. Click **"Connect account"** if needed
4. Find your `codeo` repository
5. Click **"Connect"**

### 4.3 Configure Backend Service
Fill in these settings:

**Basic Settings:**
- **Name**: `codeo-server` (or any unique name)
- **Region**: Choose closest to you (e.g., Oregon, Frankfurt)
- **Branch**: `main`
- **Root Directory**: `server` ⚠️ IMPORTANT!
- **Runtime**: `Node`

**Build & Deploy:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Plan:**
- Select **"Free"** plan

### 4.4 Add Environment Variable
1. Scroll down to **"Environment Variables"**
2. Click **"Add Environment Variable"**
3. Enter:
   - **Key**: `PORT`
   - **Value**: `3000`
4. Click **"Add"**

### 4.5 Deploy
1. Click **"Create Web Service"** (bottom)
2. Wait for deployment (2-3 minutes)
3. You'll see logs scrolling
4. Wait until you see **"Your service is live"** ✅

### 4.6 Copy Backend URL
1. At the top of the page, you'll see your service URL
2. It looks like: `https://codeo-server-xxxx.onrender.com`
3. **Copy this URL** - you'll need it for the frontend!

**Write it down here:**
```
My Backend URL: _________________________________
```

---

## STEP 5: Deploy Frontend on Vercel

### 5.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Complete your profile

### 5.2 Import Project
1. Click **"Add New..."** (top right)
2. Select **"Project"**
3. Find your `codeo` repository
4. Click **"Import"**

### 5.3 Configure Frontend Project
Fill in these settings:

**Project Settings:**
- **Framework Preset**: Select **"Vite"**
- **Root Directory**: Click **"Edit"** → Enter `client` ⚠️ IMPORTANT!
- **Build Command**: `npm run build` (should be auto-filled)
- **Output Directory**: `dist` (should be auto-filled)

### 5.4 Add Environment Variable
1. Click **"Environment Variables"** section
2. Enter:
   - **Key**: `VITE_BACKEND_URL`
   - **Value**: Your backend URL from Step 4.6 (e.g., `https://codeo-server-xxxx.onrender.com`)
3. Click **"Add"**

### 5.5 Deploy
1. Click **"Deploy"** (bottom)
2. Wait for deployment (2-3 minutes)
3. You'll see a progress animation
4. Wait until you see **"Congratulations!"** 🎉

### 5.6 Get Your App URL
1. Click **"Continue to Dashboard"**
2. At the top, you'll see your app URL
3. It looks like: `https://codeo-xxxx.vercel.app`
4. **This is your live app URL!**

**Write it down here:**
```
My App URL: _________________________________
```

---

## STEP 6: Test Your Deployment

### 6.1 Open Your App
1. Click on your Vercel URL or paste it in a browser
2. **Wait 60 seconds** on first load (backend is waking up)
3. You should see the Codeo homepage!

### 6.2 Test Real-Time Collaboration
1. **Browser 1**: 
   - Enter a username (e.g., "Alice")
   - Enter a room ID (e.g., "test123")
   - Click "Join"

2. **Browser 2** (open in incognito or different browser):
   - Go to the same URL
   - Enter different username (e.g., "Bob")
   - Enter same room ID ("test123")
   - Click "Join"

3. **Test Features**:
   - Type code in one browser → Should appear in other browser ✅
   - Create a file → Should appear in other browser ✅
   - Send a chat message → Should appear in other browser ✅
   - Move cursor → Other user should see your cursor ✅

### 6.3 If Something Doesn't Work

**Backend is slow or not responding:**
- Wait 60 seconds (free tier takes time to wake up)
- Check Render dashboard - is service running?
- Check Render logs for errors

**Frontend loads but can't connect:**
- Check if backend URL in Vercel is correct
- Go to Vercel → Project → Settings → Environment Variables
- Verify `VITE_BACKEND_URL` matches your Render URL
- If you changed it, redeploy: Deployments → Click "..." → Redeploy

**WebSocket connection failed:**
- Open browser console (F12)
- Look for error messages
- Ensure backend is running on Render
- Check CORS settings (should be automatic)

---

## STEP 7: Optional - Keep Backend Awake

Render free tier sleeps after 15 minutes of inactivity. To keep it awake:

### 7.1 Create UptimeRobot Account
1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Click **"Free Sign Up"**
3. Enter email and create password
4. Verify your email

### 7.2 Add Monitor
1. Click **"Add New Monitor"**
2. Fill in:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: `Codeo Backend`
   - **URL**: Your Render backend URL
   - **Monitoring Interval**: 5 minutes (or 14 minutes for free tier)
3. Click **"Create Monitor"**

Now your backend will stay awake! 🎉

---

## STEP 8: Share Your App

Your app is now live! Share it with your team:

```
🎉 My Codeo App is Live!

URL: https://codeo-xxxx.vercel.app

How to use:
1. Open the URL
2. Enter your name
3. Create or join a room
4. Start coding together!
```

---

## 📊 Summary - What You've Done

✅ Installed Git
✅ Created GitHub account
✅ Created GitHub repository
✅ Pushed code to GitHub
✅ Created Render account
✅ Deployed backend on Render
✅ Created Vercel account
✅ Deployed frontend on Vercel
✅ Tested real-time collaboration
✅ (Optional) Set up UptimeRobot

**Total Time**: ~15 minutes
**Total Cost**: $0 (100% Free!)

---

## 🎓 What You've Learned

- How to use Git and GitHub
- How to deploy a Node.js backend
- How to deploy a React frontend
- How to configure environment variables
- How to test a real-time application

---

## 🔄 Making Updates

When you want to update your app:

### Update Code Locally
1. Make your changes in the code
2. Test locally: `npm run dev` in both client and server

### Push to GitHub
```bash
git add .
git commit -m "Description of changes"
git push
```

### Auto-Deploy
- Vercel and Render will automatically deploy your changes!
- Wait 2-3 minutes for deployment
- Refresh your app URL

---

## 🐛 Common Issues & Solutions

### Issue: "git: command not found"
**Solution**: Install Git (see Step 1)

### Issue: "Permission denied (publickey)"
**Solution**: Use HTTPS URL and Personal Access Token (see Step 3.3)

### Issue: "Backend not responding"
**Solution**: Wait 60 seconds for free tier to wake up

### Issue: "WebSocket connection failed"
**Solution**: 
1. Check backend URL in Vercel environment variables
2. Ensure backend is running on Render
3. Check browser console for specific errors

### Issue: "Build failed on Vercel"
**Solution**:
1. Check Vercel build logs
2. Ensure `client` is set as root directory
3. Verify all dependencies are in package.json

### Issue: "Build failed on Render"
**Solution**:
1. Check Render logs
2. Ensure `server` is set as root directory
3. Verify build command is correct

---

## 📞 Need More Help?

### Documentation
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Guides](https://guides.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)

### Video Tutorials
- Search YouTube for: "Deploy React app to Vercel"
- Search YouTube for: "Deploy Node.js to Render"

### Community
- [GitHub Discussions](https://github.com/discussions)
- [Stack Overflow](https://stackoverflow.com/)

---

## 🎉 Congratulations!

You've successfully deployed your Codeo app from scratch! 

**Your app is now:**
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Free to use
- ✅ Automatically updated when you push to GitHub

**Share your success:**
```
🚀 I just deployed my own real-time collaborative code editor!
Check it out: [Your URL]
```

---

## 📝 Quick Reference

**Your URLs:**
- GitHub Repo: `https://github.com/YOUR-USERNAME/codeo`
- Backend (Render): `https://codeo-server-xxxx.onrender.com`
- Frontend (Vercel): `https://codeo-xxxx.vercel.app`

**Important Commands:**
```bash
# Update your app
git add .
git commit -m "Update message"
git push

# Check git status
git status

# View commit history
git log
```

**Platform Dashboards:**
- GitHub: [github.com](https://github.com)
- Render: [dashboard.render.com](https://dashboard.render.com)
- Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)

---

**You did it!** 🎊 Now go build something amazing with your team!
