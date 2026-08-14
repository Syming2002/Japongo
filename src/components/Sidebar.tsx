import { useState } from "react";

import "../css/sidebar.css";
import Footer from "./Footer";
import Logo from "./Logo";
import MenuBurger from "./MenuBurger";
import LinkPage from "./LinkPage";
import { mainButtons } from "../utils/nav";

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  function handleMenuBurgerClick() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="sidebar-wrapper">
      <aside className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="link-div">
          {mainButtons.map((button) => (
            <LinkPage
              title={button}
              className="sidebar-link"
              link={`/${button.at(0)?.toLowerCase() + button.substring(1).toLowerCase()}`}
              key={button}
            />
          ))}
        </div>

        <Footer
          version={0.1}
          footerClassName="sidebar-footer"
          footerHrClassName="sidebar-footer-hr"
        />
      </aside>
      <MenuBurger
        handleMenuBurgerClick={handleMenuBurgerClick}
        toggle={toggle}
      />
      <Logo />
    </div>
  );
}

export default Sidebar;
