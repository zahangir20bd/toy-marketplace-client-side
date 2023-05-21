import { useState } from "react";

const Reviews = ({ feedback }) => {
  const { image, title, review } = feedback;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-full shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full">
        <img src={image} alt="Image" className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-${
          isHovered ? "50" : "10"
        } transition-opacity duration-500`}
      ></div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 text-white">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="mt-2 text-center">{review}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
