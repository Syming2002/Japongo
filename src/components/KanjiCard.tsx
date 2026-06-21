import "./css/KanjiCard.css";

interface KanjiCardProps {
  kanji: string;
  onKanjiCardClick(): void;
}

function KanjiCard({ kanji, onKanjiCardClick }: KanjiCardProps) {
  return (
    <>
      <td onClick={onKanjiCardClick} className="kanji-card">
        {kanji}
      </td>
    </>
  );
}

export default KanjiCard;
