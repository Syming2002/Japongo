import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiCategory from "../components/KanjiCategory";

import "./css/KanjiCategoryListPage.css";

export type Kanji = {
  freq_mainichi_shinbun: number;
  grade: number;
  heisig_en: string;
  jlpt: number;
  kanji: string;
  kun_readings: string[];
  meanings: string[];
  name_readings: string[];
  notes: [];
  on_readings: string[];
  stroke_count: number;
  unicode: string;
};

function KanjiCategoryListPage() {
  return (
    <>
      <Header />
      <div id="kanji-category-list-div">
        <KanjiCategory level="JLPT N5" path="kanjiN5" />
        <KanjiCategory level="JLPT N4" path="kanjiN4" />
        <KanjiCategory level="JLPT N3" path="kanjiN3" />
        <KanjiCategory level="JLPT N2" path="kanjiN2" />
        <KanjiCategory level="JLPT N1" path="kanjiN1" />
      </div>
      <Footer version={0.1} />
    </>
  );
}

export default KanjiCategoryListPage;
