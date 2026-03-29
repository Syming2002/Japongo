import { NavLink } from "react-router";
import Button from "./Button";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/kana"}>
        <Button title="Kana" />
      </NavLink>
      <Button title="Kanji" />
      <Button title="Grammaire" />
      <Button title="Verbes" />
      <Button title="Vocabulaire" />
    </nav>
  );
}

export default Navbar;
