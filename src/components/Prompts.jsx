export function Prompts({ idea, language, hashtag, hook, cta, emoji }) {
  let prompt = `Imagine you're writing a **viral ${
    language || "English"
  } Instagram caption** for this idea:  
"${idea}".  

Your goal is to create content that makes people stop scrolling and engage.`;

  prompt += `\n\nWrite the caption in a fun, slightly dramatic tone that feels like a friend telling a juicy story.`;

  const additions = [];

  if (hook) {
    additions.push(
      `Start with a bold, emotional **HOOK** (1-2 lines) using curiosity, shock, humor, or drama to grab attention.`
    );
  }

  additions.push(
    `The caption should be at least **60-70 words**, divided into 2-3 short paragraphs. It should feel personal, relatable, and shareable.`
  );

  if (cta) {
    additions.push(`Include a **CALL-TO-ACTION** that fits naturally. Example:
- Ask for opinions if the post is controversial.
- Ask to tag a friend if it's funny or relatable.
- Ask for a ❤️ or save if it's emotional or useful.`);
  }

  if (emoji) {
    additions.push(
      `Sprinkle in relevant **EMOJIS** to add color and visual appeal. Don't overuse.`
    );
  }

  if (hashtag) {
    additions.push(
      `At the end, add **5-7 relevant and trending HASHTAGS** in English that relate to the idea.`
    );
  }

  prompt += `\n\n${additions.join("\n")}`;

  prompt += `\n\nMake the tone **engaging, spicy (desi-masala style if it fits)**, and NEVER boring.`;

  return prompt;
}
