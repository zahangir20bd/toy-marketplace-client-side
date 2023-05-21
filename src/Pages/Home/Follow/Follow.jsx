import visa from "../../../assets/icons/visa.png";
import master from "../../../assets/icons/master.png";
import rocket from "../../../assets/icons/rocket.png";
import bkash from "../../../assets/icons/bkash.png";
import { useEffect, useState } from "react";
import Reviews from "./Review/Reviews";

const Follow = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://toy-galaxy-server-seven.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-32">
      <h2 className="text-4xl text-center font-bold my-10">
        Follow @Toy-Galaxy
      </h2>

      <h4 className="text-center mt-6 mb-16 font-semibold">
        Daily inspiration on Our Social Media
      </h4>
      {/* Map reviews and load all review */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
        {reviews.map((feedback) => (
          <Reviews key={feedback._id} feedback={feedback}></Reviews>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 my-32">
        <div className="border-2 border-dashed border-stone-300 py-16 px-24 text-center">
          <h2 className="text-2xl uppercase font-bold opacity-90">
            Free Shipping
          </h2>
          <p className="mt-4 opacity-80 font-semibold">
            On orders over $100.00
          </p>
        </div>
        <div className="border-2 border-dashed border-stone-300 py-16 px-24 text-center">
          <h2 className="text-2xl uppercase font-bold opacity-90">
            Free Returns
          </h2>
          <p className="mt-4 opacity-80 font-semibold">
            100% money back guarantee
          </p>
        </div>
        <div className="border-2 border-dashed border-stone-300 py-16 px-24 text-center">
          <h2 className="text-2xl uppercase font-bold opacity-90">
            Secure Payments
          </h2>
          <div className=" w-full flex justify-center gap-2 mt-4">
            <img className="w-12 h-8" src={master} alt="" />
            <img className="w-12 h-8" src={visa} alt="" />
            <img className="w-12 h-8" src={bkash} alt="" />
            <img className="w-12 h-8" src={rocket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
