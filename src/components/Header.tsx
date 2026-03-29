import { Link } from "react-router";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <div id="hr-div">
        <div id="logo-nav-div">
          <Link
            to={"/"}
            style={{
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <Logo />
          </Link>
          <Navbar />
        </div>
        <hr id="header-hr" />
      </div>
    </header>
  );
}

export default Header;
