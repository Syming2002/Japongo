import { Link } from "react-router";

interface ButtonProps {
  title: string;
  className: string;
  link: string;
}

function LinkPage({ title, className, link }: ButtonProps) {
  return (
    <Link className={className} title={title} to={link}>
      {title}
    </Link>
  );
}

export default LinkPage;
