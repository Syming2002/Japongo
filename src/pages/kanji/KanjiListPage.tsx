import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import KanjiCard from "../../components/KanjiCard";

import "./css/KanjiListPage.css";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router";
import { useKanji, type KanjiDetails } from "../../hooks/useKanji";

interface KanjiListPageProps {
  level: string;
  levelTitle: string;
}

function KanjiListPage({ level, levelTitle }: KanjiListPageProps) {
  const kanjiCtx = useKanji();

  console.log(kanjiCtx.kanjiArray);

  useEffect(() => {
    kanjiCtx.setLoading(true);
    async function fetchKanji() {
      try {
        kanjiCtx.setLoading(true);

        const levelRes = await fetch(`https://kanjiapi.dev/v1/kanji/${level}`);
        const kanjiArray: string[] = await levelRes.json();

        const results: KanjiDetails[] = await Promise.all(
          kanjiArray.map(async (kanji) => {
            const kanjiRes = await fetch(
              `https://kanjiapi.dev/v1/kanji/${kanji}`,
            ).finally(() => kanjiCtx.setLoading(false));
            return kanjiRes.json();
          }),
        );

        kanjiCtx.setKanjiArray(results);
      } catch (err) {
        console.error(err);
      } finally {
        kanjiCtx.setLoading(false);
      }
    }

    fetchKanji();
  }, []);

  const navigate = useNavigate();

  function onKanjiCardClick(
    linkJLPT: string | undefined,
    linkCharacter: string,
  ) {
    navigate(`/jlpt-${linkJLPT}/${linkCharacter}`);
  }

  return (
    <>
      <Header />
      <Sidebar />
      <h1 id="kanji-title">Kanji du {levelTitle}</h1>
      {kanjiCtx.loading && (
        <h2 style={{ textAlign: "center" }}>Chargement...</h2>
      )}

      <table className="kanji-table">
        <tbody>
          <tr className="kanji-table-row">
            {kanjiCtx.kanjiArray.map((kanji) => (
              <KanjiCard
                kanji={kanji.kanji}
                onKanjiCardClick={() =>
                  onKanjiCardClick(kanji.jlpt?.toString(), kanji.kanji)
                }
                key={kanji.kanji}
              />
            ))}
          </tr>
        </tbody>
      </table>

      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </>
  );
}

export default KanjiListPage;
