import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "./css/NoParticuleGrammarPage.css";

function NoParticuleGrammarPage() {
  return (
    <div id="no-particule-grammar-page-div">
      <Header />
      <Sidebar />
      <h1 id="no-particule-main-title">
        Bienvenue sur le cours de grammaire de la particule の
      </h1>
      <Footer
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
        version={0.1}
      />
    </div>
  );
}

export default NoParticuleGrammarPage;
