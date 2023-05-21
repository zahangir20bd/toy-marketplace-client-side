import { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyTable from "./MyToyTable/MyToyTable";
import Swal from "sweetalert2";

const MyToys = () => {
  useDynamicTitle("My-Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const email = user?.email;

  const url = `https://toy-galaxy-server-seven.vercel.app/alltoys?email=${email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-galaxy-server-seven.vercel.app/alltoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

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
                <th> Profile</th>
                <th>Seller Name & Email</th>
                <th>Sub Category</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            {myToys.map((myToy) => (
              <MyToyTable
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToyTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
