import { Person } from "@/state/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";

type AddPeopleFormValues = {
  name: string;
  projectId: string;
  image: string;
};

export const useAddPeopleForm = ({
  onSubmit,
  projectId = "",
}: {
  onSubmit?: (person: Person) => void;
  projectId?: string;
}) => {
  const formik = useFormik<AddPeopleFormValues>({
    initialValues: {
      name: "",
      projectId,
      image: "",
    },
    onSubmit: (values) => {
      const newPerson: Person = {
        id: _.uniqueId(values.name),
        name: values.name,
        projectId: values.projectId,
        image: values.image,
      };
      onSubmit?.(newPerson);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      projectId: Yup.string().required("Project ID is required"),
      image: Yup.string().url("Invalid image URL"),
    }),
  });

  return formik;
};
