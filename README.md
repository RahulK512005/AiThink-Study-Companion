# 🎓 AiThink Study Companion

An AI-powered offline-first educational platform built with Next.js and Ollama, designed for students and IT professionals to enhance their learning experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Ollama](https://img.shields.io/badge/Ollama-AI-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## 🎥 Demo Video

[![Watch Demo](https://img.shields.io/badge/▶️_Watch_Demo-Google_Drive-blue?style=for-the-badge)](https://drive.google.com/file/d/15cFXhKiH9s2Pk6YwS1bFzu3yN7Tr513P/view?usp=drive_link)

**[Click here to watch the full demo video](https://drive.google.com/file/d/15cFXhKiH9s2Pk6YwS1bFzu3yN7Tr513P/view?usp=drive_link)**

## ✨ Features

### 🎯 Learning Dashboard
- **💬 AI Chat**: Ask questions and get instant answers - **Works 100% Offline!**
  - Answers questions on Science, Math, Physics, Geography, Programming, History, and more
  - Intelligent fallback when Ollama is unavailable
  - 20+ topics covered in offline knowledge base
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
- [Ollama](https://ollama.ai) installed and running (Optional - app works offline without it!)
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

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Optional: Enhanced AI with Ollama

For advanced AI capabilities, install Ollama models:

```bash
ollama pull gemma3:1b
ollama pull tinyllama
ollama pull qwen2.5:0.5b
ollama serve
```

**Note**: The app works perfectly without Ollama using the built-in offline knowledge base!

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

## 🤖 AI Modes

### 🌐 Offline Mode (Default)
**No installation required!** Built-in knowledge base covers:
- 🌍 Geography: World capitals (France, India, USA, Japan, etc.)
- 🔬 Science: Photosynthesis, cells, DNA, periodic table
- ⚛️ Physics: Car engines, quantum physics, black holes
- 🪐 Space: Solar system, planets
- 💻 Programming: Python, coding basics
- 📐 Math: Algebra, calculus, geometry
- 📚 History: World wars, major events
- 🌡️ Environment: Climate change
- ❤️ Biology: Human body, heart, DNA
- 💰 Economics: Supply and demand

**Try asking:**
- "What is the capital of France?"
- "Explain photosynthesis"
- "How does a car engine work?"
- "What is quantum physics?"

### 🚀 Enhanced Mode (Optional - With Ollama)

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

**Note**: Deployed version automatically uses offline mode with built-in knowledge base. For enhanced AI, host Ollama separately and update `NEXT_PUBLIC_OLLAMA_URL`.

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

- Enhanced AI mode requires Ollama running locally
- Large Ollama models require significant RAM
- First Ollama response may be slow (model loading)
- Offline mode covers 20+ topics (expandable in `lib/mock-data.ts`)

## 🗺️ Roadmap

- [x] Offline AI knowledge base (20+ topics)
- [x] Intelligent keyword matching
- [ ] Expand offline knowledge to 100+ topics
- [ ] Cloud-hosted Ollama integration
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Collaborative learning features
- [ ] Mobile app version

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ for learners worldwide
