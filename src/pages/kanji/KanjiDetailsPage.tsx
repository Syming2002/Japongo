import { useParams } from "react-router";
import { useKanji } from "../../hooks/useKanji";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "./css/KanjiDetailsPage.css";

type KanjiParams = {
  kanjiCharacter?: string;
};

function KanjiDetailsPage() {
  const kanjiCtx = useKanji();
  const { kanjiCharacter } = useParams<KanjiParams>();

  const kanji = kanjiCtx.kanjiArray.find(
    (kanji) => kanji.kanji === kanjiCharacter,
  );

  if (!kanji) {
    return <p>Kanji introuvable</p>;
  }

  return (
    <div className="kanji-details-page-div">
      <Header />
      <Sidebar />
      <div className="kanji-details-card-wrapper">
        <div className="kanji-details-card">
          <h1 className="kanji-details-main-title">{`Détails du kanji ${kanjiCharacter}`}</h1>
          <div className="kanji-details-div">
            <p>{`JLPT: ${kanji.jlpt}`}</p>
            <p>{`Nombre de trait: ${kanji.stroke_count}`}</p>
            <p>{`Signification: ${kanji.heisig_en}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanjiDetailsPage;
