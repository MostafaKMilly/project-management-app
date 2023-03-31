import { createBrowserRouter } from "react-router-dom";
import { Login, Projects, Signup, ProjectsTasks } from "@/pages";
import { MainLayout } from "@/layouts";
import { TasksList } from "@/pages/projects/views/tasksList";

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
    path: "/",
    element: <MainLayout />,
    loader: MainLayout.loader,
    children: [
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            index: true,
            element: <TasksList />,
          },
          {
            path: ":taskId",
            element: <ProjectsTasks />,
          },
        ],
      },
    ],
  },
]);

export { router };
