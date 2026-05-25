import "./css/Section.css";
import Logo from "./Logo";

interface SectionProps {
  text: string;
}

function Section({ text }: SectionProps) {
  return (
    <>
      <section>{text}</section>
    </>
  );
}

export default Section;
