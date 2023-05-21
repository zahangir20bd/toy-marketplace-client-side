/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updatedUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    // console.log(name, email, password, photo);

    // Check Password, Password must be 8 characters and at least one uppercase letter, one lowercase letter, one number and one special character
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password must be 8 characters and at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    if ((name, email, password)) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          setError("");
          form.reset();

          updatedUserData(result.user, name, photoUrl)
            .then(() => {
              console.log("User Name and Photo Url Updated");
            })
            .then((error) => setError(error.message));

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Create Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          // console.log(user);
          navigate("/");
        })
        .catch((error) => setError(error));
    }
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div
      className="hero min-h-screen w-full "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4862892/pexels-photo-4862892.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <Form
        onSubmit={handleRegister}
        className="hero-content md:w-2/3 lg:w-1/3 w-full"
      >
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold opacity-70">Register!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className=" flex items-center gap-2">
              <input
                onClick={handleAccept}
                type="checkbox"
                name="accept-condition"
                className="checkbox"
              />
              <span>
                Accept <Link className="text-primary">Terms & Condition</Link>
              </span>
            </div>
            <p className="text-red-700 text-center">{error}</p>
            <div className="form-control mt-6">
              <input
                disabled={!accept}
                className="btn btn-warning"
                type="submit"
                value="Register"
              />
            </div>
            <div className="text-center">
              <span>Have an account? Go to... </span>
              <Link className="text-warning font-bold" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
