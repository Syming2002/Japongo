import "./css/KanjiCard.css";

interface KanjiCardProps {
  kanji: string;
  meaningEn: string;
  borderStyle: string;
  width: string;
}

function KanjiCard({ kanji, meaningEn, borderStyle, width }: KanjiCardProps) {
  return (
    <>
      <td style={{ border: borderStyle, width: width }} className="kanji-row">
        {kanji}
        <hr className="kanji-meaning-hr" />
        <p className="kanji-meaning">{meaningEn}</p>
      </td>
    </>
  );
}

export default KanjiCard;
