import img1 from "../../../assets/images/image1.svg";
import img2 from "../../../assets/images/image2.svg";
import img3 from "../../../assets/images/image3.svg";
import img4 from "../../../assets/images/image4.svg";
import img5 from "../../../assets/images/image5.svg";
import img6 from "../../../assets/images/image6.svg";
import visa from "../../../assets/icons/visa.png";
import master from "../../../assets/icons/master.png";
import rocket from "../../../assets/icons/rocket.png";
import bkash from "../../../assets/icons/bkash.png";

const Follow = () => {
  return (
    <div className="my-32">
      <h2 className="text-4xl text-center font-bold my-10">
        Follow @Toy-Galaxy
      </h2>

      <h4 className="text-center mt-6 mb-16 font-semibold">
        Daily inspiration on Our Social Media
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mx-10">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
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
