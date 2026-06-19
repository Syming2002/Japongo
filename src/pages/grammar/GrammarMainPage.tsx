import Header from "../../components/Header";
import GrammarSelectionCard from "../../components/GrammarSelectionCard";

import "./css/GrammarMainPage.css";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { HIRAGANA_PARTICULE } from "../../utils/kana";

function GrammarMainPage() {
  return (
    <div id="grammar-main-page-div">
      <Header />
      <Sidebar />
      <h1 className="grammar-main-page-tooltip">
        Cliquez sur une particule sur laquelle vous voulez approfondir
      </h1>
      <div className="grammar-selection-list-div-wrapper">
        <div className="grammar-selection-list-div">
          {HIRAGANA_PARTICULE.map((hiragana) => (
            <GrammarSelectionCard
              key={hiragana}
              grammarPath={`/particle/${hiragana}`}
              grammarTheme={`La particule ${hiragana}`}
            />
          ))}
        </div>
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
