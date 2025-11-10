"use client"

export function DocumentationSection() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 pb-8">
      <h1 className="text-4xl font-bold text-blue-100 mb-8">📖 Documentation</h1>

      <div className="space-y-6">
        {/* Overview */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">🌟 Welcome to AIThink Study Companion</h2>
          <p className="text-slate-300 leading-relaxed">
            AIThink is an offline-first AI educational platform powered by Ollama models. Learn any subject, practice with quizzes, 
            and track your progress - all with the power of local AI running on your machine.
          </p>
        </div>

        {/* Dashboard */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">📊 Learning Dashboard</h2>
          <div className="space-y-4 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">💬 Chat Tab</h3>
              <p>Ask any question and get instant answers from AI. Perfect for quick clarifications and learning new concepts.</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-slate-400">
                <li>Type your question in the input box</li>
                <li>Press Enter or click Send</li>
                <li>AI responds using the selected model</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">📝 Quiz Tab</h3>
              <p>Test your knowledge with AI-generated quizzes on any topic.</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-slate-400">
                <li>Enter a topic (e.g., Python, Physics, History)</li>
                <li>Click "Generate Quiz" to create 20 MCQ questions</li>
                <li>Questions are divided into Easy, Medium, and Hard levels</li>
                <li>Navigate through questions and select answers</li>
                <li>Submit to see your score and evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">💡 Explain Tab</h3>
              <p>Get detailed explanations on any topic you want to understand better.</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-slate-400">
                <li>Enter a topic you want explained</li>
                <li>Click "Explain" to get a comprehensive explanation</li>
                <li>AI provides beginner-friendly content with examples</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">🎯 Practice Tab</h3>
              <p>Solve practice problems with instant feedback and solutions.</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-slate-400">
                <li>Enter a topic for practice problems</li>
                <li>Get 5 problems with varying difficulty</li>
                <li>Answer MCQ or input-type questions</li>
                <li>Check your answer to see if it's correct</li>
                <li>View detailed solutions for each problem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">📈 Progress Tab</h3>
              <p>Track your learning journey and see your accomplishments.</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-slate-400">
                <li>View learning streak (updates daily)</li>
                <li>See total questions answered</li>
                <li>Check topics mastered</li>
                <li>Review complete activity history</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">📚 Subjects & Resources</h2>
          <div className="space-y-4 text-slate-300">
            <p>Browse subjects by education level and get AI-powered learning content.</p>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Education Levels</h3>
              <ul className="list-disc list-inside ml-4 text-slate-400">
                <li><strong>LKG-UKG:</strong> Interactive content for young kids (Alphabets, Numbers, Colors, Shapes, Rhymes)</li>
                <li><strong>Class 1-5:</strong> Primary education subjects</li>
                <li><strong>Class 6-10:</strong> Secondary education subjects</li>
                <li><strong>Class 11-12:</strong> Choose stream (Science, Commerce, Arts)</li>
                <li><strong>Undergraduate:</strong> Engineering, Medical, Arts, Commerce, Science</li>
                <li><strong>Postgraduate:</strong> Advanced courses in various domains</li>
                <li><strong>PhD:</strong> Research-level subjects</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">How to Use</h3>
              <ul className="list-disc list-inside ml-4 text-slate-400">
                <li>Select your education level</li>
                <li>Choose domain (if applicable)</li>
                <li>Click on a subject</li>
                <li>For LKG-UKG: Click the colorful button to generate fun content</li>
                <li>For other levels: Use the chat panel to ask questions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">📜 Learning History</h2>
          <div className="text-slate-300">
            <p className="mb-4">View all your learning activities organized by date.</p>
            <ul className="list-disc list-inside ml-4 text-slate-400">
              <li>See what subjects you've studied</li>
              <li>Review questions you've asked</li>
              <li>Check quiz scores and performance</li>
              <li>Track practice problems completed</li>
              <li>All activities are timestamped and categorized</li>
            </ul>
          </div>
        </div>

        {/* Model Selection */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">🤖 AI Model Selection</h2>
          <div className="text-slate-300">
            <p className="mb-4">Choose from different Ollama models in the dashboard header:</p>
            <ul className="list-disc list-inside ml-4 text-slate-400">
              <li><strong>Gemma 3 1B (Recommended):</strong> Best balance of speed and accuracy</li>
              <li><strong>Qwen 2.5 0.5B:</strong> Ultra-fast, minimal resource usage</li>
              <li><strong>TinyLlama:</strong> Smallest model, quickest responses</li>
            </ul>
          </div>
        </div>

        {/* Setup */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">⚙️ Setup & Requirements</h2>
          <div className="text-slate-300 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Installing Ollama</h3>
              <ol className="list-decimal list-inside ml-4 text-slate-400 space-y-1">
                <li>Download Ollama from <a href="https://ollama.ai" target="_blank" className="text-blue-400 hover:underline">ollama.ai</a></li>
                <li>Install and start Ollama service</li>
                <li>Pull recommended model: <code className="bg-slate-800 px-2 py-1 rounded">ollama pull gemma3:1b</code></li>
                <li>Pull other models as needed (tinyllama, qwen2.5:0.5b)</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Troubleshooting</h3>
              <ul className="list-disc list-inside ml-4 text-slate-400">
                <li>If you see connection errors, ensure Ollama is running</li>
                <li>Check that models are installed: <code className="bg-slate-800 px-2 py-1 rounded">ollama list</code></li>
                <li>Fallback content will display if Ollama is unavailable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">💡 Tips for Best Experience</h2>
          <ul className="list-disc list-inside ml-4 text-slate-300 space-y-2">
            <li>Complete tasks daily to maintain your learning streak</li>
            <li>Try different AI models to find what works best for you</li>
            <li>Use the Quiz tab to test your knowledge regularly</li>
            <li>Practice problems help reinforce learning</li>
            <li>Check your history to review what you've learned</li>
            <li>For young children, use the Subjects tab with colorful content</li>
            <li>Ask specific questions in Chat for better answers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
