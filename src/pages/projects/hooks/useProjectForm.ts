import { Project } from "@/state/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";

export const useProjectForm = ({
  onSubmit,
  defaultValue,
}: {
  onSubmit: (project: Project) => void;
  defaultValue?: Project;
}) => {
  const formik = useFormik<Pick<Project, "name">>({
    initialValues: defaultValue || {
      name: "",
    },
    onSubmit: (values) => {
      const project: Project = {
        name: values.name,
        createdAt: new Date().toLocaleDateString(),
        id: !defaultValue ? _.uniqueId(values.name) : defaultValue.id,
      };
      onSubmit(project);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
  });

  return formik;
};
