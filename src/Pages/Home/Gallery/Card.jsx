/* eslint-disable react/prop-types */
import { useState } from "react";

const Card = ({ imageSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`overlay ${isHovered ? "hidden" : ""}`} />
      <img
        src={imageSrc}
        alt="Card Image"
        className={isHovered ? "focused" : ""}
      />
      {!isHovered && (
        <div className="title text-center text-2xl font-bold">{title}</div>
      )}
    </div>
  );
};

export default Card;
