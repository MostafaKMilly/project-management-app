import { createBrowserRouter } from "react-router-dom";
import { Login, Projects, Signup } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: Login.loader,
    action: Login.action,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: Signup.loader,
    action: Signup.action,
  },
  {
    path: "/projects",
    element: <Projects />,
    loader: Projects.loader,
  },
]);

export { router };
