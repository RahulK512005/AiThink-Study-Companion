// app/api/ollama/batch/route.ts
import { NextResponse } from "next/server";
import { queryAllModels } from "@/lib/ollama";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    const results = await queryAllModels(prompt);
    return NextResponse.json({ results });
  } catch (err: any) {
    console.error("API /api/ollama/batch error:", err);
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 });
  }
}
