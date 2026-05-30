import { useState } from "react";
import Button from "./Button";

import "./css/Sidebar.css";
import Footer from "./Footer";
import Logo from "./Logo";
import MenuBurger from "./MenuBurger";
import { useNavigate } from "react-router";

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  function handleMenuBurgerClick() {
    setToggle((prevToggle) => !prevToggle);
  }

  function handleSidebarButtonClick(link: string) {
    navigate(link);
  }

  return (
    <div className="sidebar-wrapper">
      <aside className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="button-div">
          <Button
            title="Kana"
            className="sidebar-button"
            onClick={() => handleSidebarButtonClick("/kana")}
          />
          <Button
            title="Kanji"
            className="sidebar-button"
            onClick={() => handleSidebarButtonClick("/kanji")}
          />
          <Button
            title="Grammaire"
            className="sidebar-button"
            onClick={() => handleSidebarButtonClick("/grammar")}
          />
          <Button
            title="Verbes"
            className="sidebar-button"
            onClick={() => handleSidebarButtonClick("/verbs")}
          />
          <Button
            title="Vocabulaire"
            className="sidebar-button"
            onClick={() => handleSidebarButtonClick("/vocabulary")}
          />
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
