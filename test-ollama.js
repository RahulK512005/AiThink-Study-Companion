// Simple test script for ollama.ts functions
const { queryOllama, queryAllModels, explainTopic } = require('./lib/ollama.ts');

async function testOllamaFunctions() {
  console.log('Testing Ollama functions...\n');
  
  try {
    // Test explainTopic (will likely use mock data)
    console.log('1. Testing explainTopic:');
    const explanation = await explainTopic('Mathematics');
    console.log('Result:', explanation);
    console.log('Success:', explanation.success);
    console.log('Output length:', explanation.output.length);
    
    console.log('\n2. Testing queryOllama:');
    const singleQuery = await queryOllama('What is 2+2?');
    console.log('Model:', singleQuery.model);
    console.log('Success:', singleQuery.success);
    console.log('Output:', singleQuery.output.substring(0, 100) + '...');
    
    console.log('\n3. Testing queryAllModels:');
    const allResults = await queryAllModels('Explain gravity briefly');
    console.log('Number of results:', allResults.length);
    allResults.forEach((result, i) => {
      console.log(`Model ${i+1}: ${result.model} - Success: ${result.success}`);
    });
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testOllamaFunctions();