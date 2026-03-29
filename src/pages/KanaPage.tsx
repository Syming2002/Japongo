import Footer from "../components/Footer";
import Header from "../components/Header";
import KanaCard from "../components/KanaCard";
import { useKana } from "../hooks/useKana";

import "./css/KanaPage.css";

function KanaPage() {
  const { kana } = useKana();

  function isARow(id: number) {
    return id >= 1 && id < 6;
  }

  function isKRow(id: number) {
    return id >= 6 && id < 11;
  }

  function isSRow(id: number) {
    return id >= 11 && id < 16;
  }

  function isTRow(id: number) {
    return id >= 16 && id < 21;
  }

  function isNRow(id: number) {
    return id >= 21 && id < 26;
  }

  function isHRow(id: number) {
    return id >= 26 && id < 31;
  }

  function isMRow(id: number) {
    return id >= 31 && id < 36;
  }

  function isYRow(id: number) {
    return id >= 36 && id < 41;
  }

  function isRRow(id: number) {
    return id >= 41 && id < 46;
  }

  function isWRow(id: number) {
    return id >= 46 && id < 51;
  }

  function isLastRow(id: number) {
    return id >= 51 && id < 56;
  }

  return (
    <>
      <Header />
      <h1 id="hiragana-title">Tableau des Hiragana</h1>
      <table id="kana-table">
        <tbody>
          <tr>
            {kana.map(
              (kana) =>
                isARow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isKRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isSRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isTRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isNRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isHRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isMRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isYRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isRRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isWRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isLastRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.hiragana}
                    romaji={kana.romaji}
                    borderStyle={kana.hiragana === " " ? "none" : ""}
                    width={kana.hiragana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
        </tbody>
      </table>
      <hr id="kana-page-hr" />
      <h1 id="katakana-title">Tableau des Katakana</h1>
      <table id="kana-table">
        <tbody>
          <tr>
            {kana.map(
              (kana) =>
                isARow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isKRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isSRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isTRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isNRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isHRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isMRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isYRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isRRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isWRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
          <tr>
            {kana.map(
              (kana) =>
                isLastRow(kana.id) && (
                  <KanaCard
                    key={kana.id}
                    kana={kana.katakana}
                    romaji={kana.romaji}
                    borderStyle={kana.katakana === " " ? "none" : ""}
                    width={kana.katakana === " " ? "178.2px" : ""}
                    romajiFontSize="56px"
                  />
                ),
            )}
          </tr>
        </tbody>
      </table>
      <Footer version={0.1} />
    </>
  );
}

export default KanaPage;
