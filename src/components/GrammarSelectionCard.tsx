import { Link } from "react-router";

import "./css/GarmmarSelectionCard.css";

interface GrammarSelectionCardProps {
  grammarPath: string;
  grammarTheme: string;
}

function GrammarSelectionCard({
  grammarPath,
  grammarTheme,
}: GrammarSelectionCardProps) {
  return (
    <Link to={grammarPath} className="grammar-selection-card-link">
      <div className="grammar-selection-card-div">
        <p className="grammar-selection-card-text">{grammarTheme}</p>
      </div>
    </Link>
  );
}

export default GrammarSelectionCard;
