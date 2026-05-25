import { FaGithub } from "react-icons/fa";
import "./css/Footer.css";

interface FooterProps {
  footerClassName: string;
  footerHrClassName: string;
  version: number;
}

function Footer({ version, footerClassName, footerHrClassName }: FooterProps) {
  return (
    <footer className={footerClassName}>
      <hr className={footerHrClassName} />
      <div id="footer-div">
        <FaGithub className="github-logo" />
        <p className="version-paragraph">Version: {version}</p>
      </div>
    </footer>
  );
}

export default Footer;
