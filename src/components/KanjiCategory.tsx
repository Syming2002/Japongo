import { Link } from "react-router";
import "./css/KanjiCategory.css";

interface KanjiCategoryProps {
  level: string;
  path: string;
}

function KanjiCategory({ level, path }: KanjiCategoryProps) {
  return (
    <Link to={`/${path}`}>
      <div className="kanji-category-div">
        <p className="level-text">{level}</p>
      </div>
    </Link>
  );
}

export default KanjiCategory;
