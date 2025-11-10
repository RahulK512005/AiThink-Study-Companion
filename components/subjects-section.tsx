"use client"

import { useState } from "react"
import { useApp } from "./app-context"
import { queryOllama } from "@/lib/ollama"

const educationLevels = {
  "LKG-UKG": ["Alphabets", "Numbers", "Colors", "Shapes", "Rhymes"],
  "1-5": ["English", "Math", "Science", "Social Studies", "EVS"],
  "6-10": ["English", "Math", "Science", "Social Science", "Computer Science"],
  "11-12": {
    "Science": ["Physics", "Chemistry", "Biology", "Math", "Computer Science"],
    "Commerce": ["Accountancy", "Business Studies", "Economics", "Math"],
    "Arts": ["History", "Geography", "Political Science", "Economics", "Psychology"]
  },
  "Undergraduate": {
    "Engineering": ["Computer Science", "Mechanical", "Electrical", "Civil", "Electronics"],
    "Medical": ["MBBS", "BDS", "Nursing", "Pharmacy"],
    "Arts": ["BA English", "BA History", "BA Psychology"],
    "Commerce": ["B.Com", "BBA", "CA Foundation"],
    "Science": ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Math"]
  },
  "Postgraduate": {
    "Engineering": ["M.Tech CS", "M.Tech Mechanical", "M.Tech Civil"],
    "Medical": ["MD", "MS", "M.Pharm"],
    "Arts": ["MA English", "MA History", "MA Psychology"],
    "Commerce": ["M.Com", "MBA", "CA Final"],
    "Science": ["M.Sc Physics", "M.Sc Chemistry", "M.Sc Math"]
  },
  "PhD": ["Computer Science", "Physics", "Chemistry", "Biology", "Mathematics", "Engineering", "Medicine", "Social Sciences"]
}



