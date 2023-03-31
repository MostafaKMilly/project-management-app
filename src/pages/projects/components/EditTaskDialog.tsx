import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { useDispatch } from "react-redux";
import { Task } from "@/state/types";
import { updateTask } from "@/state/slices";
import { TaskForm } from "./TaskForm";

export const EditTaskDialog = ({
  defaultValue,
  projectId,
  ...props
}: EditTaskDialogDialogProps) => {
  const dispatch = useDispatch();

  const handleEditTaskDialog = (task: Task) => {
    dispatch(updateTask(task));
    props.onClose();
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Edit Task",
        submitButton: {
          type: "submit",
          label: "Edit",
          form: "task_form",
        },
      }}
    >
      <TaskForm
        onSubmit={handleEditTaskDialog}
        projectId={projectId}
        defaultValue={defaultValue}
      />
    </GenericDialog>
  );
};

type EditTaskDialogDialogProps = Pick<
  GenericDialogProps,
  "open" | "onClose"
> & {
  projectId: string;
  defaultValue: Task;
};
