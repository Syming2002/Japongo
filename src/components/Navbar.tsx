import { NavLink } from "react-router";
import Button from "./Button";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/kana"}>
        <Button title="Kana" />
      </NavLink>
      <NavLink to={"/kanji"}>
        <Button title="Kanji" />
      </NavLink>
      <Button title="Grammaire" />
      <Button title="Verbes" />
      <Button title="Vocabulaire" />
    </nav>
  );
}

export default Navbar;
