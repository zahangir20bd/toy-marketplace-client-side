import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Register = () => {
  const [accept, setAccept] = useState(false);

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4862892/pexels-photo-4862892.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <Form onSubmit={"handleRegister"} className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold opacity-70">Register!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="username"
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
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
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
            <p className="text-red-700 text-center">{"error"}</p>
            <div className="form-control mt-6">
              <input
                disabled={!accept}
                className="btn btn-warning"
                type="submit"
                value="Register"
              />
            </div>
            <div>
              <span>Do You have an account? Go to... </span>
              <Link className="text-primary" to="/login">
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
