import { redirect } from "react-router-dom";

export const loader = () => {
  // Simulate protection of access to this page if the user is not authenticated
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
};
