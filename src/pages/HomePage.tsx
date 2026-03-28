import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

function HomePage() {
  return (
    <>
      <Header />
      <Section text="Bienvenue sur Japongo un site pour apprendre la langue japonaise. Sur ce site vous trouverez tout ce qu'il faut pour apprendre le japonais. Attention je ne suis en aucun cas un professeur de japonais, j'ai créer ce site pour les personnes parlant le français souhaitant apprendre la langue du pays du soleil levant" />
      <Footer version={0.1} />
    </>
  );
}

export default HomePage;
