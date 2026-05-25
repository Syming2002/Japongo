import "./css/Button.css";

interface ButtonProps {
  title: string;
  className: string;
  onClick: () => void;
}

function Button({ title, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
