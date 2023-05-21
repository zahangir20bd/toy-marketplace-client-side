import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleToy = useLoaderData();

  const {
    toy_picture,
    toy_name,
    seller_name,
    seller_email,
    price,
    rating,
    available_quantity,
    details_description,
  } = singleToy;

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-28">
        Details information of {singleToy.toy_name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 border-2 rounded-xl p-5 gap-10 shadow-xl my-24 mx-auto">
        <div className="flex items-center justify-center">
          <img className="rounded-lg" src={toy_picture} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{toy_name}</h2>
          <p className="text-xl mt-5">Seller: {seller_name}</p>
          <p className="text-lg mt-1">Email: {seller_email}</p>
          <div className="flex gap-5 mt-2 text-md">
            <p>Price: ${price}</p>
            <p>Quantity: {available_quantity} Pcs</p>
          </div>
          <div className="mt-1 text-md">
            <span>Rating: </span>
            <Rating
              className="opacity-70"
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar />}
            />
          </div>
          <div className="mt-5">Description: {details_description}</div>
          <div className="card-actions pr-6 lg:pr-7 justify-end">
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
