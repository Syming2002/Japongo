import "./css/Section.css";

interface SectionProps {
  text: string;
}

function Section({ text }: SectionProps) {
  return <section>{text}</section>;
}

export default Section;
