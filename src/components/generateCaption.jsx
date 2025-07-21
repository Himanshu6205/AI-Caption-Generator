const OPENROUTER_API_KEY =
  "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";

/**
 * Generates a caption using GPT via OpenRouter.
 * @param {string} promptText - The full prompt to send to GPT.
 * @returns {Promise<string>} - The generated caption text.
 */
export const generateCaption = async (promptText) => {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // replace with your domain in production
          "X-Title": "Caption Generator App",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: promptText,
            },
          ],
          temperature: 0.9, // more creative
          max_tokens: 250, // longer output
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ GPT API Error:", data);
      return "⚠️ GPT API failed. Try again.";
    }

    return data.choices?.[0]?.message?.content || "⚠️ No response from GPT.";
  } catch (error) {
    console.error("❌ GPT API Error:", error);
    return "⚠️ GPT API failed. Try again.";
  }
};
