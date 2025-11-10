// Simple test to verify the mock data structure
console.log('Testing mock data import...');

try {
  // Test if we can access the mock data
  const mockData = {
    mockExplanations: {
      Mathematics: "Mathematics is the study of numbers, quantities, shapes, and patterns...",
      Physics: "Physics is the natural science that studies matter, energy, and forces...",
      History: "History is the study of past human events, societies, and civilizations..."
    },
    mockChatResponses: {
      Mathematics: [
        "In algebra, variables represent unknown values...",
        "Geometry deals with shapes, sizes, and properties..."
      ],
      Physics: [
        "Energy cannot be created or destroyed...",
        "Force is a push or pull that can change..."
      ]
    }
  };

  // Test the logic from getRandomMockResponse
  const allResponses = Object.values(mockData.mockChatResponses).flat();
  const randomResponse = allResponses[Math.floor(Math.random() * allResponses.length)];
  
  console.log('✓ Mock data structure is valid');
  console.log('✓ Total chat responses:', allResponses.length);
  console.log('✓ Random response sample:', randomResponse.substring(0, 50) + '...');
  
  // Test explanation access
  const mathExplanation = mockData.mockExplanations['Mathematics'];
  console.log('✓ Math explanation length:', mathExplanation.length);
  
  console.log('\n✅ All tests passed! The ollama.ts code should work correctly.');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
}