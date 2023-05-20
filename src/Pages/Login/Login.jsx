import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, gitHubSignIN } = useContext(AuthContext);
  const [error, setError] = useState("");

  // Redirect to expected path
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   SignIn Handler with email and Password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        // console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  // Google SignIn Handler
  const handleGoogleSign = async () => {
    setError("");
    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  // Github SignIn Handler
  const handleGithubSign = async () => {
    setError("");
    try {
      await gitHubSignIN();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
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
              <p className="text-red-700 text-center">{error}</p>
              <div className="form-control">
                <input
                  className="btn btn-warning "
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </Form>
          <div className="divider">Or Continue With</div>
          <div className="mx-10 mb-10">
            <button
              onClick={handleGoogleSign}
              className="btn btn-outline btn-warning text-orange-900 w-full mb-2"
            >
              <FaGoogle className="me-1" />
              <span> Google</span>
            </button>
            <button
              onClick={handleGithubSign}
              className="btn btn-outline btn-warning text-orange-900 w-full"
            >
              <FaGithub className="me-1" />
              <span> GitHub</span>
            </button>
            <div className="mt-6 text-center">
              <span>New to Toy-Galaxy? Go to... </span>
              <Link className="text-warning font-bold" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
