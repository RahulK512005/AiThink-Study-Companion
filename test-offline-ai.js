// Test script for offline AI capabilities
// Run with: node test-offline-ai.js

const { getIntelligentResponse } = require('./lib/mock-data.ts');

console.log('🧪 Testing Offline AI Capabilities\n');
console.log('=' .repeat(60));

const testQuestions = [
  "What is the capital of France?",
  "Explain photosynthesis",
  "How does a car engine work?",
  "What is quantum physics?",
  "Tell me about the solar system",
  "What is Python programming?",
  "Explain DNA",
  "What is a black hole?",
  "How does the internet work?",
  "What is climate change?",
  "Tell me about Shakespeare",
  "What is algebra?",
  "Explain the human heart",
  "What is supply and demand?",
  "Tell me about World War 2",
];

console.log('\n📝 Testing Questions:\n');

testQuestions.forEach((question, index) => {
  console.log(`\n${index + 1}. Question: "${question}"`);
  console.log('-'.repeat(60));
  
  try {
    const response = getIntelligentResponse(question);
    const preview = response.substring(0, 100) + '...';
    console.log(`✅ Response: ${preview}`);
    console.log(`📊 Length: ${response.length} characters`);
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('\n✅ All tests completed!');
console.log('\n💡 To test in the app:');
console.log('   1. Run: npm run dev');
console.log('   2. Open: http://localhost:3000');
console.log('   3. Login and go to Dashboard > Chat');
console.log('   4. Try any of the questions above');
console.log('   5. You should see the blue "Offline Mode" banner\n');
