import { Form, Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4862892/pexels-photo-4862892.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center">
          <img
            className="md:mr-14"
            src="https://i.ibb.co/tP9sFg6/login-image-removebg-preview.png"
            alt="Login Page Image"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-5xl font-bold opacity-70">Login!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className="text-red-700 text-center"></p>
              <div className="form-control">
                <input
                  className="btn btn-warning "
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <span>New to Toy-Galaxy? Go to... </span>
                <Link className="text-primary" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </Form>
          <div className="divider">Or Continue With</div>
          <div className="mx-10 mb-10">
            <button className="btn btn-outline btn-warning text-orange-900 w-full mb-2">
              <FaGoogle className="me-1" />
              <span>Login With Google</span>
            </button>
            <button className="btn btn-outline btn-warning text-orange-900 w-full">
              <FaGithub className="me-1" />
              <span>Login With GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
