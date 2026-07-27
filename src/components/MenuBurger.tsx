import "../css/sidebar.css";

interface MenuBurgerProps {
  toggle: boolean;
  handleMenuBurgerClick: () => void;
}

function MenuBurger({ toggle, handleMenuBurgerClick }: MenuBurgerProps) {
  return (
    <button
      className={toggle ? "menu-burger-button-active" : "menu-burger-button"}
      onClick={handleMenuBurgerClick}
    >
      <span className={toggle ? "bar bar-1-active" : "bar bar-1"}></span>
      <span className={toggle ? "bar bar-2-active" : "bar bar-2"}></span>
      <span className={toggle ? "bar bar-3-active" : "bar bar-3"}></span>
    </button>
  );
}

export default MenuBurger;
