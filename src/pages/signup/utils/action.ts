import { ActionFunctionArgs, redirect } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const user = {
    username: formData.get("username"),
  };
  // Store dummy form data to simulate a successful login request
  localStorage.setItem("token", JSON.stringify(user));
  return redirect("/");
};
