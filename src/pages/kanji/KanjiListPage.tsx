import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import KanjiCard from "../../components/KanjiCard";

import "../../css/pages.css";
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
    let cancelled = false;
    async function fetchKanji() {
      try {
        kanjiCtx.setLoading(true);
        kanjiCtx.setKanjiArray([]);

        const levelRes = await fetch(`https://kanjiapi.dev/v1/kanji/${level}`);
        const kanjiArray: string[] = await levelRes.json();

        const batchSize = 10;
        const results: KanjiDetails[] = [];

        for (let i = 0; i < kanjiArray.length; i += batchSize) {
          const batch = kanjiArray.slice(i, i + batchSize);
          const batchResults: KanjiDetails[] = await Promise.all(
            batch.map(async (kanji) => {
              const kanjiRes = await fetch(
                `https://kanjiapi.dev/v1/kanji/${kanji}`,
              );
              return kanjiRes.json();
            }),
          );
          results.push(...batchResults);
        }

        if (!cancelled) {
          kanjiCtx.setKanjiArray(results);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) {
          kanjiCtx.setLoading(false);
        }
      }
    }

    fetchKanji();

    return () => {
      cancelled = true;
    };
  }, [level]);

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

      <ul className="kanji-list">
        {kanjiCtx.kanjiArray.map((kanji) => (
          <li key={kanji.kanji} className="kanji-item">
            <KanjiCard
              kanji={kanji.kanji}
              onKanjiCardClick={() =>
                onKanjiCardClick(kanji.jlpt?.toString(), kanji.kanji)
              }
            />
          </li>
        ))}
      </ul>

      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </>
  );
}

export default KanjiListPage;
