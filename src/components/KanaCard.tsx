import "./css/KanaCard.css";

interface KanaCardProps {
  kana: string;
  romaji: string;
  borderStyle: string;
  width: string;
  romajiFontSize: string;
}

function KanaCard({
  kana,
  romaji,
  borderStyle,
  width,
  romajiFontSize,
}: KanaCardProps) {
  return (
    <>
      <td style={{ border: borderStyle, width: width }} className="kana-row">
        {kana}
        {kana !== " " && <hr id="kana-romaji-hr" />}
        <p style={{ fontSize: romajiFontSize, textAlign: "center" }}>
          {romaji}
        </p>
      </td>
    </>
  );
}

export default KanaCard;
