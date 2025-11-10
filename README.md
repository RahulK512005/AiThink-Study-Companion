# 🎓 AiThink Study Companion

An AI-powered offline-first educational platform built with Next.js and Ollama, designed for students and IT professionals to enhance their learning experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Ollama](https://img.shields.io/badge/Ollama-AI-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## ✨ Features

### 🎯 Learning Dashboard
- **💬 AI Chat**: Ask questions and get instant answers from local AI models
- **📝 Quiz Generator**: Create 20 MCQ questions on any topic with Easy/Medium/Hard levels
- **💡 Explain Tab**: Get detailed explanations on complex topics
- **🎯 Practice Problems**: Solve problems with instant feedback and solutions
- **📈 Progress Tracking**: Monitor learning streak, questions answered, and topics mastered

### 📚 Subjects & Resources
- **Education Levels**: LKG-UKG to PhD
- **Interactive Content**: Age-appropriate learning materials
- **Subject-Specific Chat**: AI assistance for each subject
- **Multi-Domain Support**: Science, Commerce, Arts, Engineering, Medical

### 📊 Learning Analytics
- Daily learning streak tracking
- Complete activity history
- Performance statistics
- Progress visualization

### 👤 User Profiles
- Student and IT Professional roles
- Academic purpose tracking
- Personalized learning experience
- Quick action shortcuts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- [Ollama](https://ollama.ai) installed and running
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/RahulK512005/AiThink-Study-Companion.git
cd AiThink-Study-Companion
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Install Ollama models**
```bash
ollama pull gemma3:1b
ollama pull tinyllama
ollama pull qwen2.5:0.5b
```

**Recommended**: Use **Gemma 3 1B** for the best balance of speed and accuracy.

4. **Start Ollama service**
```bash
ollama serve
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:3000
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **AI Engine**: Ollama (Local LLMs)
- **State Management**: React Context API

## 📁 Project Structure

```
AiThink-Study-Companion/
├── app/                      # Next.js app directory
├── components/               # React components
│   ├── app-context.tsx      # Global state management
│   ├── login-section.tsx    # Authentication
│   ├── dashboard-section.tsx # Learning dashboard
│   ├── subjects-section.tsx  # Subject browser
│   ├── profile-section.tsx   # User profile
│   └── ...
├── lib/                      # Utility functions
│   ├── ollama.ts            # Ollama API integration
│   └── mock-data.ts         # Fallback content
└── public/                   # Static assets
```

## 🎮 Usage

### Login
1. Enter your name and email
2. Select role (Student/IT Professional)
3. Choose purpose (Academic/Skill Development/Exam Prep/Research)
4. Click "Start Learning"

### Dashboard
- **Chat**: Type questions and get AI responses
- **Quiz**: Enter topic → Generate 20 questions → Answer → Submit
- **Explain**: Enter topic → Get detailed explanation
- **Practice**: Enter topic → Solve problems → Check answers
- **Progress**: View your learning statistics

### Subjects
- Select education level
- Choose domain (if applicable)
- Click on subject
- For kids: Click colorful button for content
- For others: Use chat panel

### Profile
- View personal information
- Check learning statistics
- See recent activity
- Quick navigation shortcuts
- Logout

## 🤖 AI Models

The app supports multiple Ollama models:

| Model | Size | Speed | Best For |
|-------|------|-------|----------|
| Gemma 3 1B ⭐ | ~1GB | Fast | **Recommended - Best balance** |
| Qwen 2.5 0.5B | ~500MB | Very Fast | Lightweight tasks |
| TinyLlama | ~600MB | Fastest | Minimal resources |

⭐ **Gemma 3 1B is recommended** for optimal performance and accuracy.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install --legacy-peer-deps`
4. Deploy

**Note**: Ollama runs locally, so deployed version uses fallback content. For production AI, host Ollama separately and update `NEXT_PUBLIC_OLLAMA_URL`.

## 🔧 Configuration

Create `.env.local` file:

```env
NEXT_PUBLIC_OLLAMA_URL=http://localhost:11434
```

## 📝 Features Breakdown

### For Students
- ✅ Interactive learning content
- ✅ Quiz generation on any topic
- ✅ Practice problems with solutions
- ✅ Progress tracking
- ✅ Age-appropriate content (LKG to PhD)

### For IT Professionals
- ✅ Technical topic explanations
- ✅ Code-related queries
- ✅ Advanced problem solving
- ✅ Skill development tracking

### For Educators
- ✅ Content generation tool
- ✅ Assessment creation
- ✅ Student progress monitoring

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai) for local AI models
- [Next.js](https://nextjs.org) for the framework
- [Radix UI](https://www.radix-ui.com) for UI components
- [Tailwind CSS](https://tailwindcss.com) for styling

## 📧 Contact

**Rahul K**
- GitHub: [@RahulK512005](https://github.com/RahulK512005)
- Project Link: [https://github.com/RahulK512005/AiThink-Study-Companion](https://github.com/RahulK512005/AiThink-Study-Companion)

## 🐛 Known Issues

- Ollama must be running locally for AI features
- Large models require significant RAM
- First response may be slow (model loading)

## 🗺️ Roadmap

- [ ] Cloud-hosted Ollama integration
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Collaborative learning features
- [ ] Mobile app version
- [ ] Offline mode improvements

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ for learners worldwide
