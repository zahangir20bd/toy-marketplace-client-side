import { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyTable from "./MyToyTable/MyToyTable";

const MyToys = () => {
  useDynamicTitle("My-Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const email = user?.email;

  const url = `http://localhost:5000/alltoys?email=${email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  return (
    <div className="my-20">
      <h2 className="mt-10 text-3xl text-center font-bold">
        My Toys {myToys.length}
      </h2>
      <div className=" mx-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center"> Profile</th>
                <th>Seller Name & Email</th>
                <th>Sub Category</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            {myToys.map((myToy) => (
              <MyToyTable key={myToy._id} myToy={myToy}></MyToyTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
