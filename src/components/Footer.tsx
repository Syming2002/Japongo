import { FaGithub } from "react-icons/fa";
import "./css/Footer.css";

interface FooterProps {
  version: number;
}

function Footer({ version }: FooterProps) {
  return (
    <footer>
      <hr id="footer-hr" />
      <div id="footer-div">
        <FaGithub id="github-logo" />
        <p id="version-paragraph">Version: {version}</p>
      </div>
    </footer>
  );
}

export default Footer;
