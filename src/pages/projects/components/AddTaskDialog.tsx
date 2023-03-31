import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { useDispatch } from "react-redux";
import { Task } from "@/state/types";
import { createTask } from "@/state/slices";
import { TaskForm } from "./TaskForm";

export const AddTaskDialog = (props: AddTaskDialogDialogProps) => {
  const dispatch = useDispatch();

  const handleAddTaskDialog = (task: Task) => {
    dispatch(createTask(task));
    props.onClose();
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add Task",
        submitButton: {
          type: "submit",
          label: "Add",
          form: "task_form",
        },
      }}
    >
      <TaskForm onSubmit={handleAddTaskDialog} projectId={props.projectId} />
    </GenericDialog>
  );
};

type AddTaskDialogDialogProps = Pick<GenericDialogProps, "open" | "onClose"> & {
  projectId: string;
};
