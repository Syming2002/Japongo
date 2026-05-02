import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiCard from "../components/KanjiCard";
import type { Kanji } from "./KanjiCategoryListPage";

import "./css/KanjiListPage.css";

interface KanjiListPageProps {
  level: string;
  levelTitle: string;
}

function KanjiListPage({ level, levelTitle }: KanjiListPageProps) {
  const [loading, setLoading] = useState(true);
  const [kanji, setKanji] = useState<Kanji[]>([]);

  console.log(kanji);

  useEffect(() => {
    setLoading(true);
    async function fetchKanji() {
      try {
        setLoading(true);

        const res = await fetch(`https://kanjiapi.dev/v1/kanji/${level}`);
        const kanjiArray: string[] = await res.json();

        const results: Kanji[] = await Promise.all(
          kanjiArray.map(async (kanji) => {
            const res = await fetch(
              `https://kanjiapi.dev/v1/kanji/${kanji}`,
            ).finally(() => setLoading(false));
            return res.json();
          }),
        );

        setKanji(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchKanji();
  }, []);

  return (
    <>
      <Header />
      <h1 id="kanji-title">Kanji du {levelTitle}</h1>
      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}

      <table className="kanji-table">
        <tbody
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "45px",
          }}
        >
          {kanji.map((kanji, index) => (
            <tr key={index}>
              <KanjiCard
                kanji={kanji.kanji}
                key={index}
                meaningEn={kanji.heisig_en}
                borderStyle="1px solid $sumo_iro"
                width="250px"
              />
            </tr>
          ))}
        </tbody>
      </table>

      <Footer version={0.1} />
    </>
  );
}

export default KanjiListPage;
