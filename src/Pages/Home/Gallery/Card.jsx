/* eslint-disable react/prop-types */
import { useState } from "react";

const Card = ({ card }) => {
  const { image, title } = card;
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative w-full h-full shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="w-full h-full">
        <img src={image} alt="Image" className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-${
          isHovered ? "50" : "0"
        } transition-opacity duration-500`}
      ></div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 text-white">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
