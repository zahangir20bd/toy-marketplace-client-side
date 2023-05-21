import { useContext } from "react";
import useDynamicTitle from "../../useDynamicTitle/useDynamicTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  useDynamicTitle("Add-Toy");

  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const toy_picture = form.toy_picture.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const details_description = form.details_description.value;

    const toyData = {
      toy_name,
      toy_picture,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      available_quantity,
      details_description,
    };
    console.log(toyData);

    fetch("http://localhost:5000/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully added a toy Car.",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div
      className="w-full mx-auto"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4862892/pexels-photo-4862892.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <div className="w-2/3 mx-auto py-20">
        <h2 className="text-center text-4xl font-bold mb-10"> Add a Toy </h2>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* input for Toy Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                name="toy_name"
                className="input input-bordered"
              />
            </div>
            {/* input for toy picture */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL of The Toy</span>
              </label>
              <input
                type="text"
                placeholder="Picture Url of the toy"
                name="toy_picture"
                className="input input-bordered"
              />
            </div>
            {/* input for seller name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                name="seller_name"
                className="input input-bordered"
              />
            </div>
            {/* input for seller email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="seller_email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {/* Dropdown input for sub category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <select
                type="text"
                name="sub_category"
                className="input input-bordered"
              >
                <option value="Sports Car">Sports Car</option>
                <option value="Regular Car">Regular Car</option>
                <option value="Mini Police Car">Mini Police Car</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
            {/* input for Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            {/* input for rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
            {/* input for available quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="available_quantity"
                placeholder="Available quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* text area for details description */}
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Details Description</span>
            </label>
            <textarea
              className="rounded-lg p-2"
              type="text"
              name="details_description"
              placeholder="Details Description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="form-control mt-10">
            <input
              className="btn btn-warning btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
