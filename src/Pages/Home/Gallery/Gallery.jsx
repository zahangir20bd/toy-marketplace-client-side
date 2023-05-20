import Card from "./Card";
import "./Gallery.css";

const Gallery = () => {
  const cards = [
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 1",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 2",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 2",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 2",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 2",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-260nw-636992845.jpg",
      title: "Card 2",
    },
  ];

  return (
    <div className="my-32">
      <h2 className="text-4xl text-center font-bold mb-16">
        Up Coming Toys Gallery
      </h2>
      <div className="card-container mb-10">
        {cards.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
