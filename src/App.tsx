import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { KanaProvider } from "./hooks/useKana";
import KanaPage from "./pages/KanaPage";
import KanjiCategoryListPage from "./pages/KanjiCategoryListPage";
import { KanjiProvider } from "./hooks/useKanji";
import KanjiListPage from "./pages/KanjiListPage";
import GrammarMainPage from "./pages/grammar/GrammarMainPage";
import { HIRAGANA_PARTICULE } from "./utils/kana";
import GrammarParticulePage from "./pages/grammar/GrammarParticlePage";

function App() {
  return (
    <HashRouter>
      <KanaProvider>
        <KanjiProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kana" element={<KanaPage />} />
            <Route path="/kanji" element={<KanjiCategoryListPage />} />
            <Route
              path="/kanjiN5"
              element={<KanjiListPage level="jlpt-5" levelTitle="JLPT N5" />}
            />
            <Route
              path="/kanjiN4"
              element={<KanjiListPage level="jlpt-4" levelTitle="JLPT N4" />}
            />
            <Route
              path="/kanjiN3"
              element={<KanjiListPage level="jlpt-3" levelTitle="JLPT N3" />}
            />
            <Route
              path="/kanjiN2"
              element={<KanjiListPage level="jlpt-2" levelTitle="JLPT N2" />}
            />
            <Route
              path="/kanjiN1"
              element={<KanjiListPage level="jlpt-1" levelTitle="JLPT N1" />}
            />
            <Route path="/grammar" element={<GrammarMainPage />} />
            {HIRAGANA_PARTICULE.map((hiragana) => (
              <Route
                path={`/particle/${hiragana}`}
                element={<GrammarParticulePage hiraganaParticle={hiragana} />}
              />
            ))}
          </Routes>
        </KanjiProvider>
      </KanaProvider>
    </HashRouter>
  );
}

export default App;
