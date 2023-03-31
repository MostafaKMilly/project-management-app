import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  const navigate = useNavigate();

  return () => {
    localStorage.clear();
    navigate("/login");
  };
};
