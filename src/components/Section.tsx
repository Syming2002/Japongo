import "../css/main.css";

interface SectionProps {
  text: string;
}

function Section({ text }: SectionProps) {
  return <section>{text}</section>;
}

export default Section;
