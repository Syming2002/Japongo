import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";

import "./css/Homepage.css";

function HomePage() {
  return (
    <div className="home-page-div">
      <Header />
      <Sidebar />
      <Section text="Bienvenue sur Japongo un site pour apprendre la langue japonaise. Sur ce site vous trouverez tout ce qu'il faut pour apprendre le japonais. Attention je ne suis en aucun cas un professeur de japonais, j'ai créé ce site pour les personnes souhaitant apprendre la langue du pays du soleil levant" />
      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </div>
  );
}

export default HomePage;
