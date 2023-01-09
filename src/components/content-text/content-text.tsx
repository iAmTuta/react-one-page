import React from "react";
// import * as DOMPurify from 'dompurify';

// let clean = DOMPurify.sanitize(dirty);

interface TextProps {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}

const Text: React.FC<TextProps> = ({ text, type, className = "displayText" }) => {
  let element;
  switch (type) {
    case "h1":
      element = <h1>{text}</h1>;
      break;
    case "h2":
      element = <h2>{text}</h2>;
      break;
    case "h3":
      element = <h3>{text}</h3>;
      break;
    case "h4":
      element = <h4>{text}</h4>;
      break;
    case "h5":
      element = <h5>{text}</h5>;
      break;
    case "h6":
      element = <h6>{text}</h6>;
      break;
    case "p":
      element = <p>{text}</p>;
      break;
    case "span":
    element = <p>{text}</p>;
    break;
    default:
      console.error(`Invalid type: ${type}`);
      element = <p>{text}</p>;
  }

  return <div className={className}>{element}</div>;
};

export default Text;
