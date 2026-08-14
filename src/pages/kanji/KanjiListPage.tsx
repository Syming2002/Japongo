import { useCallback, useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import KanjiCard from "../../components/KanjiCard";

import "../../css/pages.css";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router";
import { useKanji, type KanjiDetails } from "../../hooks/useKanji";
import { KANJI_LEVELS } from "../../utils/kanji";
import Filter from "../../components/Filter";

type KanjiLevelParams = {
  kanjiLevel?: "jlpt-5" | "jlpt-4" | "jlpt-3" | "jlpt-2" | "jlpt-1";
};

function KanjiListPage() {
  const kanjiCtx = useKanji();
  const { kanjiLevel } = useParams<KanjiLevelParams>();

  const [search, setSearch] = useState("");
  const [strokeCount, setStrokeCount] = useState(0);

  const navigate = useNavigate();

  const currentLevel = KANJI_LEVELS.find(({ url }) => kanjiLevel === url);

  useEffect(() => {
    async function fetchKanji() {
      try {
        kanjiCtx.setLoading(true);

        const res = await fetch(
          `https://kanjiapi.dev/v1/kanji/${currentLevel?.url}`,
        );

        const kanjiCharacters: string[] = await res.json();

        const results: KanjiDetails[] = await Promise.all(
          kanjiCharacters.map(async (character) => {
            const kanjiRes = await fetch(
              `https://kanjiapi.dev/v1/kanji/${character}`,
            );

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

    return () => {
      kanjiCtx.setKanjiArray([]);
    };
  }, [currentLevel]);

  if (!currentLevel) {
    return <p>Level not found</p>;
  }

  const handleKanjiClick = useCallback(
    (jlptLink: string, kanji: string) => {
      navigate(`/${jlptLink}/${kanji}`);
    },
    [navigate],
  );

  const filterKanjiCharacter = useMemo(() => {
    return kanjiCtx.kanjiArray.filter((kanji) => {
      const macthesCharacter = kanji.kanji.includes(search);

      const matchesStrokeCount =
        strokeCount === 0 || kanji.stroke_count === strokeCount;

      return macthesCharacter && matchesStrokeCount;
    });
  }, [search, strokeCount, kanjiCtx.kanjiArray]);

  return (
    <div>
      <Header />
      <Sidebar />
      <Filter
        search={search}
        setSearch={setSearch}
        stroke_count={strokeCount}
        setStrokeCount={setStrokeCount}
      />
      <h1 id="kanji-title">Kanji du {currentLevel.title}</h1>
      {kanjiCtx.loading && (
        <h2 style={{ textAlign: "center" }}>Chargement...</h2>
      )}

      <ul className="kanji-list">
        {filterKanjiCharacter.map((kanji) => (
          <KanjiCard
            key={kanji.kanji}
            kanji={kanji.kanji}
            onKanjiCardClick={() =>
              handleKanjiClick(currentLevel.url, kanji.kanji)
            }
          />
        ))}
      </ul>

      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </div>
  );
}

export default KanjiListPage;
