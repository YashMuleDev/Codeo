<div align="center">

# 🚀 Codeo - Real-Time Collaborative Code Editor

### *Code Together, Create Together*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-010101?style=for-the-badge&logo=socket.io)](https://socket.io/)

[Live Demo](https://code-sync-live.vercel.app/) • [Documentation](#-documentation) • [Deploy Your Own](#-deploy-your-own) • [Contributing](CONTRIBUTING.md)

</div>

---

## 📖 About

**Codeo** is a powerful real-time collaborative code editor that enables multiple developers to code together seamlessly. Built with modern web technologies, it provides a complete development environment in your browser with real-time synchronization, file management, and team collaboration features.

> **Note**: This is a modified version of [CodeSync](https://github.com/sahilatahar/Code-Sync) by Sahil Atahar, enhanced and maintained by Yash Mule for learning and improvement purposes.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 💻 Core Features
- ✅ Real-time collaborative code editing
- ✅ Multi-file & folder management
- ✅ Syntax highlighting (auto-detection)
- ✅ Code execution environment
- ✅ Download codebase as ZIP
- ✅ Multiple programming languages

</td>
<td width="50%">

### 🎨 Collaboration Features
- ✅ Real-time cursor tracking
- ✅ User presence indicators
- ✅ Group chat functionality
- ✅ Collaborative whiteboard
- ✅ AI-powered code assistant
- ✅ Join/leave notifications

</td>
</tr>
</table>

### 🔥 Advanced Features
- **Live Cursor Tracking**: See where your teammates are editing in real-time
- **Selection Highlighting**: View what code others have selected
- **Code Execution**: Run code directly in the browser using Piston API
- **AI Copilot**: Get AI-powered code suggestions and generation
- **Customization**: Multiple themes, font sizes, and editor preferences
- **Auto-Suggestions**: Context-aware code completion

---

## 🎯 Use Cases

- 👨‍💻 **Pair Programming**: Code together in real-time
- 🎓 **Teaching & Learning**: Interactive coding sessions
- 💼 **Technical Interviews**: Collaborative coding assessments
- 🚀 **Hackathons**: Quick team collaboration
- 🔧 **Code Reviews**: Live code discussion and feedback

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CodeMirror](https://img.shields.io/badge/CodeMirror-D30707?style=for-the-badge&logo=codemirror&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket.IO](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### DevOps & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/codeo.git
cd codeo

# 2. Install dependencies
cd server && npm install
cd ../client && npm install

# 3. Set up environment variables
# Create .env files in both client and server directories

# Server (.env)
echo "PORT=3000" > server/.env

# Client (.env)
echo "VITE_BACKEND_URL=http://localhost:3000" > client/.env

# 4. Start the development servers

# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev

# 5. Open your browser
# Navigate to http://localhost:5173
```

### Docker Installation

```bash
# Using Docker Compose (Recommended)
docker-compose up -d

# Or pull pre-built images
docker pull sahilatahar/code-sync-server:latest
docker pull sahilatahar/code-sync-client:latest

# Run containers
docker run -d -p 3000:3000 --name codeo-server sahilatahar/code-sync-server:latest
docker run -d -p 5173:5173 --name codeo-client sahilatahar/code-sync-client:latest
```

---

## 🌐 Deploy Your Own

Deploy Codeo for **FREE** in just 5-15 minutes!

<div align="center">

### 📚 Choose Your Deployment Guide

| Your Situation | Guide | Time | Difficulty |
|----------------|-------|------|------------|
| 🎓 Complete Beginner | [DEPLOY-FROM-SCRATCH.md](./DEPLOY-FROM-SCRATCH.md) | 15 min | ⭐ Easy |
| 📥 Downloaded Project | [DEPLOY-MY-SITUATION.md](./DEPLOY-MY-SITUATION.md) | 5 min | ⭐ Easy |
| 💻 Have GitHub Repo | [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) | 5 min | ⭐ Easy |
| 🔧 Want All Options | [DEPLOYMENT.md](./DEPLOYMENT.md) | Varies | ⭐⭐ Medium |

### 🎯 Recommended Free Hosting

**Frontend**: Vercel or Netlify  
**Backend**: Render or Railway  
**Cost**: $0 (100% Free Forever)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

</div>

---

## 📚 Documentation

### Project Structure
```
codeo/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # State management
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── server.ts      # Main server file
│   │   └── types/         # TypeScript types
│   └── public/            # Static files
│
├── DEPLOY-FROM-SCRATCH.md # Complete deployment guide
├── QUICK-DEPLOY.md        # Quick deployment guide
└── docker-compose.yml     # Docker configuration
```

### Environment Variables

**Backend (`server/.env`)**
```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend (`client/.env`)**
```env
VITE_BACKEND_URL=http://localhost:3000
```

---

## 🎮 How to Use

1. **Create or Join a Room**
   - Enter your username
   - Create a new room or join existing one with Room ID

2. **Start Collaborating**
   - Write code in real-time with your team
   - Create files and folders
   - Execute code directly in the browser
   - Chat with team members
   - Use the collaborative whiteboard

3. **Share & Collaborate**
   - Share the Room ID with your team
   - See live cursors and selections
   - Get instant code synchronization

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🔨 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue on GitHub with:
- Clear description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Attribution

This project is based on [CodeSync](https://github.com/sahilatahar/Code-Sync) by Sahil Atahar (MIT License).  
Modified and maintained by **Yash Mule** for learning and enhancement purposes.

---

## 🙏 Acknowledgments

Special thanks to:

- **[Sahil Atahar](https://github.com/sahilatahar)** - Original CodeSync creator
- **[Piston API](https://github.com/engineer-man/piston)** - Code execution engine
- **[Tldraw](https://github.com/tldraw/tldraw)** - Collaborative whiteboard
- **[Pollinations AI](https://github.com/pollinations/pollinations)** - AI code generation
- **[CodeMirror](https://codemirror.net/)** - Code editor component
- **[Socket.IO](https://socket.io/)** - Real-time communication

---

## 👨‍💻 Original Author

<div align="center">

### Sahil Atahar
*Original CodeSync Creator*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sahilatahar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sahilatahar)

</div>

---

## 📊 Project Stats

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/sahilatahar/Code-Sync?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/sahilatahar/Code-Sync?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sahilatahar/Code-Sync?style=for-the-badge)

</div>

---

## 🌟 Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own use
- 📢 Sharing with others
- 🐛 Reporting bugs
- 💡 Suggesting new features

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/your-username/codeo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/codeo/discussions)
- **Original Project**: [CodeSync by Sahil Atahar](https://github.com/sahilatahar/Code-Sync)

---

<div align="center">

### Made with ❤️ by developers, for developers

**[⬆ Back to Top](#-codeo---real-time-collaborative-code-editor)**

</div>
