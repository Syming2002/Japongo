import "./css/Button.css";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}

export default Button;
