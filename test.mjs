// test.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Your key from https://makersuite.google.com/app/apikey
const API_KEY = "AIzaSyBato2RjQ7cZ9OUM88gAuIcZSor4_a2HG8";

const runTest = async () => {
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: "Write a funny Instagram caption about coffee." }],
        },
      ],
    });

    const response = await result.response;
    const text = response.text();
    console.log("✅ Gemini caption:", text);
  } catch (error) {
    console.error("❌ Gemini Test Error:", error);
  }
};

runTest();
