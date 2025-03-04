import Link from "next/link";
import { text } from "stream/consumers";
type Button = {
  width?: string;
  text: string;
  url: string;
};
const Button = (props: Button) => {
  return (
    <Link
      className="btn"
      style={{ width: `${props.width}` }}
      href={`${props.url}`}>
      <span className="btn-text">
        {props.text} <i className="fas fa-long-arrow-alt-right"></i>
      </span>
    </Link>
  );
};

export default Button;
