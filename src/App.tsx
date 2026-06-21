import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { KanaProvider } from "./hooks/useKana";
import KanaPage from "./pages/KanaPage";
import KanjiCategoryListPage from "./pages/kanji/KanjiCategoryListPage";
import { KanjiProvider, useKanji } from "./hooks/useKanji";
import KanjiListPage from "./pages/kanji/KanjiListPage";
import GrammarMainPage from "./pages/grammar/GrammarMainPage";
import { HIRAGANA_PARTICULE } from "./utils/kana";
import GrammarParticulePage from "./pages/grammar/GrammarParticlePage";
import KanjiDetailsPage from "./pages/kanji/KanjiDetailsPage";
import { KANJI_LEVEL_URL } from "./utils/kanji";

function App() {
  const kanjiCtx = useKanji();

  return (
    <HashRouter>
      <KanaProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kana" element={<KanaPage />} />
          <Route path="/kanji" element={<KanjiCategoryListPage />} />
          <Route
            path="/jlpt-5"
            element={<KanjiListPage level="jlpt-5" levelTitle="JLPT N5" />}
          />
          <Route
            path="/jlpt-4"
            element={<KanjiListPage level="jlpt-4" levelTitle="JLPT N4" />}
          />
          <Route
            path="/jlpt-3"
            element={<KanjiListPage level="jlpt-3" levelTitle="JLPT N3" />}
          />
          <Route
            path="/jlpt-2"
            element={<KanjiListPage level="jlpt-2" levelTitle="JLPT N2" />}
          />
          <Route
            path="/jlpt-1"
            element={<KanjiListPage level="jlpt-1" levelTitle="JLPT N1" />}
          />
          <Route path="/grammar" element={<GrammarMainPage />} />
          {HIRAGANA_PARTICULE.map((hiragana) => (
            <Route
              path={`/particle/${hiragana}`}
              element={<GrammarParticulePage hiraganaParticle={hiragana} />}
            />
          ))}
          <Route
            path={"/:kanjiJLPT/:kanjiCharacter"}
            element={<KanjiDetailsPage />}
          />
        </Routes>
      </KanaProvider>
    </HashRouter>
  );
}

export default App;
