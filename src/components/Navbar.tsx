import { useNavigate } from "react-router";
import Button from "./Button";
import "./css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function handleNavButtonClick(link: string) {
    navigate(link);
  }

  return (
    <nav>
      <Button
        title="Kana"
        className="nav-button"
        onClick={() => handleNavButtonClick("/kana")}
      />
      <Button
        title="Kanji"
        className="nav-button"
        onClick={() => handleNavButtonClick("/kanji")}
      />
      <Button
        title="Grammaire"
        className="nav-button"
        onClick={() => handleNavButtonClick("/grammar")}
      />
      <Button
        title="Verbes"
        className="nav-button"
        onClick={() => handleNavButtonClick("/verbs")}
      />
      <Button
        title="Vocabulaire"
        className="nav-button"
        onClick={() => handleNavButtonClick("/vocabulary")}
      />
    </nav>
  );
}

export default Navbar;
