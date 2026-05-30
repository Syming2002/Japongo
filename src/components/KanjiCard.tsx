import "./css/KanjiCard.css";

interface KanjiCardProps {
  kanji: string;
  meaningEn: string;
}

function KanjiCard({ kanji, meaningEn }: KanjiCardProps) {
  return (
    <>
      <td className="kanji-card">
        {kanji}
        <hr className="kanji-meaning-hr" />
        <p className="kanji-meaning">{meaningEn}</p>
      </td>
    </>
  );
}

export default KanjiCard;
