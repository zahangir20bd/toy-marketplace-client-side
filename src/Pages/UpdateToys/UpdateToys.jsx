import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const itemForUpdate = useLoaderData();
  //   console.log(itemForUpdate);
  const { _id, toy_name, price, available_quantity } = itemForUpdate;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price;
    const available_quantity = form.available_quantity;
    const details_description = form.details_description;
    const updateInfo = { price, available_quantity, details_description };
    console.log(updateInfo);

    fetch(`http://localhost:5000/alltoys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price: price,
        available_quantity: available_quantity,
        details_description: details_description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update State
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
        <h2 className="text-center text-4xl font-bold mb-10">
          Update the Info of {toy_name}
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* input for Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder={price}
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
                placeholder={available_quantity}
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
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
