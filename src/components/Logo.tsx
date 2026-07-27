import { useNavigate } from "react-router";
import "../css/header.css";

function Logo() {
  const navigate = useNavigate();

  return (
    <div id="logo" onClick={() => navigate("/")}>
      <div id="upper-logo">
        <div id="dot"></div>
        <div id="vertical-bar"></div>
      </div>
      <div id="lower-logo">
        <div id="horizontal-bar"></div>
        <div id="buckle"></div>
      </div>
    </div>
  );
}

export default Logo;
