# 🚀 Render Deployment Settings for Codeo Backend

## Exact Settings to Fill

### 1. Name
```
codeo-server
```
**Or any unique name like:**
- `codeo-backend`
- `codeo-server-yashmule`
- `yashmule-codeo-server`

---

### 2. Language
**Select:** `Node`

**NOT Docker** - Select Node because we'll use npm commands

---

### 3. Branch
```
main
```
(This should be auto-selected)

---

### 4. Region
**Select:** `Virginia (US East)` ✅ (Already selected)

**Or choose closest to you:**
- Oregon (US West)
- Frankfurt (Europe)
- Singapore (Asia)

---

### 5. Root Directory
```
server
```
⚠️ **VERY IMPORTANT** - Type exactly: `server`

This tells Render to run commands from the server folder.

---

### 6. Instance Type
**Select:** `Free` ✅

**Details:**
- $0/month
- 512 MB RAM
- 0.1 CPU
- Perfect for learning/testing

---

### 7. Build Command
```
npm install && npm run build
```

---

### 8. Start Command
```
npm start
```

---

### 9. Environment Variables

Click **"Add Environment Variable"** and add:

**Variable 1:**
- **Key:** `PORT`
- **Value:** `3000`

**Variable 2 (Optional but recommended):**
- **Key:** `NODE_ENV`
- **Value:** `production`

---

## 📋 Complete Settings Summary

| Field | Value |
|-------|-------|
| **Name** | `codeo-server` |
| **Language** | `Node` |
| **Branch** | `main` |
| **Region** | `Virginia (US East)` |
| **Root Directory** | `server` |
| **Instance Type** | `Free` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

**Environment Variables:**
```
PORT = 3000
NODE_ENV = production
```

---

## 🎯 Step-by-Step Visual Guide

### Step 1: Basic Settings
```
Name: codeo-server
Language: [Select] Node (NOT Docker)
Branch: main
Region: Virginia (US East)
```

### Step 2: Root Directory
```
Root Directory: server
```
⚠️ **Don't forget this!** It's the most important setting.

### Step 3: Instance Type
```
[Select] Free
$0/month
512 MB RAM
```

### Step 4: Build & Start Commands
These should auto-fill, but verify:
```
Build Command: npm install && npm run build
Start Command: npm start
```

### Step 5: Environment Variables
Click "Add Environment Variable":
```
Key: PORT
Value: 3000
```

Click "Add Environment Variable" again (optional):
```
Key: NODE_ENV
Value: production
```

### Step 6: Deploy
Click **"Create Web Service"** button at the bottom

---

## ⏱️ What Happens Next

1. **Building** (2-3 minutes)
   - Render clones your repository
   - Installs dependencies
   - Builds TypeScript to JavaScript

2. **Deploying** (30 seconds)
   - Starts your server
   - Assigns a URL

3. **Live!** ✅
   - Your backend URL: `https://codeo-server.onrender.com`
   - (or similar based on your name)

---

## 📝 Important Notes

### ✅ DO:
- Set Root Directory to `server`
- Use Node (not Docker)
- Use Free tier for testing
- Add PORT environment variable

### ❌ DON'T:
- Leave Root Directory empty
- Select Docker as language
- Forget to add PORT variable
- Use paid tier unless needed

---

## 🔍 After Deployment

### Copy Your Backend URL
After deployment completes, you'll see:
```
https://codeo-server-xxxx.onrender.com
```

**Save this URL!** You'll need it for Vercel frontend deployment.

### Test Your Backend
Open the URL in browser, you should see:
```
Cannot GET /
```
This is normal! It means the server is running.

---

## 🐛 Common Issues

### Issue: "Build failed"
**Check:**
- Root Directory is set to `server`
- Branch is `main`
- Your code is pushed to GitHub

### Issue: "Start command failed"
**Check:**
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- PORT environment variable is set

### Issue: "Cannot find module"
**Solution:**
- Ensure all dependencies are in `server/package.json`
- Check build logs for specific errors

---

## 📊 Expected Build Logs

You should see something like:
```
==> Cloning from https://github.com/YashMuleDev/Codeo...
==> Checking out commit abc123 in branch main
==> Running build command 'npm install && npm run build'...
    npm install
    added 152 packages
    npm run build
    Compiled successfully
==> Build successful!
==> Starting service with 'npm start'...
    Listening on port 3000
==> Your service is live 🎉
```

---

## ✅ Checklist Before Clicking "Create Web Service"

- [ ] Name: `codeo-server` (or similar)
- [ ] Language: `Node` selected
- [ ] Branch: `main`
- [ ] Root Directory: `server` ⚠️ IMPORTANT
- [ ] Instance Type: `Free` selected
- [ ] Build Command: `npm install && npm run build`
- [ ] Start Command: `npm start`
- [ ] Environment Variable: `PORT = 3000` added

---

## 🎉 Ready to Deploy!

Once all settings are filled correctly, click:

**"Create Web Service"** button at the bottom

Then wait 2-3 minutes for deployment to complete!

---

## 📞 Need Help?

If deployment fails:
1. Check the build logs in Render dashboard
2. Verify Root Directory is set to `server`
3. Ensure your code is pushed to GitHub
4. Check that `server/package.json` has all dependencies

---

**Good luck with your deployment!** 🚀
