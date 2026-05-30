import Header from "../components/Header";
import GrammarSelectionCard from "../components/GrammarSelectionCard";

import "./css/GrammarMainPage.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function GrammarMainPage() {
  return (
    <div id="grammar-main-page-div">
      <Header />
      <Sidebar />
      <div className="grammar-selection-list-div">
        <GrammarSelectionCard
          grammarPath="/no-particle"
          grammarTheme="La particule の"
        />
      </div>
      <Footer
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
        version={0.1}
      />
    </div>
  );
}

export default GrammarMainPage;
