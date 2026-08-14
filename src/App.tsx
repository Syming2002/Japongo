import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import KanaPage from "./pages/KanaPage";
import KanjiCategoryListPage from "./pages/kanji/KanjiCategoryListPage";
import KanjiListPage from "./pages/kanji/KanjiListPage";
import GrammarMainPage from "./pages/grammar/GrammarMainPage";
import { HIRAGANA_PARTICULE } from "./utils/kana";
import GrammarParticulePage from "./pages/grammar/GrammarParticlePage";
import KanjiDetailsPage from "./pages/kanji/KanjiDetailsPage";
import VerbsMainPage from "./pages/verbs/VerbsMainPage";
import VocabularyMainPage from "./pages/vocabulary/VocabularyMainPage";
import { KanjiProvider } from "./hooks/useKanji";
import { KanaProvider } from "./hooks/useKana";

function App() {
  return (
    <HashRouter>
      <KanaProvider>
        <KanjiProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kana" element={<KanaPage />} />
            <Route path="/kanji" element={<KanjiCategoryListPage />} />

            <Route path={"/:kanjiLevel"} element={<KanjiListPage />} />
            <Route path="/grammar" element={<GrammarMainPage />} />
            {HIRAGANA_PARTICULE.map((hiragana) => (
              <Route
                path={`/particle/${hiragana}`}
                element={<GrammarParticulePage hiraganaParticle={hiragana} />}
              />
            ))}
            <Route
              path={"/:kanjiLevel/:kanjiCharacter"}
              element={<KanjiDetailsPage />}
            />
            <Route path={"/verbs"} element={<VerbsMainPage />} />
            <Route path={"/vocabulary"} element={<VocabularyMainPage />} />
          </Routes>
        </KanjiProvider>
      </KanaProvider>
    </HashRouter>
  );
}

export default App;
