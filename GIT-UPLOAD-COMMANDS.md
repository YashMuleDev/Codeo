# 🚀 Git Commands to Upload Codeo Project

## Your GitHub Repository
**URL**: https://github.com/YashMuleDev/Codeo

---

## Step-by-Step Commands

### Step 1: Open Git Bash in Your Project Folder

**Windows:**
1. Open File Explorer
2. Navigate to your Codeo project folder
3. Right-click in the folder
4. Select "Git Bash Here"

**Or use PowerShell/Terminal:**
```bash
cd "D:\...My Projects\Codeo - Real Time Code Editor\Codeo"
```

---

### Step 2: Configure Git (First Time Only)

```bash
# Set your name
git config --global user.name "Yash Mule"

# Set your email (use your GitHub email)
git config --global user.email "your-email@example.com"
```

---

### Step 3: Initialize Git Repository

```bash
# Remove any existing git history
rm -rf .git

# Initialize new git repository
git init

# Set main as default branch
git branch -M main
```

---

### Step 4: Add All Files

```bash
# Add all files to staging
git add .

# Check what will be committed (optional)
git status
```

---

### Step 5: Commit Your Changes

```bash
# Commit with a message
git commit -m "Initial commit: Codeo - Real-time collaborative code editor"
```

---

### Step 6: Add Remote Repository

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YashMuleDev/Codeo.git

# Verify remote was added (optional)
git remote -v
```

---

### Step 7: Push to GitHub

```bash
# Push to GitHub
git push -u origin main
```

**If asked for credentials:**
- **Username**: YashMuleDev
- **Password**: Use a Personal Access Token (NOT your GitHub password)

---

## 🔑 Creating Personal Access Token (If Needed)

If Git asks for a password, you need a Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `Codeo Project`
4. Expiration: Choose duration (90 days recommended)
5. Select scopes:
   - ✅ `repo` (all repository permissions)
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)
8. Use this token as your password when Git asks

---

## 📋 Complete Command Sequence (Copy & Paste)

```bash
# 1. Remove old git history
rm -rf .git

# 2. Initialize new repository
git init

# 3. Set main branch
git branch -M main

# 4. Add all files
git add .

# 5. Commit
git commit -m "Initial commit: Codeo - Real-time collaborative code editor"

# 6. Add remote
git remote add origin https://github.com/YashMuleDev/Codeo.git

# 7. Push to GitHub
git push -u origin main
```

---

## ✅ Verify Upload

After pushing, verify your upload:

1. Go to: https://github.com/YashMuleDev/Codeo
2. Refresh the page
3. You should see all your files!

---

## 🔄 Future Updates (After Initial Upload)

When you make changes and want to update GitHub:

```bash
# 1. Add changed files
git add .

# 2. Commit with message
git commit -m "Description of your changes"

# 3. Push to GitHub
git push
```

---

## 🐛 Troubleshooting

### Error: "fatal: not a git repository"
**Solution**: Run `git init` first

### Error: "remote origin already exists"
**Solution**: 
```bash
git remote remove origin
git remote add origin https://github.com/YashMuleDev/Codeo.git
```

### Error: "failed to push some refs"
**Solution**: 
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "Permission denied (publickey)"
**Solution**: Use HTTPS URL (already provided above) and Personal Access Token

### Error: "Support for password authentication was removed"
**Solution**: Create and use a Personal Access Token (see section above)

---

## 📝 Quick Reference

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### View Remote URL
```bash
git remote -v
```

### Change Remote URL
```bash
git remote set-url origin https://github.com/YashMuleDev/Codeo.git
```

---

## 🎉 Success!

Once uploaded, your project will be live at:
**https://github.com/YashMuleDev/Codeo**

You can then:
- ✅ Share the repository link
- ✅ Deploy using the deployment guides
- ✅ Collaborate with others
- ✅ Track changes with Git

---

## 📞 Need Help?

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Ready to upload? Copy the commands from "Complete Command Sequence" section!** 🚀
