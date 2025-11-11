// lib/ollama.ts
import { mockQuizzes, mockExplanations, getIntelligentResponse } from "./mock-data";

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
export async function queryOllama(prompt: string, model = "gemma3:1b", options = { temperature: 0.7 }): Promise<OllamaResult> {
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
      console.warn(`[ollama] HTTP ${res.status}, using offline mode`);
      return { model: "offline", success: true, output: getIntelligentResponse(prompt), error: undefined };
    }

    const json = await res.json();
    const output = json?.response || "";

    if (!output) {
      console.warn("[ollama] Empty response, using offline mode");
      return { model: "offline", success: true, output: getIntelligentResponse(prompt), error: undefined };
    }

    return { model, success: true, output: String(output), raw: json };
  } catch (err: any) {
    console.warn("[ollama] Error, using offline mode:", err.message);
    return { model: "offline", success: true, output: getIntelligentResponse(prompt), error: undefined };
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

  // If all failed, use offline intelligent responses
  const allFailed = results.every((r) => !r.success);
  if (allFailed) {
    console.warn("[ollama] all models failed, using offline mode");
    return models.map((m) => ({
      model: "offline",
      success: true,
      output: getIntelligentResponse(prompt),
      raw: null,
    }));
  }

  return results;
}

export async function explainTopic(topic: string, model = "gemma3:1b") {
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

export async function generateQuiz(topic: string, model = "gemma3:1b", count = 20) {
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

export async function generatePractice(topic: string, model = "gemma3:1b") {
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


