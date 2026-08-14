import { useInView } from "react-intersection-observer";
import "../css/cards.css";
import clsx from "clsx";

interface KanjiCardProps {
  kanji: string;
  onKanjiCardClick(): void;
}

function KanjiCard({ kanji, onKanjiCardClick }: KanjiCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <li
      key={kanji}
      ref={ref}
      className={clsx("kanji-item", {
        "kanji-item-visible": inView,
        "kanji-item-hidden": !inView,
      })}
    >
      <button onClick={onKanjiCardClick} className="kanji-card">
        {kanji}
      </button>
    </li>
  );
}

export default KanjiCard;
