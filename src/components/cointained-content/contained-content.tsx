import React from "react";
import './contained-content.css'
interface ContentProps {
    title: string;
    text: string;
    link: string
    imagePath?: string;
    className?: string;
}

const ContainedContent: React.FC<ContentProps> = ({ title, text, link, imagePath, className }) => {
    return (
      <a className={`project-container ${className}`} href={link}>
        <div className="thumbnail">
          <img src={imagePath} alt="File" />
        </div>
        <div className="detail">
          <h2 className={title}>{title}</h2>
          <p>{text}</p>
        </div>
      </a>
    );
  };
  
  export default ContainedContent;