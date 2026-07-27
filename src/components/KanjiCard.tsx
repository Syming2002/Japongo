import "../css/cards.css";

interface KanjiCardProps {
  kanji: string;
  onKanjiCardClick(): void;
}

function KanjiCard({ kanji, onKanjiCardClick }: KanjiCardProps) {
  return (
    <>
      <button onClick={onKanjiCardClick} className="kanji-card">
        {kanji}
      </button>
    </>
  );
}

export default KanjiCard;
