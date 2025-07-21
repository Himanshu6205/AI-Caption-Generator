export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai-two-sepia.vercel.app/", // 🔁 IMPORTANT: change to your Vercel URL
          "X-Title": "Caption Generator App",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.9,
          max_tokens: 250,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("GPT API Error:", data);
      return res.status(500).json({ error: "GPT API failed." });
    }

    return res
      .status(200)
      .json({ result: data.choices?.[0]?.message?.content });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
