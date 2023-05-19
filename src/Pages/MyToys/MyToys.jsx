import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";

const MyToys = () => {
  useDynamicTitle("My-Toys");
  return (
    <div className="my-20">
      <h2 className="mt-10 text-3xl text-center font-bold">My Toys</h2>
    </div>
  );
};

export default MyToys;
