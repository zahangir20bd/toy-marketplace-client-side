import { FaPenNib, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const MyToyTable = ({ myToy, handleDelete }) => {
  console.log(myToy);
  const {
    _id,
    toy_picture,
    toy_name,
    price,
    seller_name,
    seller_email,
    sub_category,
    rating,
    available_quantity,
  } = myToy;

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-28 h-24">
                <img src={toy_picture} alt="My Toy Car Images" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy_name}</div>
              <div className="text-sm opacity-50">Price: ${price}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{seller_name}</p>
          <p>{seller_email}</p>
        </td>
        <td>
          <p>{sub_category}</p>
        </td>
        <td>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar />}
          />
        </td>
        <td>{available_quantity} Pcs</td>
        <th>
          <div className="flex items-center justify-center gap-4">
            <button className="btn btn-square btn-outline">
              <FaPenNib />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToyTable;
