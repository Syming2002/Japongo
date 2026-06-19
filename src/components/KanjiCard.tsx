import "./css/KanjiCard.css";

interface KanjiCardProps {
  kanji: string;
}

function KanjiCard({ kanji }: KanjiCardProps) {
  return (
    <>
      <td className="kanji-card">
        {kanji}
        {/* <hr className="kanji-meaning-hr" />
        <p className="kanji-meaning">{meaningEn}</p> */}
      </td>
    </>
  );
}

export default KanjiCard;
