import "../css/cards.css";

interface KanaCardProps {
  kana: string;
  romaji: string;
}

function KanaCard({ kana, romaji }: KanaCardProps) {
  return (
    <>
      <td
        className={kana === " " ? "kana-card-table-empty" : "kana-card-table"}
      >
        <p className={kana === " " ? "" : "kana-text"}>{kana}</p>
        {kana !== " " && <hr id="kana-romaji-hr" />}
        <p className={kana === " " ? "" : "romaji-text"}>{romaji}</p>
      </td>
    </>
  );
}

export default KanaCard;
