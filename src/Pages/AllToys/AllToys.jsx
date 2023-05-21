import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";
import ToyTable from "./ToyTable/ToyTable";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  useDynamicTitle("All-Toys");

  const [allToysData, setAllToysData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];
  const optionItemsPerPage = [5, 10, 15, 20];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://toy-galaxy-server-seven.vercel.app/alltoys?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setAllToysData(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);
  // useEffect(() => {
  //   fetch("https://toy-galaxy-server-seven.vercel.app/alltoys")
  //     .then((res) => res.json())
  //     .then((data) => setAllToysData(data));
  // }, []);

  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <>
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
      {/* Pagination */}
      <div className="pagination text-center mb-5 opacity-70">
        {pageNumbers.map((number) => (
          <button
            className="btn mr-2"
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {optionItemsPerPage.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default AllToys;
