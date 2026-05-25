import Header from "../components/Header";
import GrammarSelectionCard from "../components/GrammarSelectionCard";

import "./css/GrammarMainPage.css";
import Footer from "../components/Footer";

function GrammarMainPage() {
  return (
    <>
      <Header />
      <div className="grammar-selection-list-div">
        <GrammarSelectionCard
          grammarPath="/no-particle"
          grammarTheme="La particule の"
        />
      </div>
      <Footer footerClassName="main-footer" version={0.1} />
    </>
  );
}

export default GrammarMainPage;
