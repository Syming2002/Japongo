import Footer from "../../components/Footer";
import Header from "../../components/Header";
import KanjiCategory from "../../components/KanjiCategory";
import Sidebar from "../../components/Sidebar";

import "./css/KanjiCategoryListPage.css";

function KanjiCategoryListPage() {
  return (
    <div className="kanji-category-list-div">
      <Header />
      <Sidebar />
      <h1 id="kanji-category-list-main-title">Liste des Kanji par JLPT</h1>
      <div id="kanji-jlpt-category-list-div">
        <KanjiCategory level="JLPT N5" path="jlpt-5" />
        <KanjiCategory level="JLPT N4" path="jlpt-4" />
        <KanjiCategory level="JLPT N3" path="jlpt-3" />
        <KanjiCategory level="JLPT N2" path="jlpt-2" />
        <KanjiCategory level="JLPT N1" path="jlpt-1" />
      </div>
      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </div>
  );
}

export default KanjiCategoryListPage;
