import Logo from "./Logo";
import Navbar from "./Navbar";
import "../css/header.css";

function Header() {
  return (
    <header className="main-header">
      <div id="hr-div">
        <div id="logo-nav-div">
          <Logo />
          <Navbar />
        </div>
        <hr id="header-hr" />
      </div>
    </header>
  );
}

export default Header;
