import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { BeatLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <BeatLoader className="mx-auto" color="#36d7b7" />;
  }

  if (user) {
    return children;
  }

  const notify = confirm("You have to login first to view details");

  if (notify) {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