export function SubjectsSection() {
  const { selectedModel, isLoading, setIsLoading, addToHistory } = useApp()
  const [selectedLevel, setSelectedLevel] = useState<string>("LKG-UKG")
  const [selectedDomain, setSelectedDomain] = useState<string>("")
  const [selectedSubject, setSelectedSubject] = useState<string>("")
  const [messages, setMessages] = useState<{role: string, content: string}[]>([])
  const [userInput, setUserInput] = useState("")

  const getKidsFallbackContent = () => {
    const content: Record<string, string> = {
      "Alphabets": `🎨 The Magical Alphabet Adventure! 🎨

🍎 A is for Apple - Little Annie ate a red apple!
🎈 B is for Balloon - Bobby's blue balloon flew high!
🐱 C is for Cat - Cute cat says meow!
🐶 D is for Dog - Danny's dog digs in the dirt!
🐘 E is for Elephant - Eddie the elephant is enormous!
🌸 F is for Flower - Fiona found five flowers!
🍇 G is for Grapes - Gina loves green grapes!
🏠 H is for House - Harry lives in a happy house!
🍦 I is for Ice cream - Izzy ate ice cream!
🤹 J is for Jump - Jack can jump very high!
🪁 K is for Kite - Katie's kite flies in the sky!
🦁 L is for Lion - Leo the lion roars loud!
🌙 M is for Moon - Molly sees the moon at night!
🎵 N is for Notes - Nina sings nice notes!
🍊 O is for Orange - Oliver ate an orange!
🐼 P is for Panda - Penny the panda is playful!
👸 Q is for Queen - Quinn is a kind queen!
🌈 R is for Rainbow - Ruby saw a rainbow!
⭐ S is for Star - Sam counts the stars!
🐯 T is for Tiger - Tommy the tiger is tall!
☂️ U is for Umbrella - Uma uses an umbrella!
🎻 V is for Violin - Vicky plays the violin!
🐋 W is for Whale - Wally the whale swims!
🎄 X is for Xylophone - Max plays the xylophone!
🧶 Y is for Yarn - Yara has yellow yarn!
🦓 Z is for Zebra - Zoe the zebra has stripes!

You learned all the letters! Great job! 🌟`,
      "Numbers": `🔢 Let's Count Together! 🔢

1️⃣ ONE - 🍎 One red apple for me!
2️⃣ TWO - 👟👟 Two shoes to wear!
3️⃣ THREE - 🐻🐻🐻 Three teddy bears hugging!
4️⃣ FOUR - 🚗🚗🚗🚗 Four toy cars racing!
5️⃣ FIVE - ✋🏼 Five fingers waving hello!
6️⃣ SIX - 🍪🍪🍪🍪🍪🍪 Six yummy cookies!
7️⃣ SEVEN - 🌈 Seven colors in a rainbow!
8️⃣ EIGHT - 🕷️ Eight legs on a spider!
9️⃣ NINE - ⚽⚽⚽⚽⚽⚽⚽⚽⚽ Nine soccer balls bouncing!
🔟 TEN - 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 Ten balloons for a party!

You counted to 10! Amazing! 🌟`,
      "Colors": `🌈 Let's Learn Colors! 🌈

🔴 RED - Like apples 🍎, fire trucks 🚒, and hearts ❤️!
🔵 BLUE - Like the sky ☁️, ocean 🌊, and blueberries!
🟢 GREEN - Like grass, trees 🌳, and frogs 🐸!
🟡 YELLOW - Like the sun ☀️, bananas 🍌, and stars ⭐!
🟠 ORANGE - Like oranges 🍊, pumpkins 🎃, and carrots 🥕!
🟣 PURPLE - Like grapes 🍇, flowers 🌸, and butterflies 🦋!
🟤 BROWN - Like chocolate 🍫, teddy bears 🧸, and puppies 🐶!
⚫ BLACK - Like night 🌙, cats 🐈, and pandas 🐼!
⚪ WHITE - Like clouds ☁️, snow ❄️, and milk 🥛!
🩷 PINK - Like flowers 🌸, flamingos 🦩, and cotton candy 🍭!

Colors make the world beautiful! 🎨✨`,
      "Shapes": `⭐ Let's Learn Shapes! ⭐

🔴 CIRCLE - Round like a ball ⚽, pizza 🍕, or the sun ☀️! No corners!
🟦 SQUARE - Four equal sides like a window, box 📦, or cracker!
🔺 TRIANGLE - Three sides like a slice of pizza 🍕, mountain ⛰️, or roof 🏠!
🟩 RECTANGLE - Like a door 🚪, book 📖, or phone 📱!
⭐ STAR - Pointy and shiny like stars in the sky at night!
❤️ HEART - The shape of love and kindness!
🥚 OVAL - Like an egg 🥚, balloon 🎈, or face!
💎 DIAMOND - Sparkly like a gem or kite 🪁!

Shapes are everywhere! Look around and find them! 👀✨`,
      "Rhymes": `🎵 Fun Rhymes for You! 🎵

🌟 Twinkle Twinkle Little Star 🌟
Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky!
Twinkle, twinkle, little star,
How I wonder what you are!

🐑 Baa Baa Black Sheep 🐑
Baa, baa, black sheep,
Have you any wool?
Yes sir, yes sir,
Three bags full!
One for my master,
One for my dame,
One for the little boy
Who lives down the lane!

🕷️ Itsy Bitsy Spider 🕷️
The itsy bitsy spider
Went up the water spout,
Down came the rain
And washed the spider out!
Out came the sun
And dried up all the rain,
And the itsy bitsy spider
Went up the spout again!

🐝 Humpty Dumpty 🥚
Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall!
All the king's horses
And all the king's men,
Couldn't put Humpty together again!

🐑 Mary Had a Little Lamb 🐑
Mary had a little lamb,
Little lamb, little lamb,
Mary had a little lamb,
Its fleece was white as snow!

Sing along and have fun! 🎶✨`
    }
    return content[selectedSubject] || `🎉 Let's Learn About ${selectedSubject}! 🎉

Click the button again to generate fun content!`
  }

  const generateKidsContent = async () => {
    if (isLoading || !selectedSubject) return
    setIsLoading(true)
    
    addToHistory('subject_learning', { 
      level: selectedLevel, 
      domain: selectedDomain || 'N/A', 
      subject: selectedSubject 
    })
    
    try {
      let prompt = ""
      switch(selectedSubject) {
        case "Alphabets":
          prompt = "Create a complete A to Z alphabet story for kids aged 3-5. For each letter from A to Z, write one simple sentence with an emoji. Example: 🍎 A is for Apple - Annie ate an apple! Continue for all 26 letters B through Z. Make it fun and colorful.";
          break;
        case "Numbers":
          prompt = "Create a complete counting story from 1 to 10 for kids aged 3-5. For each number, write one fun sentence with emojis showing that quantity. Example: 1️⃣ ONE - 🍎 One red apple! Continue for all numbers 2 through 10. Make it colorful and fun.";
          break;
        case "Colors":
          prompt = "Create a complete color learning story for kids aged 3-5. Cover at least 10 colors (Red, Blue, Green, Yellow, Orange, Purple, Pink, Brown, Black, White). For each color, write one sentence with emoji examples. Example: 🔴 RED - Like apples, fire trucks, and hearts! Continue for all colors. Make it fun.";
          break;
        case "Shapes":
          prompt = "Create a complete shapes learning story for kids aged 3-5. Cover all basic shapes (Circle, Square, Triangle, Rectangle, Star, Heart, Oval, Diamond). For each shape, write one sentence with emoji examples. Example: 🔴 CIRCLE - Round like a ball, pizza, or the sun! Continue for all shapes. Make it fun.";
          break;
        case "Rhymes":
          prompt = "Create 5 complete short nursery rhymes for kids aged 3-5. Each rhyme should be 4-6 lines. Include popular rhymes like Twinkle Twinkle, Baa Baa Black Sheep, etc. Use emojis. Make them fun and easy to sing.";
          break;
        default:
          prompt = `Create fun, simple educational content about ${selectedSubject} for kids aged 3-5. Use emojis and make it engaging.`;
      }
      
      const result = await queryOllama(prompt, selectedModel)
      
      if (!result.success || result.error) {
        setMessages([{ role: "assistant", content: getKidsFallbackContent() }])
      } else {
        setMessages([{ role: "assistant", content: result.output }])
      }
    } catch (error) {
      setMessages([{ role: "assistant", content: getKidsFallbackContent() }])
    }
    setIsLoading(false)
  }

  const handleSend = async () => {
    if (!userInput.trim() || isLoading || !selectedSubject) return
    
    setMessages(prev => [...prev, { role: "user", content: userInput }])
    setUserInput("")
    setIsLoading(true)
    
    addToHistory('subject_question', { 
      level: selectedLevel, 
      domain: selectedDomain || 'N/A', 
      subject: selectedSubject,
      question: userInput
    })
    
    try {
      const prompt = `As a ${selectedSubject} expert, answer this question: ${userInput}`
      const result = await queryOllama(prompt, selectedModel)
      setMessages(prev => [...prev, { role: "assistant", content: result.output }])
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I couldn't process that." }])
    }
    setIsLoading(false)
  }

  const getCurrentSubjects = () => {
    const level = educationLevels[selectedLevel as keyof typeof educationLevels]
    if (Array.isArray(level)) return level
    if (selectedDomain && typeof level === 'object') {
      return level[selectedDomain as keyof typeof level] || []
    }
    return []
  }



  const isDomainLevel = () => {
    const level = educationLevels[selectedLevel as keyof typeof educationLevels]
    return !Array.isArray(level)
  }

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 pb-8">
      <h1 className="text-4xl font-bold text-blue-100 mb-8">Subjects & Resources</h1>

      {/* Education Level Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {Object.keys(educationLevels).map((level) => (
          <button
            key={level}
            onClick={() => {
              setSelectedLevel(level)
              setSelectedDomain("")
              setSelectedSubject("")
              setMessages([])
              setUserInput("")
            }}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              selectedLevel === level
                ? "bg-blue-600 text-white"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Domain Selection (for 11-12, UG, PG) */}
      {isDomainLevel() && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {Object.keys(educationLevels[selectedLevel as keyof typeof educationLevels] as object).map((domain) => (
            <button
              key={domain}
              onClick={() => {
                setSelectedDomain(domain)
                setSelectedSubject("")
                setMessages([])
                setUserInput("")
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedDomain === domain
                  ? "bg-purple-600 text-white"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      )}

      {/* Subjects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {getCurrentSubjects().map((subject) => (
          <button
            key={subject}
            onClick={() => {
              setSelectedSubject(subject)
              setMessages([])
              setUserInput("")
            }}
            className={`p-4 rounded-lg border transition-all ${
              selectedSubject === subject
                ? "bg-green-600/30 border-green-500/60 text-green-100"
                : "bg-slate-800/50 border-blue-500/30 text-slate-300 hover:bg-slate-700/50"
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      {selectedSubject && (
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-4">Learn {selectedSubject}</h2>
          
          {selectedLevel === "LKG-UKG" ? (
            <div className="space-y-4">
              <button
                onClick={() => generateKidsContent()}
                disabled={isLoading}
                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg disabled:opacity-50"
              >
                {isLoading ? "Generating..." : `🎨 Generate ${selectedSubject} Content`}
              </button>
              
              {messages.length > 0 && (
                <div className="p-6 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30">
                  <div className="text-slate-100 text-lg leading-relaxed whitespace-pre-wrap">
                    {messages[messages.length - 1].content}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Chat for older students */}
              <div className="h-96 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-slate-400 text-center">
                    <p>Ask any question about {selectedSubject}...</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.role === "user" ? "bg-blue-600/50 text-blue-100" : "bg-slate-700/50 text-slate-100"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2 rounded-lg bg-slate-700/50 animate-pulse">
                      <p className="text-sm text-slate-300">AI thinking...</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder={`Ask about ${selectedSubject}...`}
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/60"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !userInput.trim()}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
