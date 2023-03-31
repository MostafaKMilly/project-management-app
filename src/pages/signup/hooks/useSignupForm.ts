import { useFormik } from "formik";
import * as Yup from "yup";

export const useSignupForm = () => {
  const formik = useFormik<{
    username: string;
    password: string;
    fullName: string;
  }>({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
    },
    onSubmit: (result) => {
      console.log(result);
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Full name must be at least 5 characters long")
        .required("Full name is required"),
      username: Yup.string()
        .min(5, "Username must be at least 5 characters long")
        .required("Username is required"),
      password: Yup.string()
        .min(7, "Password must be at least 7 characters long")
        .required("Password is required"),
    }),
  });
  return formik;
};
