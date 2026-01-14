<div align="center">

# 🚀 Codeo - Real-Time Collaborative Code Editor

### *Code Together, Create Together*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-010101?style=for-the-badge&logo=socket.io)](https://socket.io/)

[Live Demo](https://yash-code-editor.vercel.app/) • [Report Bug](https://github.com/YashMuleDev/Codeo/issues) • [Request Feature](https://github.com/YashMuleDev/Codeo/issues)

![Preview](preview.png)

</div>

---

## 📖 About

**Codeo** is a powerful real-time collaborative code editor that enables multiple developers to code together seamlessly. Built with modern web technologies, it provides a complete development environment in your browser with real-time synchronization, file management, and team collaboration features.

> **Note**: This project is based on [CodeSync](https://github.com/sahilatahar/Code-Sync) by Sahil Atahar, enhanced and maintained by Yash Mule for learning and improvement purposes.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 💻 Core Features
- ✅ Real-time collaborative code editing
- ✅ Multi-file & folder management
- ✅ Syntax highlighting (50+ languages)
- ✅ Code execution environment
- ✅ Download codebase as ZIP
- ✅ Auto-save functionality

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
- **File System**: Create, edit, rename, and delete files and folders

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

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

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
git clone https://github.com/YashMuleDev/Codeo.git
cd Codeo

# 2. Install server dependencies
cd server
npm install

# 3. Install client dependencies
cd ../client
npm install

# 4. Set up environment variables

# Server (.env)
cd ../server
echo "PORT=3000" > .env
echo "NODE_ENV=development" >> .env

# Client (.env)
cd ../client
echo "VITE_BACKEND_URL=http://localhost:3000" > .env

# 5. Start the development servers

# Terminal 1 - Start Backend
cd server
npm run dev

# Terminal 2 - Start Frontend
cd client
npm run dev

# 6. Open your browser at http://localhost:5173
```

### Docker Installation

```bash
# Using Docker Compose (Recommended)
docker-compose up -d

# Access the application at http://localhost:5173
```

---

## 🌐 Deploy Your Own

Deploy Codeo for **FREE** in minutes!

### Deployment Options

<div align="center">

| Platform | Type | Free Tier | Deploy |
|----------|------|-----------|--------|
| **Vercel** | Frontend | ✅ Yes | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YashMuleDev/Codeo) |
| **Render** | Backend | ✅ Yes | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com) |
| **Railway** | Full Stack | ✅ Yes | [Deploy](https://railway.app) |
| **Docker** | Self-hosted | ✅ Yes | See above |

</div>

### Quick Deployment Steps

**1. Deploy Backend (Render)**
- Go to [Render Dashboard](https://dashboard.render.com)
- Click "New" → "Web Service"
- Connect your GitHub repository
- Configure:
  - **Root Directory**: `server`
  - **Build Command**: `npm install --include=dev && npm run build`
  - **Start Command**: `npm start`
  - **Environment Variable**: `FRONTEND_URL` = `your-vercel-url`

**2. Deploy Frontend (Vercel)**
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click "Add New" → "Project"
- Import your GitHub repository
- Configure:
  - **Root Directory**: `client`
  - **Framework Preset**: Vite
  - **Environment Variable**: `VITE_BACKEND_URL` = `your-render-url`

**3. Update CORS**
- Add your Vercel URL to Render's `FRONTEND_URL` environment variable
- Redeploy both services

---

## 📚 Documentation

### Project Structure
```
Codeo/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # State management
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   ├── types/         # TypeScript types
│   │   └── assets/        # Static assets
│   └── public/            # Public files
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── server.ts      # Main server file
│   │   └── types/         # TypeScript types
│   └── public/            # Static files
│
├── docker-compose.yml     # Docker configuration
├── LICENSE                # MIT License
└── README.md             # This file
```

### Environment Variables

**Backend (`server/.env`)**
```env
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

**Frontend (`client/.env`)**
```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

---

## 🎮 How to Use

1. **Create or Join a Room**
   - Visit the application
   - Enter your username
   - Create a new room or join with an existing Room ID

2. **Start Collaborating**
   - Write code in real-time with your team
   - Create files and folders
   - Execute code directly in the browser
   - Chat with team members
   - Use the collaborative whiteboard for brainstorming

3. **Share & Collaborate**
   - Share the Room ID with your team
   - See live cursors and selections
   - Get instant code synchronization across all users

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🔨 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- 🐛 [Report a Bug](https://github.com/YashMuleDev/Codeo/issues/new?labels=bug)
- 💡 [Request a Feature](https://github.com/YashMuleDev/Codeo/issues/new?labels=enhancement)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Attribution

This project is based on [CodeSync](https://github.com/sahilatahar/Code-Sync) by Sahil Atahar (MIT License).  
Modified and maintained by **Yash Mule** for learning and enhancement purposes.

See [ATTRIBUTION.md](ATTRIBUTION.md) for complete attribution details.

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

## 👨‍💻 Authors

<div align="center">

### Yash Mule
*Maintainer & Developer*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YashMuleDev)

### Sahil Atahar
*Original CodeSync Creator*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sahilatahar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sahilatahar)

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

- **Issues**: [GitHub Issues](https://github.com/YashMuleDev/Codeo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YashMuleDev/Codeo/discussions)
- **Original Project**: [CodeSync by Sahil Atahar](https://github.com/sahilatahar/Code-Sync)

---

<div align="center">

### Made with ❤️ by developers, for developers

**[⬆ Back to Top](#-codeo---real-time-collaborative-code-editor)**

</div>
