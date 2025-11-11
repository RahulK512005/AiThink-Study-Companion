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

// Comprehensive knowledge base for offline AI responses
export const knowledgeBase: Record<string, string> = {
  // Geography & Capitals
  "capital of france": "The capital of France is Paris. It's known for the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and rich cultural history. Paris is also called the 'City of Light' and is a major center for art, fashion, and cuisine.",
  "capital of india": "The capital of India is New Delhi. It's home to historic monuments like India Gate, Red Fort, and Qutub Minar. New Delhi serves as the political and administrative center of India.",
  "capital of usa": "The capital of the United States is Washington, D.C. It houses the White House, Capitol Building, and Supreme Court. The city was specifically designed to be the nation's capital.",
  "capital of japan": "The capital of Japan is Tokyo. It's the world's most populous metropolitan area, known for its blend of traditional culture and cutting-edge technology, including temples, skyscrapers, and advanced transportation.",
  
  // Science - Photosynthesis
  "photosynthesis": "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose (food) and oxygen. It occurs in chloroplasts using chlorophyll (green pigment). The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. This process is essential for life on Earth as it produces oxygen and forms the base of food chains.",
  
  // Science - Cells
  "cell": "A cell is the basic unit of life. There are two types: prokaryotic (no nucleus, like bacteria) and eukaryotic (has nucleus, like animal and plant cells). Key organelles include: nucleus (genetic material), mitochondria (energy production), ribosomes (protein synthesis), and cell membrane (controls what enters/exits).",
  
  // Physics - Car Engine
  "car engine": "A car engine works through internal combustion. The process: 1) Intake: Air and fuel enter the cylinder. 2) Compression: Piston compresses the mixture. 3) Combustion: Spark plug ignites it, creating explosion. 4) Exhaust: Gases exit. This cycle repeats thousands of times per minute, converting chemical energy into mechanical motion that turns the wheels.",
  
  // Physics - Quantum
  "quantum physics": "Quantum physics studies matter and energy at atomic and subatomic levels. Key concepts: 1) Wave-particle duality: Particles can behave as waves and vice versa. 2) Uncertainty principle: You can't know both position and momentum precisely. 3) Superposition: Particles exist in multiple states simultaneously until observed. 4) Entanglement: Particles can be connected across distances.",
  
  // Solar System
  "solar system": "The Solar System consists of the Sun and everything that orbits it: 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), dwarf planets (like Pluto), moons, asteroids, and comets. The Sun contains 99.8% of the system's mass. Planets are divided into terrestrial (rocky: Mercury-Mars) and gas giants (Jupiter-Neptune).",
  
  // Programming - Python
  "python programming": "Python is a high-level, interpreted programming language known for readability. Example function:\n\ndef greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('World'))\n\nPython is used for web development (Django, Flask), data science (pandas, NumPy), AI/ML (TensorFlow, PyTorch), automation, and more. It's beginner-friendly with simple syntax.",
  
  // Math - Algebra
  "algebra": "Algebra uses symbols (usually letters) to represent numbers in equations. Example: Solve 2x + 5 = 13. Steps: 1) Subtract 5 from both sides: 2x = 8. 2) Divide by 2: x = 4. Key concepts include variables, expressions, equations, functions, and polynomials. Algebra is fundamental for advanced math and real-world problem-solving.",
  
  // Biology - DNA
  "dna": "DNA (Deoxyribonucleic Acid) is the molecule that carries genetic instructions. Structure: Double helix with base pairs (A-T, G-C). DNA contains genes that code for proteins. The sequence of bases determines traits. DNA replication allows cells to divide and pass genetic information to offspring. It's found in the nucleus of cells.",
  
  // Chemistry - Periodic Table
  "periodic table": "The periodic table organizes 118 chemical elements by atomic number, electron configuration, and properties. Rows are periods, columns are groups. Elements in the same group have similar properties. Major categories: metals (left), nonmetals (right), metalloids (in between). Key elements: H (hydrogen), C (carbon), O (oxygen), Fe (iron), Au (gold).",
  
  // History - World War
  "world war 2": "World War II (1939-1945) was the deadliest conflict in history. Axis powers (Germany, Italy, Japan) fought Allied powers (USA, UK, USSR, France). Key events: Holocaust, Pearl Harbor, D-Day, atomic bombs on Hiroshima and Nagasaki. The war ended with Allied victory, leading to the United Nations and the Cold War era.",
  
  // Technology - Internet
  "how internet works": "The Internet is a global network of computers. Data travels in packets through routers and servers. Key components: 1) ISP (Internet Service Provider) connects you. 2) DNS (Domain Name System) translates website names to IP addresses. 3) HTTP/HTTPS protocols transfer web pages. 4) TCP/IP ensures reliable data delivery. Fiber optics and satellites enable high-speed connections.",
  
  // Space - Black Holes
  "black hole": "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape. Formed when massive stars collapse. Key features: Event horizon (point of no return), singularity (infinite density center). Types: stellar (from stars), supermassive (at galaxy centers). Black holes warp space and time around them.",
  
  // Climate
  "climate change": "Climate change refers to long-term shifts in global temperatures and weather patterns. Main cause: greenhouse gases (CO₂, methane) from burning fossil fuels trap heat. Effects: rising sea levels, extreme weather, ecosystem disruption. Solutions: renewable energy (solar, wind), energy efficiency, reforestation, and reducing emissions.",
  
  // Human Body
  "human heart": "The heart is a muscular organ that pumps blood throughout the body. It has 4 chambers: 2 atria (receive blood) and 2 ventricles (pump blood). Right side pumps to lungs (oxygenation), left side pumps to body. Average heart beats 100,000 times/day, pumping 2,000 gallons of blood. Coronary arteries supply the heart itself with blood.",
  
  // Economics
  "supply and demand": "Supply and demand is the fundamental economic model. Supply: quantity producers are willing to sell at various prices. Demand: quantity consumers want to buy. Equilibrium: where supply meets demand, determining market price. If demand increases (supply constant), price rises. If supply increases (demand constant), price falls.",
  
  // Literature
  "shakespeare": "William Shakespeare (1564-1616) was an English playwright and poet, considered the greatest writer in English. Famous works: Romeo and Juliet, Hamlet, Macbeth, A Midsummer Night's Dream. He wrote 37 plays and 154 sonnets. Shakespeare invented over 1,700 words and phrases still used today. His works explore human nature, love, power, and tragedy.",
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

// Intelligent response matcher for offline AI
export function getIntelligentResponse(query: string): string {
  const lowerQuery = query.toLowerCase().trim();
  
  // Direct keyword matching
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }
  
  // Fuzzy matching for common variations
  if (lowerQuery.includes("capital") && lowerQuery.includes("paris")) return knowledgeBase["capital of france"];
  if (lowerQuery.includes("photosyn")) return knowledgeBase["photosynthesis"];
  if (lowerQuery.includes("engine") || lowerQuery.includes("car work")) return knowledgeBase["car engine"];
  if (lowerQuery.includes("quantum")) return knowledgeBase["quantum physics"];
  if (lowerQuery.includes("planet") || lowerQuery.includes("solar")) return knowledgeBase["solar system"];
  if (lowerQuery.includes("python") || lowerQuery.includes("code")) return knowledgeBase["python programming"];
  if (lowerQuery.includes("algebra") || lowerQuery.includes("solve")) return knowledgeBase["algebra"];
  if (lowerQuery.includes("dna") || lowerQuery.includes("gene")) return knowledgeBase["dna"];
  if (lowerQuery.includes("periodic") || lowerQuery.includes("element")) return knowledgeBase["periodic table"];
  if (lowerQuery.includes("world war") || lowerQuery.includes("ww2")) return knowledgeBase["world war 2"];
  if (lowerQuery.includes("internet") || lowerQuery.includes("web")) return knowledgeBase["how internet works"];
  if (lowerQuery.includes("black hole") || lowerQuery.includes("space")) return knowledgeBase["black hole"];
  if (lowerQuery.includes("climate") || lowerQuery.includes("global warming")) return knowledgeBase["climate change"];
  if (lowerQuery.includes("heart") || lowerQuery.includes("cardiovascular")) return knowledgeBase["human heart"];
  if (lowerQuery.includes("supply") || lowerQuery.includes("demand") || lowerQuery.includes("economics")) return knowledgeBase["supply and demand"];
  if (lowerQuery.includes("shakespeare") || lowerQuery.includes("hamlet")) return knowledgeBase["shakespeare"];
  if (lowerQuery.includes("cell") && lowerQuery.includes("biology")) return knowledgeBase["cell"];
  
  // Fallback to category responses
  if (lowerQuery.includes("math") || lowerQuery.includes("calculate")) {
    return mockChatResponses.Mathematics[Math.floor(Math.random() * mockChatResponses.Mathematics.length)];
  }
  if (lowerQuery.includes("physics") || lowerQuery.includes("force") || lowerQuery.includes("energy")) {
    return mockChatResponses.Physics[Math.floor(Math.random() * mockChatResponses.Physics.length)];
  }
  if (lowerQuery.includes("history") || lowerQuery.includes("war") || lowerQuery.includes("revolution")) {
    return mockChatResponses.History[Math.floor(Math.random() * mockChatResponses.History.length)];
  }
  
  // Generic helpful response
  return `I'm an offline AI tutor. I can help with:\n\n📚 Science: Photosynthesis, cells, DNA, solar system, quantum physics\n🔬 Physics: Car engines, energy, forces, black holes\n🌍 Geography: World capitals and countries\n💻 Programming: Python, coding concepts\n📐 Math: Algebra, calculus, geometry\n📖 History: World wars, revolutions\n\nTry asking: "What is the capital of France?" or "Explain photosynthesis"`;
}

export function getRandomMockResponse(): any {
  const allResponses = Object.values(mockChatResponses).flat();
  return allResponses[Math.floor(Math.random() * allResponses.length)];
}
