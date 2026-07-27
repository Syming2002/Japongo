import "../css/header.css";
import LinkPage from "./LinkPage";

function Navbar() {
  const mainButtons = ["Kana", "Kanji", "Grammar", "Verbs", "Vocabulary"];

  return (
    <nav>
      {mainButtons.map((button) => (
        <LinkPage
          title={button}
          className="nav-link"
          link={`/${button.at(0)?.toLowerCase() + button.substring(1).toLowerCase()}`}
          key={button}
        />
      ))}
    </nav>
  );
}

export default Navbar;
