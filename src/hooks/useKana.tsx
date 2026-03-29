import { createContext, useContext, useState } from "react";
import * as kanaUtils from "../utils/kana";

export interface IKana {
  kana: {
    id: number;
    hiragana: string;
    katakana: string;
    romaji: string;
  }[];
}

const initialValues = {
  kana: [
    {
      id: 1,
      hiragana: "",
      katakana: "",
      romaji: "",
    },
  ],
};

export const KanaContext = createContext<IKana>(initialValues);

export const useKana = () => {
  const kanaContext = useContext(KanaContext);

  if (!kanaContext) {
    throw new Error("useKana must be use inside a KanaProvider");
  }
  return kanaContext;
};

interface KanaProviderProps {
  children: any;
}

export function KanaProvider({ children }: KanaProviderProps) {
  const [kana] = useState(kanaUtils.KANA);

  return (
    <KanaContext.Provider value={{ kana }}>{children}</KanaContext.Provider>
  );
}
