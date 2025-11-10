// inside components/chat-interface.tsx (or wherever you trigger queries)
async function sendPromptToAllModels(prompt: string) {
  try {
    const res = await fetch("/api/ollama/batch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Failed");

    // json.results is an array of results for each model
    // e.g. [{model:"gemma3:1b", success:true, output:"..."}, ...]
    return json.results;
  } catch (err) {
    console.error("sendPromptToAllModels:", err);
    return [
      { model: "gemma3:1b", success: false, output: "Error calling models" },
      { model: "qwen2.5:0.5b", success: false, output: "Error calling models" },
      { model: "tinyllama", success: false, output: "Error calling models" },
    ];
  }
}
