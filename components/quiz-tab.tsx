"use client"

import { useState, useEffect } from "react"
import { useApp } from "./app-context"
import { generateQuiz } from "@/lib/ollama"

interface QuizQuestion {
  question: string
  options: string[]
  answer: string
  explanation: string
}

export function QuizTab() {
  const { isLoading, setIsLoading, selectedModel, updateStats, addToHistory } = useApp()
  const [topic, setTopic] = useState("")
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const getMockQuestions = () => {
    const pythonQuestions = {
      easy: [
        { q: "What is a variable in Python?", opts: ["A container for storing data", "A function", "A loop", "A class"], ans: "A container for storing data" },
        { q: "Which keyword is used to define a function?", opts: ["def", "function", "func", "define"], ans: "def" },
        { q: "What is a list in Python?", opts: ["Ordered collection", "Unordered collection", "Single value", "None"], ans: "Ordered collection" },
        { q: "Which operator is used for exponentiation?", opts: ["**", "^", "exp", "pow"], ans: "**" },
        { q: "What does 'len()' function do?", opts: ["Returns length", "Returns type", "Returns value", "Returns index"], ans: "Returns length" },
        { q: "What is the output of print('Hello')?", opts: ["Hello", "'Hello'", "Error", "None"], ans: "Hello" },
        { q: "Which data type is mutable?", opts: ["List", "String", "Tuple", "Integer"], ans: "List" },
      ],
      medium: [
        { q: "What is list comprehension?", opts: ["Concise way to create lists", "List method", "List function", "List operator"], ans: "Concise way to create lists" },
        { q: "What does 'self' represent in a class?", opts: ["Instance of class", "Class name", "Method name", "Variable"], ans: "Instance of class" },
        { q: "What is a lambda function?", opts: ["Anonymous function", "Named function", "Class method", "Built-in function"], ans: "Anonymous function" },
        { q: "What is the difference between '==' and 'is'?", opts: ["== compares values, is compares identity", "Both are same", "is compares values", "== is faster"], ans: "== compares values, is compares identity" },
        { q: "What is a decorator in Python?", opts: ["Function that modifies another function", "Class method", "Variable type", "Loop structure"], ans: "Function that modifies another function" },
        { q: "What does *args do in function parameters?", opts: ["Accepts variable arguments", "Multiplies arguments", "Creates pointer", "Defines array"], ans: "Accepts variable arguments" },
      ],
      hard: [
        { q: "What is the GIL in Python?", opts: ["Global Interpreter Lock", "General Input Library", "Global Index List", "Generic Interface Layer"], ans: "Global Interpreter Lock" },
        { q: "What is metaclass in Python?", opts: ["Class of a class", "Meta information", "Class method", "Abstract class"], ans: "Class of a class" },
        { q: "What is the difference between deepcopy and copy?", opts: ["deepcopy copies nested objects", "Both are same", "copy is faster", "deepcopy is deprecated"], ans: "deepcopy copies nested objects" },
        { q: "What is a generator in Python?", opts: ["Function that yields values", "Class type", "Loop structure", "Data type"], ans: "Function that yields values" },
        { q: "What does __init__.py do?", opts: ["Makes directory a package", "Initializes variables", "Imports modules", "Defines classes"], ans: "Makes directory a package" },
        { q: "What is monkey patching?", opts: ["Dynamic modification of class/module", "Error handling", "Testing method", "Code optimization"], ans: "Dynamic modification of class/module" },
      ]
    }
    
    const genericQuestions = {
      easy: [
        { q: `What is the basic syntax in ${topic}?`, opts: ["Structured format", "Random format", "No format", "Complex format"], ans: "Structured format" },
        { q: `How do you declare variables in ${topic}?`, opts: ["Using assignment", "Using declaration", "Using initialization", "Using definition"], ans: "Using assignment" },
        { q: `What are data types in ${topic}?`, opts: ["Categories of data", "Data values", "Data functions", "Data classes"], ans: "Categories of data" },
        { q: `What is a loop in ${topic}?`, opts: ["Repeated execution", "Single execution", "No execution", "Conditional execution"], ans: "Repeated execution" },
        { q: `What is a function in ${topic}?`, opts: ["Reusable code block", "Single line code", "Variable", "Data type"], ans: "Reusable code block" },
        { q: `What is a conditional statement in ${topic}?`, opts: ["Decision making structure", "Loop structure", "Function", "Variable"], ans: "Decision making structure" },
        { q: `What is an operator in ${topic}?`, opts: ["Symbol for operations", "Variable", "Function", "Data type"], ans: "Symbol for operations" },
      ],
      medium: [
        { q: `What is object-oriented programming in ${topic}?`, opts: ["Programming paradigm using objects", "Functional programming", "Procedural programming", "Logic programming"], ans: "Programming paradigm using objects" },
        { q: `What is inheritance in ${topic}?`, opts: ["Deriving properties from parent", "Creating objects", "Defining functions", "Using variables"], ans: "Deriving properties from parent" },
        { q: `What is polymorphism in ${topic}?`, opts: ["Multiple forms of same entity", "Single form", "Data type", "Function type"], ans: "Multiple forms of same entity" },
        { q: `What is encapsulation in ${topic}?`, opts: ["Bundling data and methods", "Separating data", "Creating classes", "Defining variables"], ans: "Bundling data and methods" },
        { q: `What is abstraction in ${topic}?`, opts: ["Hiding implementation details", "Showing all details", "Creating objects", "Defining methods"], ans: "Hiding implementation details" },
        { q: `What is recursion in ${topic}?`, opts: ["Function calling itself", "Loop structure", "Conditional statement", "Variable assignment"], ans: "Function calling itself" },
      ],
      hard: [
        { q: `What is time complexity in ${topic}?`, opts: ["Measure of algorithm efficiency", "Execution time", "Code length", "Memory usage"], ans: "Measure of algorithm efficiency" },
        { q: `What is space complexity in ${topic}?`, opts: ["Memory used by algorithm", "Code size", "Execution time", "Variable count"], ans: "Memory used by algorithm" },
        { q: `What is dynamic programming in ${topic}?`, opts: ["Optimization technique", "Variable programming", "Runtime programming", "Static programming"], ans: "Optimization technique" },
        { q: `What is a design pattern in ${topic}?`, opts: ["Reusable solution template", "Code structure", "Variable pattern", "Function pattern"], ans: "Reusable solution template" },
        { q: `What is concurrency in ${topic}?`, opts: ["Multiple tasks execution", "Single task execution", "Sequential execution", "Parallel execution"], ans: "Multiple tasks execution" },
        { q: `What is memory management in ${topic}?`, opts: ["Allocation and deallocation", "Variable storage", "Function storage", "Code storage"], ans: "Allocation and deallocation" },
      ]
    }
    
    const questions = topic.toLowerCase().includes('python') ? pythonQuestions : genericQuestions
    const result = []
    
    const easyCount = 7
    const mediumCount = 7
    const hardCount = 6
    
    for (let i = 0; i < easyCount; i++) {
      const q = questions.easy[i % questions.easy.length]
      result.push({
        question: `[Easy] ${q.q}`,
        options: q.opts,
        answer: q.ans,
        explanation: `${q.ans} is the correct answer.`
      })
    }
    
    for (let i = 0; i < mediumCount; i++) {
      const q = questions.medium[i % questions.medium.length]
      result.push({
        question: `[Medium] ${q.q}`,
        options: q.opts,
        answer: q.ans,
        explanation: `${q.ans} is the correct answer.`
      })
    }
    
    for (let i = 0; i < hardCount; i++) {
      const q = questions.hard[i % questions.hard.length]
      result.push({
        question: `[Hard] ${q.q}`,
        options: q.opts,
        answer: q.ans,
        explanation: `${q.ans} is the correct answer.`
      })
    }
    
    return result
  }

  const loadQuiz = async () => {
    if (!topic.trim()) return
    setIsLoading(true)
    const mockQuestions = getMockQuestions()
    try {
      const result = await generateQuiz(topic, selectedModel, 20)
      console.log('Quiz result:', result)
      
      if (!result.success || result.error) {
        console.log('Ollama not available, using mock questions')
        setQuestions(mockQuestions)
        setCurrentIndex(0)
        setSelectedAnswers({})
        setShowResults(false)
        addToHistory('quiz', { topic, questionCount: 20 })
        setIsLoading(false)
        return
      }

      let parsed
      try {
        parsed = typeof result.raw === 'object' && result.raw ? result.raw : JSON.parse(result.output)
      } catch (e) {
        console.log('Parse error, using mock:', e)
        parsed = { questions: mockQuestions }
      }
      const finalQuestions = parsed.questions && parsed.questions.length > 0 ? parsed.questions : mockQuestions
      console.log('Final questions:', finalQuestions)
      setQuestions(finalQuestions)
      setCurrentIndex(0)
      setSelectedAnswers({})
      setShowResults(false)
      addToHistory('quiz', { topic, questionCount: finalQuestions.length })
    } catch (error) {
      console.error("Quiz error:", error)
      setQuestions(mockQuestions)
    }
    setIsLoading(false)
  }

  const handleSubmit = () => {
    setShowResults(true)
    const correctCount = questions.filter((q, i) => selectedAnswers[i] === q.answer).length
    updateStats()
    addToHistory('quiz_completed', { topic, score: correctCount, total: questions.length, model: selectedModel })
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col gap-4 p-6">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic (e.g., Python, Solar System, History)..."
          className="px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white"
        />
        <button
          onClick={loadQuiz}
          disabled={isLoading || !topic.trim()}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium disabled:opacity-50"
        >
          {isLoading ? "Generating 20 Questions..." : "Generate Quiz"}
        </button>
      </div>
    )
  }

  const question = questions[currentIndex]
  const selectedAnswer = selectedAnswers[currentIndex]

  return (
    <div
      className="space-y-6 p-6 rounded-lg border border-blue-500/20"
      style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}
    >
      {/* Question */}
      <div>
        <p className="text-slate-400 text-sm">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <h3 className="text-xl font-semibold mt-2 text-blue-100">{question.question}</h3>
      </div>

      {/* Answers */}
      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedAnswers({ ...selectedAnswers, [currentIndex]: option })}
            className={`w-full p-3 rounded-lg text-left transition-all ${
              selectedAnswer === option
                ? "bg-blue-600/50 border border-blue-500/60 text-blue-100"
                : "bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 disabled:opacity-30"
          >
            Previous
          </button>
          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-medium"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white"
            >
              Next
            </button>
          )}
        </div>
        <button
          onClick={() => {
            setQuestions([])
            setTopic("")
            setCurrentIndex(0)
            setSelectedAnswers({})
            setShowResults(false)
          }}
          className="px-4 py-2 rounded-lg bg-red-600/50 text-white hover:bg-red-600/70"
        >
          New Quiz
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30">
          <p className="text-slate-300 font-semibold">Quiz Completed!</p>
          <p className="text-green-400 mt-2">Score: {questions.filter((q, i) => selectedAnswers[i] === q.answer).length} / {questions.length}</p>
          <p className="text-slate-400 text-sm mt-1">Evaluated by: {selectedModel}</p>
        </div>
      )}
    </div>
  )
}
