import { useNavigate } from "react-router";

import "../css/cards.css";

interface GrammarSelectionCardProps {
  grammarPath: string;
  grammarTheme: string;
}

function GrammarSelectionCard({
  grammarPath,
  grammarTheme,
}: GrammarSelectionCardProps) {
  const navigate = useNavigate();

  function onGrammarCardClick(link: string) {
    navigate(link);
  }

  return (
    <div
      className="grammar-selection-card-div"
      onClick={() => onGrammarCardClick(grammarPath)}
    >
      <p className="grammar-selection-card-text">{grammarTheme}</p>
    </div>
  );
}

export default GrammarSelectionCard;
