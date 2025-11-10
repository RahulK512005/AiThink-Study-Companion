"use client"

import { useState } from "react"
import { useApp } from "./app-context"
import { generatePractice } from "@/lib/ollama"

interface Problem {
  question: string
  type: "mcq" | "input"
  options?: string[]
  answer: string
  solution: string
}

export function PracticeTab() {
  const { isLoading, setIsLoading, selectedModel, updateStats, addToHistory } = useApp()
  const [topic, setTopic] = useState("")
  const [problems, setProblems] = useState<Problem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({})

  const loadPractice = async () => {
    if (!topic.trim()) return
    setIsLoading(true)
    const mockProblems = getMockProblems()
    try {
      const result = await generatePractice(topic, selectedModel)
      console.log('Practice result:', result)
      
      if (!result.success || result.error) {
        console.log('Ollama not available, using mock problems')
        setProblems(mockProblems)
        setCurrentIndex(0)
        setUserAnswers({})
        setShowSolution({})
        addToHistory('practice', { topic })
        setIsLoading(false)
        return
      }

      let parsed
      try {
        parsed = typeof result.raw === 'object' && result.raw ? result.raw : JSON.parse(result.output)
      } catch (e) {
        console.log('Parse error, using mock:', e)
        parsed = { problems: mockProblems }
      }
      const finalProblems = parsed.problems && parsed.problems.length > 0 ? parsed.problems : mockProblems
      console.log('Final problems:', finalProblems)
      setProblems(finalProblems)
      setCurrentIndex(0)
      setUserAnswers({})
      setShowSolution({})
      addToHistory('practice', { topic })
    } catch (error) {
      console.error('Practice error:', error)
      setProblems(mockProblems)
    }
    setIsLoading(false)
  }

  const getMockProblems = () => {
    if (topic.toLowerCase().includes('python')) {
      return [
        { question: "[Easy] Write a function to add two numbers", type: "input" as const, answer: "def add(a, b): return a + b", solution: "Define a function using 'def' keyword that takes two parameters and returns their sum." },
        { question: "[Easy] What will print(5 * 2) output?", type: "mcq" as const, options: ["10", "52", "7", "Error"], answer: "10", solution: "The * operator performs multiplication, so 5 * 2 = 10" },
        { question: "[Medium] Create a list comprehension for squares of 1-5", type: "input" as const, answer: "[x**2 for x in range(1, 6)]", solution: "List comprehension provides a concise way to create lists. Use [expression for item in iterable]." },
        { question: "[Medium] What is the output of len('hello')?", type: "mcq" as const, options: ["5", "4", "6", "Error"], answer: "5", solution: "len() returns the number of characters in a string. 'hello' has 5 characters." },
        { question: "[Hard] Implement a decorator that times function execution", type: "input" as const, answer: "def timer(func): import time; def wrapper(*args): start=time.time(); result=func(*args); print(time.time()-start); return result; return wrapper", solution: "Decorators wrap functions to add functionality. Use nested functions and *args for flexibility." },
      ]
    }
    return [
      { question: `[Easy] What is the basic concept of ${topic}?`, type: "input" as const, answer: "Core principle", solution: `The fundamental concept involves understanding the core principles of ${topic}.` },
      { question: `[Easy] Which is correct about ${topic}?`, type: "mcq" as const, options: ["It has structure", "It has no rules", "It's random", "It's undefined"], answer: "It has structure", solution: `${topic} follows structured principles and rules.` },
      { question: `[Medium] Apply ${topic} to solve a problem`, type: "input" as const, answer: "Solution", solution: `Apply the concepts of ${topic} systematically to reach the solution.` },
      { question: `[Medium] What is an advanced concept in ${topic}?`, type: "mcq" as const, options: ["Complex patterns", "Simple patterns", "No patterns", "Random patterns"], answer: "Complex patterns", solution: `Advanced concepts involve understanding complex patterns and relationships.` },
      { question: `[Hard] Optimize a solution using ${topic} principles`, type: "input" as const, answer: "Optimized solution", solution: `Use advanced techniques and algorithms to optimize the solution efficiently.` },
    ]
  }

  const handleSubmitAnswer = () => {
    setShowSolution({ ...showSolution, [currentIndex]: true })
    updateStats()
    addToHistory('practice_answer', { topic, problem: currentIndex + 1, model: selectedModel })
  }

  if (problems.length === 0) {
    return (
      <div className="flex flex-col gap-4 p-6">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic (e.g., Python, Math, Physics)..."
          className="px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white"
        />
        <button
          onClick={loadPractice}
          disabled={isLoading || !topic.trim()}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Practice Problems"}
        </button>
      </div>
    )
  }

  const problem = problems[currentIndex]
  const userAnswer = userAnswers[currentIndex]

  return (
    <div className="space-y-6 p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
      <div>
        <p className="text-slate-400 text-sm">Problem {currentIndex + 1} of {problems.length}</p>
        <h3 className="text-xl font-semibold mt-2 text-blue-100">{problem.question}</h3>
      </div>

      {problem.type === "mcq" && problem.options ? (
        <div className="space-y-2">
          {problem.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setUserAnswers({ ...userAnswers, [currentIndex]: option })}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                userAnswer === option
                  ? "bg-blue-600/50 border border-blue-500/60 text-blue-100"
                  : "bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <input
          type="text"
          placeholder="Type your answer..."
          value={userAnswer || ""}
          onChange={(e) => setUserAnswers({ ...userAnswers, [currentIndex]: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white"
        />
      )}

      <button
        onClick={handleSubmitAnswer}
        disabled={!userAnswer}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-medium disabled:opacity-50"
      >
        Check Answer
      </button>

      {showSolution[currentIndex] && (
        <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-500/30">
          <p className={`font-semibold ${userAnswer === problem.answer ? 'text-green-400' : 'text-yellow-400'}`}>
            {userAnswer === problem.answer ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-green-400 mt-2">Correct Answer: {problem.answer}</p>
          <p className="text-slate-300 mt-2">{problem.solution}</p>
          <p className="text-slate-400 text-sm mt-2">Evaluated by: {selectedModel}</p>
        </div>
      )}

      <div className="flex gap-4 justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 disabled:opacity-30"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(problems.length - 1, currentIndex + 1))}
            disabled={currentIndex === problems.length - 1}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-30"
          >
            Next
          </button>
        </div>
        <button
          onClick={() => {
            setProblems([])
            setTopic("")
            setCurrentIndex(0)
            setUserAnswers({})
            setShowSolution({})
          }}
          className="px-4 py-2 rounded-lg bg-red-600/50 text-white hover:bg-red-600/70"
        >
          New Topic
        </button>
      </div>
    </div>
  )
}
