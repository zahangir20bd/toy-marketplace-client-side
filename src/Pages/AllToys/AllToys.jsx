import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";

const AllToys = () => {
  useDynamicTitle("All-Toys");
  return (
    <div className="my-20">
      <h2 className="mt-10 text-3xl text-center font-bold">All Toys</h2>
    </div>
  );
};

export default AllToys;
