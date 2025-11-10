"use client";

import { MainLayout } from "@/components/main-layout";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | null>(null);

  async function sendPrompt() {
    const res = await fetch("/api/ollama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    // adapt to the shape your route returns
    const out = data.response ?? data.output ?? JSON.stringify(data);
    setResult(out);
  }

  return (
    <MainLayout>
      <main>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={sendPrompt}>Ask Ollama</button>
        <pre>{result}</pre>
      </main>
    </MainLayout>
  );
}
