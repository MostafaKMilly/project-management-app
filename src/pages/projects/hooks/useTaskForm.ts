import { Task } from "@/state/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";

export const useTaskForm = ({
  onSubmit,
  defaultValue,
  projectId,
}: {
  onSubmit: (task: Task) => void;
  defaultValue?: Task;
  projectId: string;
}) => {
  const formik = useFormik<Task>({
    initialValues: defaultValue || {
      id: _.uniqueId("task_id"),
      projectId: projectId,
      title: "",
      description: "",
      isCompleted: false,
      assignedTo: "",
      creationDate: new Date().toLocaleDateString(),
    },
    onSubmit: (result) => {
      onSubmit(result);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
    }),
  });
  return formik;
};
