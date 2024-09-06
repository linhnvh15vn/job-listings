import { createContext, ReactNode, useState } from "react";

export interface SearchContextProps {
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  removeKeyword: (kw: string) => void;
  reset: () => void;
}

export const SearchContext = createContext<SearchContextProps>({
  keywords: [],
  setKeywords: () => {},
  removeKeyword: () => {},
  reset: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [keywords, setKeywords] = useState<string[]>([]);

  const removeKeyword = (kw: string) => {
    const newKeywords = keywords.filter((keyword) => keyword !== kw);
    setKeywords(newKeywords);
  };

  const reset = () => {
    setKeywords([]);
  };

  return (
    <SearchContext.Provider
      value={{
        keywords,
        setKeywords,
        removeKeyword,
        reset,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
