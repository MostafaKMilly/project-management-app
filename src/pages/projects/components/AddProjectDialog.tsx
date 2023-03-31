import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { useDispatch } from "react-redux";
import { Project } from "@/state/types";
import { createProject } from "@/state/slices";
import { AddProjectForm } from "./AddProjectForm";

export const AddProjectDialog = (props: AddProjectDialogProps) => {
  const dispatch = useDispatch();

  const handleAddProject = (project: Project) => {
    dispatch(createProject(project));
    props.onClose();
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add Project",
        submitButton: {
          type: "submit",
          label: "Add",
          form: "add_project_form",
        },
      }}
    >
      <AddProjectForm onSubmit={handleAddProject} />
    </GenericDialog>
  );
};

type AddProjectDialogProps = Pick<GenericDialogProps, "open" | "onClose">;
