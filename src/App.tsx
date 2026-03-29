import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { KanaProvider } from "./hooks/useKana";
import KanaPage from "./pages/KanaPage";

function App() {
  return (
    <HashRouter>
      <KanaProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kana" element={<KanaPage />} />
        </Routes>
      </KanaProvider>
    </HashRouter>
  );
}

export default App;
