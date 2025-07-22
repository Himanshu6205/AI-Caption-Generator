export const generateCaption = async (promptText) => {
  try {
    const response = await fetch("/api/generate-caption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ promptText }),
    });

    const data = await response.json();
    return data.caption || "⚠️ No caption generated.";
  } catch (error) {
    console.error("❌ Error:", error);
    return "⚠️ Failed to fetch caption.";
  }
};
