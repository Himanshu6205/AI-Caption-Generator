import React, { useState } from "react";
import Toggle from "../components/Toggle";
import { useAppContext } from "../../Context";
import Result from "../components/Result";
import { Prompts } from "../components/Prompts";
import { generateCaption } from "../components/generateCaption";

const Generator = () => {
  const { ideainput, setideainput, dropdown, setDropdown } = useAppContext();
  const { setResult } = useAppContext();
  const [hashtagOn, setHashtagOn] = useState(false);
  const [hookOn, setHookOn] = useState(false);
  const [ctaOn, setCtaOn] = useState(false);
  const [emojiOn, setEmojiOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handledrop = (e) => {
    setDropdown(e.target.value);
    console.log(dropdown);
  };

  const handleidea = (e) => {
    setideainput(e.target.value);
    console.log(ideainput);
  };

  const handleClick = async () => {
    setLoading(true);

    const prompt = Prompts({
      idea: ideainput,
      language: dropdown,
      hashtag: hashtagOn,
      hook: hookOn,
      cta: ctaOn,
      emoji: emojiOn,
    });

    console.log("✅ Final Prompt:", prompt);
    const result = await generateCaption(prompt);
    console.log("Gemini Result:", result);
    setResult(result);
    setLoading(false);
  };

  return (
    <>
      <div className="bg-[#2E3C56] min-h-screen pt-5 px-4 sm:px-6 lg:px-8">
        <h1 className="italic font-black tracking-tight text-3xl sm:text-5xl text-center text-white leading-snug">
          Free AI Caption & Hashtag & Hook & CTA Generator
        </h1>
        <p className="text-center text-white mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Ideate a range of engaging Instagram captions to improve{" "}
          <br className="hidden sm:block" />
          your social media performance.
        </p>

        <div className="bg-white w-full max-w-[1120px] mx-auto mt-10 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
          <div className="text-black flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold">
              Enter Your Content Idea
            </h1>
            <select
              value={dropdown}
              onChange={handledrop}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E57A00] text-sm sm:text-base"
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Hinglish">Hinglish</option>
            </select>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <input
              className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#E57A00] focus:border-[#E57A00] w-full sm:w-[75%] p-3"
              type="text"
              value={ideainput}
              id="idea"
              onChange={handleidea}
              placeholder="Enter your content idea"
            />
            <button
              type="submit"
              onClick={handleClick}
              className="w-full sm:w-auto py-3 px-8 text-base font-semibold text-white bg-[#E57A00] rounded-md hover:bg-[#cf6900] transition duration-300"
            >
              ✨ Generate
            </button>
          </div>

          <div className="mt-6">
            <Toggle
              hashtagOn={hashtagOn}
              setHashtagOn={setHashtagOn}
              hookOn={hookOn}
              setHookOn={setHookOn}
              ctaOn={ctaOn}
              setCtaOn={setCtaOn}
              emojiOn={emojiOn}
              setEmojiOn={setEmojiOn}
            />

            {loading ? (
              <div className="text-center py-6">
                <div className="loader mx-auto border-t-4 border-[#E57A00] border-solid rounded-full w-12 h-12 animate-spin"></div>
                <p className="text-gray-600 mt-2">Generating your caption...</p>
              </div>
            ) : (
              <Result />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
