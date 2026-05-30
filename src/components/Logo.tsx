import { useNavigate } from "react-router";
import "./css/Logo.css";

function Logo() {
  const navigate = useNavigate();

  return (
    <button
      style={{ background: "none", border: "none" }}
      id="logo"
      onClick={() => navigate("/")}
    >
      <div id="upper-logo">
        <div id="dot"></div>
        <div id="vertical-bar"></div>
      </div>
      <div id="lower-logo">
        <div id="horizontal-bar"></div>
        <div id="buckle"></div>
      </div>
    </button>
  );
}

export default Logo;
