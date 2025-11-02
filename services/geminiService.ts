
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateStory(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a master storyteller. Write a captivating short story based on the following prompt: "${prompt}"`,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating story from Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate story: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the AI.");
  }
}
