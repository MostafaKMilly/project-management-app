import { Project } from "@/state/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";

export const useAddProjectForm = ({
  onSubmit,
}: {
  onSubmit: (project: Project) => void;
}) => {
  const formik = useFormik<Pick<Project, "name">>({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      const newProject: Project = {
        name: values.name,
        createdAt: new Date().toLocaleString(),
        id: _.uniqueId(values.name),
      };
      onSubmit(newProject);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
  });

  return formik;
};
