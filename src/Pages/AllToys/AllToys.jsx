import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";
import ToyTable from "./ToyTable/ToyTable";
import { useEffect, useState } from "react";

const AllToys = () => {
  useDynamicTitle("All-Toys");

  const [allToysData, setAllToysData] = useState([]);

  useEffect(() => {
    fetch("https://toy-galaxy-server-seven.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToysData(data));
  }, []);

  // const allToysData = useLoaderData();
  return (
    <div className="my-20">
      <h2 className="mt-10 text-3xl text-center font-bold">
        All Toys ${allToysData.length}
      </h2>

      <div className="overflow-x-auto w-full px-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          {allToysData.map((toyData) => (
            <ToyTable key={toyData._id} toyData={toyData}></ToyTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
