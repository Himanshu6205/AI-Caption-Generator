export const generateCaption = async (promptText) => {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: promptText }),
    });

    const data = await response.json();

    if (!response.ok) {
      return "⚠️ GPT API failed. Try again.";
    }

    return data.result || "⚠️ No response from GPT.";
  } catch (error) {
    console.error("❌ API Error:", error);
    return "⚠️ GPT API failed. Try again.";
  }
};
