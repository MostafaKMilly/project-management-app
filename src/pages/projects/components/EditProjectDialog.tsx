import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { useDispatch } from "react-redux";
import { Project } from "@/state/types";
import { updateProject } from "@/state/slices";
import { ProjectForm } from "./ProjectForm";

export const EditProjectDialog = (props: EditProjectDialogProps) => {
  const dispatch = useDispatch();

  const handleEditProject = (project: Project) => {
    dispatch(updateProject(project));
    props.onClose();
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Edit Project",
        submitButton: {
          type: "submit",
          label: "Edit",
          form: "project_form",
        },
      }}
    >
      <ProjectForm onSubmit={handleEditProject} defaultValue={props.project} />
    </GenericDialog>
  );
};

type EditProjectDialogProps = Pick<GenericDialogProps, "open" | "onClose"> & {
  project?: Project;
};
