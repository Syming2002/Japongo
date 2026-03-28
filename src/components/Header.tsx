import Logo from "./Logo";
import Navbar from "./Navbar";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <div id="hr-div">
        <div id="logo-nav-div">
          <Logo />
          <Navbar />
        </div>
        <hr />
      </div>
    </header>
  );
}

export default Header;
