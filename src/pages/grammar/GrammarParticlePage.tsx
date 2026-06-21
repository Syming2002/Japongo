import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "./css/GrammarParticlePage.css";

interface GrammarParticulePageProps {
  hiraganaParticle: string;
}

function GrammarParticulePage({ hiraganaParticle }: GrammarParticulePageProps) {
  return (
    <div
      className={`particle-grammar-page-div ${hiraganaParticle}-particle-grammar-page-div`}
    >
      <Header />
      <Sidebar />
      <h1
        className={
          "particle-main-title " + hiraganaParticle + "particle-main-title"
        }
      >
        {"Bienvenue sur le cours de grammaire de la particule " +
          hiraganaParticle}
      </h1>
      <Footer
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
        version={0.1}
      />
    </div>
  );
}

export default GrammarParticulePage;
