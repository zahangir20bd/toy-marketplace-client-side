import { useEffect, useState } from "react";
import Card from "./Card";
// import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("https://toy-galaxy-server-seven.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);
  return (
    <div
      className="my-32"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h2 className="text-4xl text-center font-bold mb-20">
        New Toys Collection Gallery
      </h2>
      <div className="w-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {gallery.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
