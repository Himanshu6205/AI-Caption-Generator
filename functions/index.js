const functions = require("firebase-functions");
const fetch = require("node-fetch");

const OPENROUTER_API_KEY = functions.config().openrouter.key;

exports.generateCaption = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*"); // enable frontend requests
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send("Missing prompt text.");
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-vercel-domain.vercel.app", // replace this later
        "X-Title": "Caption Generator App",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.9,
        max_tokens: 250,
      }),
    });

    const data = await response.json();
    return res.status(200).send(data.choices?.[0]?.message?.content || "⚠️ No caption generated.");
  } catch (error) {
    console.error("🔥 Firebase Function Error:", error);
    return res.status(500).send("⚠️ GPT API failed. Try again.");
  }
});
