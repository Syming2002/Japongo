import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as kanjiUtils from "../utils/kanji";

export interface IKanji {
  kanji: {
    id: number;
    kanji: string;
    fr_meaning: string[];
    en_meaning: string[];
    readings: { kun_yomi: string[]; on_yomi: string[] }[];
    strokes: number;
  }[];
}

const initialValues = {
  kanji: [
    {
      id: 1,
      kanji: "",
      fr_meaning: [""],
      en_meaning: [""],
      readings: [{ kun_yomi: [""], on_yomi: [""] }],
      strokes: 1,
    },
  ],
};

export const KanjiContext = createContext<IKanji>(initialValues);

export const useKana = () => {
  const kanjiContext = useContext(KanjiContext);

  if (!kanjiContext) {
    throw new Error("useKanji must be use inside a KanjiProvider");
  }
  return kanjiContext;
};

interface KanjiProviderProps {
  children: ReactNode;
}

export function KanjiProvider({ children }: KanjiProviderProps) {
  const [loading, setLoading] = useState(true);
  const [kanji, setKanji] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("").then().then().catch().finally();
  }, []);

  return (
    <KanjiContext.Provider value={{ kanji }}>{children}</KanjiContext.Provider>
  );
}
