import type { Kana } from "../hooks/useKana";
import KanaCard from "./KanaCard";

import "./css/KanaTableRow.css";

interface KanaTableRowProps {
  kanaArray: Kana;
  isHiragana: boolean;
}

function KanaTableRow({ kanaArray, isHiragana }: KanaTableRowProps) {
  return (
    <tr className="kana-table-row">
      {kanaArray.map((kana) =>
        isHiragana ? (
          <KanaCard key={kana.id} kana={kana.hiragana} romaji={kana.romaji} />
        ) : (
          <KanaCard key={kana.id} kana={kana.katakana} romaji={kana.romaji} />
        ),
      )}
    </tr>
  );
}

export default KanaTableRow;
