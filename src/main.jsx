import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="container mx-auto bg-base-200">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </AuthProvider>
);
