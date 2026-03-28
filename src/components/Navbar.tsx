import Button from "./Button";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Button title="Kana" />
      <Button title="Kanji" />
      <Button title="Grammaire" />
      <Button title="Verbes" />
      <Button title="Vocabulaire" />
    </nav>
  );
}

export default Navbar;
