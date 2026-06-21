import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { KANJI_LEVEL_URL } from "../utils/kanji";

export type KanjiDetails = {
  id: number;
  freq_mainichi_shinbun: number | null;
  grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null;
  heisig_en: string | null;
  jlpt: 1 | 2 | 3 | 4 | 5 | null;
  kanji: string;
  kun_readings: string[];
  meanings: string[];
  name_readings: string[];
  notes: string[];
  on_readings: string[];
  stroke_count: number;
  unicode: string;
  unihan_cjk_compatibility_variant: string | undefined;
};

type KanjiContext = {
  kanjiArray: KanjiDetails[];
  setKanjiArray: React.Dispatch<React.SetStateAction<KanjiDetails[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  jlptUrl: string[];
};

export const KanjiContext = createContext<KanjiContext | undefined>(undefined);

export const useKanji = () => {
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
  const [kanjiArray, setKanjiArray] = useState<KanjiDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const jlptUrl = KANJI_LEVEL_URL;

  const kanjiCtx = {
    kanjiArray,
    setKanjiArray,
    loading,
    setLoading,
    jlptUrl,
  };

  return (
    <KanjiContext.Provider value={kanjiCtx}>{children}</KanjiContext.Provider>
  );
}
