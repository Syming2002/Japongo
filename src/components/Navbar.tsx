import "../css/header.css";
import { mainButtons } from "../utils/nav";
import LinkPage from "./LinkPage";

function Navbar() {
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
