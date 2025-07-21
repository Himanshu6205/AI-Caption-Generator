import React from "react";
import { useAppContext } from "../../Context";

const Toggle = () => {
  const {
    hashtagToggle,
    setHashtagToggle,
    hooksToggle,
    setHooksToggle,
    ctaToggle,
    setCtaToggle,
    emojiToggle,
    setEmojiToggle,
  } = useAppContext();

  const handleHashtag = () => setHashtagToggle(!hashtagToggle);
  const handleHooks = () => setHooksToggle(!hooksToggle);
  const handleCTA = () => setCtaToggle(!ctaToggle);
  const handleEmoji = () => setEmojiToggle(!emojiToggle);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-4 sm:mx-auto my-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-[#2E3C56] mb-6 text-center sm:text-left">
        Things You Want In Your Post:
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-around gap-6">
        {/* Hashtag Toggle */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm sm:text-base text-[#2E3C56] font-medium">
            Hashtags
          </span>
          <button
            onClick={handleHashtag}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
              hashtagToggle ? "bg-[#E57A00]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                hashtagToggle ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Hooks Toggle */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm sm:text-base text-[#2E3C56] font-medium">
            Hooks
          </span>
          <button
            onClick={handleHooks}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
              hooksToggle ? "bg-[#E57A00]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                hooksToggle ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* CTA Toggle */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm sm:text-base text-[#2E3C56] font-medium">
            Call-To-Action
          </span>
          <button
            onClick={handleCTA}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
              ctaToggle ? "bg-[#E57A00]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                ctaToggle ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Emoji Toggle */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm sm:text-base text-[#2E3C56] font-medium">
            Emoji
          </span>
          <button
            onClick={handleEmoji}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
              emojiToggle ? "bg-[#E57A00]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                emojiToggle ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
