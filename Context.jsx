import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ideainput, setideainput] = useState("");
  const [hashtagToggle, setHashtagToggle] = useState(false);
  const [hooksToggle, setHooksToggle] = useState(false);
  const [ctaToggle, setCtaToggle] = useState(false);
  const [emojiToggle, setEmojiToggle] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [result, setResult] = useState("");

  return (
    <AppContext.Provider
      value={{
        ideainput,
        setideainput,
        hashtagToggle,
        setHashtagToggle,
        hooksToggle,
        setHooksToggle,
        ctaToggle,
        setCtaToggle,
        emojiToggle,
        setEmojiToggle,
        dropdown,
        setDropdown,
        result,
        setResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
