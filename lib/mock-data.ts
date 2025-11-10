// Mock data for when Ollama is not available
export const mockQuizzes: Record<string, any> = {
  Mathematics: {
    questions: [
      {
        type: "mcq",
        question: "What is the derivative of x²?",
        options: ["2x", "x", "2", "x²"],
        answer: "2x",
        explanation: "Using the power rule, the derivative of x² is 2x.",
      },
      {
        type: "mcq",
        question: "What is 15% of 80?",
        options: ["12", "10", "15", "8"],
        answer: "12",
        explanation: "15% of 80 = 0.15 × 80 = 12",
      },
      {
        type: "short",
        question: "Solve for x: 2x + 5 = 13",
        answer: "4",
        explanation: "2x = 13 - 5 = 8, so x = 4",
      },
      {
        type: "mcq",
        question: "What is the square root of 144?",
        options: ["12", "14", "11", "13"],
        answer: "12",
        explanation: "12 × 12 = 144, so √144 = 12",
      },
      {
        type: "short",
        question: "What is the sum of angles in a triangle?",
        answer: "180 degrees",
        explanation: "The sum of all interior angles in any triangle is always 180 degrees.",
      },
    ],
  },
  Physics: {
    questions: [
      {
        type: "mcq",
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        answer: "Newton",
        explanation: "The Newton (N) is the standard unit of force in the SI system.",
      },
      {
        type: "short",
        question: "Define velocity.",
        answer: "The rate of change of displacement with respect to time",
        explanation:
          "Velocity is a vector quantity that measures how fast something is moving in a specific direction.",
      },
      {
        type: "mcq",
        question: "What is the speed of light?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
        answer: "3 × 10⁸ m/s",
        explanation: "The speed of light in vacuum is approximately 3 × 10⁸ meters per second.",
      },
      {
        type: "mcq",
        question: "What does Newton's first law state?",
        options: [
          "F = ma",
          "An object at rest stays at rest unless acted upon by a force",
          "Energy cannot be created or destroyed",
          "For every action, there is an equal and opposite reaction",
        ],
        answer: "An object at rest stays at rest unless acted upon by a force",
        explanation: "Newton's first law describes inertia and how objects resist changes in motion.",
      },
      {
        type: "short",
        question: "What is the formula for kinetic energy?",
        answer: "KE = ½mv²",
        explanation: "Kinetic energy depends on both the mass and the square of velocity of an object.",
      },
    ],
  },
  History: {
    questions: [
      {
        type: "mcq",
        question: "In what year did World War II end?",
        options: ["1945", "1944", "1946", "1943"],
        answer: "1945",
        explanation: "World War II ended in 1945 with the surrender of Japan in September.",
      },
      {
        type: "short",
        question: "Who was the first President of the United States?",
        answer: "George Washington",
        explanation: "George Washington served as the first President of the United States from 1789 to 1797.",
      },
      {
        type: "mcq",
        question: "Which empire built the Great Wall of China?",
        options: ["Ming Dynasty", "Qin Dynasty", "Han Dynasty", "Tang Dynasty"],
        answer: "Ming Dynasty",
        explanation: "The Ming Dynasty (1368-1644) built most of the Great Wall of China that stands today.",
      },
      {
        type: "mcq",
        question: "What was the Renaissance primarily focused on?",
        options: ["Religious reform", "Humanism and classical learning", "Industrial innovation", "Colonial expansion"],
        answer: "Humanism and classical learning",
        explanation:
          "The Renaissance was characterized by a renewed interest in classical Greek and Roman knowledge and humanism.",
      },
      {
        type: "short",
        question: "In what year did the American Declaration of Independence occur?",
        answer: "1776",
        explanation: "The Declaration of Independence was signed on July 4, 1776, in Philadelphia.",
      },
    ],
  },
}

export const mockExplanations: Record<string, string> = {
  Mathematics: `Mathematics is the study of numbers, quantities, shapes, and patterns. It encompasses various branches like algebra (studying equations and variables), geometry (studying shapes and spaces), calculus (studying rates of change), and statistics (studying data analysis). Mathematics forms the foundation for many fields including physics, engineering, economics, and computer science. Through mathematical reasoning and problem-solving, we develop logical thinking skills applicable to real-world situations. Key concepts include arithmetic operations, functions, proofs, and mathematical modeling.`,

  Physics: `Physics is the natural science that studies matter, energy, and forces. It seeks to understand how the universe works at all scales, from the smallest subatomic particles to the largest galaxies. Major branches include mechanics (motion and forces), thermodynamics (heat and energy), electromagnetism (electric and magnetic fields), optics (light behavior), and modern physics (quantum mechanics and relativity). Physics relies heavily on experimentation and mathematical modeling to test theories and make predictions. Understanding physics helps us develop technologies like electricity, transportation, communication, and renewable energy.`,

  History: `History is the study of past human events, societies, and civilizations. It examines how people lived, what they believed, what conflicts they faced, and how societies evolved over time. By studying history, we learn from past successes and failures, understand different cultures and perspectives, and gain insight into how current events are shaped by historical context. Major historical periods include Ancient History, Medieval History, Renaissance, Age of Exploration, Industrial Revolution, and Modern History. History helps us develop critical thinking skills and understand the complexities of human civilization.`,
}

export const mockChatResponses: Record<string, string[]> = {
  Mathematics: [
    "In algebra, variables represent unknown values that we solve for using equations and operations. For example, in 2x + 5 = 13, we're trying to find what value of x makes the equation true.",
    "Geometry deals with shapes, sizes, and properties of figures. It helps us understand space and can be applied to real-world problems like construction, navigation, and design.",
    "Calculus is about studying rates of change and areas under curves. It's essential for physics, engineering, and economics because it helps us understand how things change over time.",
    "Statistics helps us collect, analyze, and interpret data to make informed decisions. It's used in everything from medical research to sports analysis to predicting weather patterns.",
  ],
  Physics: [
    "Energy cannot be created or destroyed, only transformed from one form to another. This is the law of conservation of energy, one of the most fundamental principles in physics.",
    "Force is a push or pull that can change an object's motion, direction, or shape. Newton's laws describe how forces affect objects and their movement.",
    "Waves are disturbances that transfer energy from one place to another. Sound waves travel through air, light waves travel through space, and water waves travel across oceans.",
    "The atomic structure consists of a nucleus containing protons and neutrons, surrounded by electrons in shells. Different arrangements create different elements with unique properties.",
  ],
  History: [
    "The Industrial Revolution (1760-1840) transformed society through mechanization and factory systems, shifting most work from farms to cities and changing how products were manufactured.",
    "The Renaissance (14th-17th centuries) marked a rebirth of classical learning and artistic achievement, bridging the Medieval and Modern periods with renewed interest in human potential.",
    "The Enlightenment emphasized reason, science, and individual rights, leading to major changes in philosophy, politics, and science that influenced democratic revolutions.",
    "Colonial expansion by European powers spread across the globe from the 15th-18th centuries, creating global trade networks but also leading to exploitation and cultural conflicts.",
  ],
}

export function getRandomMockResponse(): any {
  // prefer chat-style mock responses if available
  if (Array.isArray(mockChatResponses) && mockChatResponses.length) {
    return mockChatResponses[Math.floor(Math.random() * mockChatResponses.length)];
  }
  // fall back to quiz objects if present
  if (Array.isArray(mockQuizzes) && mockQuizzes.length) {
    return mockQuizzes[0];
  }
  // fall back to explanations if present
  if (Array.isArray(mockExplanations) && mockExplanations.length) {
    return mockExplanations[0];
  }
  return "Ollama unavailable (no mock data)";
}
