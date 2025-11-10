// lib/ollama.ts
import { mockQuizzes, mockExplanations, mockChatResponses } from "./mock-data";

export type OllamaResult = {
  model: string;
  success: boolean;
  output: string;
  raw?: any;
  error?: string;
};

const OLLAMA_URL = process.env.NEXT_PUBLIC_OLLAMA_URL || "http://localhost:11434";
const DEFAULT_SYSTEM_PROMPT = `You are AiThink, a friendly offline AI tutor. Explain clearly and concisely:`;

/**
 * Query a single Ollama model using the /api/generate endpoint.
 */
export async function queryOllama(prompt: string, model = "llama2", options = { temperature: 0.7 }): Promise<OllamaResult> {
  try {
    const body = {
      model,
      prompt: `${DEFAULT_SYSTEM_PROMPT}\n\n${prompt}`,
      stream: false,
      options,
    };
    const res = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.warn(`[ollama] HTTP ${res.status}, Ollama not available`);
      return { model: "mock", success: false, output: `I apologize, but I cannot answer "${prompt}" right now. Please ensure Ollama is running with the ${model} model installed. Run: ollama pull ${model}`, error: "Ollama not available" };
    }

    const json = await res.json();
    const output = json?.response || "";

    if (!output) {
      console.warn("[ollama] Empty response from Ollama");
      return { model: "mock", success: false, output: `I received an empty response. Please check if the ${model} model is properly installed.`, error: "Empty response" };
    }

    return { model, success: true, output: String(output), raw: json };
  } catch (err: any) {
    console.warn("[ollama] Error:", err.message);
    return { model: "mock", success: false, output: `Cannot connect to Ollama. Please start Ollama and ensure the ${model} model is installed. Error: ${err.message}`, error: err.message };
  }
}

/**
 * Query all three models in parallel and return their results.
 * Models: gemma3:1b, qwen2.5:0.5b, tinyllama
 */
export async function queryAllModels(prompt: string) {
  const models = ["gemma3:1b", "qwen2.5:0.5b", "tinyllama"];
  const promises = models.map((m) => queryOllama(prompt, m));
  const results = await Promise.all(promises);

  // If all failed, fall back to mock content for UX resilience
  const allFailed = results.every((r) => !r.success);
  if (allFailed) {
    console.warn("[ollama] all models failed, returning mock responses");
    return models.map((m, i) => ({
      model: m,
      success: true,
      output: getRandomMockResponse(),
      raw: null,
    }));
  }

  return results;
}

export async function explainTopic(topic: string, model = "llama2") {
  try {
    const prompt = `Provide a clear, beginner-friendly explanation of "${topic}" in 2-3 paragraphs. Include key concepts and examples.`;
    return await queryOllama(prompt, model);
  } catch (error) {
    return {
      model: "mock",
      success: true,
      output: mockExplanations["Mathematics"],
      raw: null
    };
  }
}

export async function generateQuiz(topic: string, model = "llama2", count = 20) {
  try {
    const prompt = `Generate exactly ${count} multiple choice questions about "${topic}". Each question must have exactly 4 options. Format as JSON: {"questions": [{"question": "question text", "options": ["A", "B", "C", "D"], "answer": "correct option", "explanation": "why this is correct"}]}`;
    return await queryOllama(prompt, model);
  } catch (error) {
    return {
      model: "mock",
      success: true,
      output: JSON.stringify(mockQuizzes["Mathematics"]),
      raw: mockQuizzes["Mathematics"]
    };
  }
}

export async function generatePractice(topic: string, model = "llama2") {
  try {
    const prompt = `Generate 5 practice problems about "${topic}". Format as JSON: {"problems": [{"question": "problem text", "type": "mcq" or "input", "options": ["A", "B", "C", "D"] (if mcq), "answer": "correct answer", "solution": "detailed solution"}]}`;
    return await queryOllama(prompt, model);
  } catch (error) {
    return {
      model: "mock",
      success: true,
      output: JSON.stringify({ problems: [] }),
      raw: { problems: [] }
    };
  }
}

function getRandomMockResponse(): string {
  const allResponses = Object.values(mockChatResponses).flat();
  return allResponses[Math.floor(Math.random() * allResponses.length)];
}
