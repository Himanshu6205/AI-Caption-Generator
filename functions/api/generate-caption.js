export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { promptText } = req.body;

  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-vercel-domain.vercel.app", // update this after deploy
        "X-Title": "Caption Generator App",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: promptText }],
        temperature: 0.9,
        max_tokens: 250,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("GPT API Error:", data);
      return res.status(500).json({ error: "GPT API failed" });
    }

    res.status(200).json({ caption: data.choices?.[0]?.message?.content || "No response from GPT." });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
