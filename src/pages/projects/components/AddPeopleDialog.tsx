import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { AddPeopleForm } from "./AddPeopleForm";
import { useDispatch } from "react-redux";
import { Person } from "@/state/types";
import { addPerson } from "@/state/slices";
export const AddPeopleDialog = (props: AddPeopleDialogProps) => {
  const dispatch = useDispatch();

  const handleAddPeople = (person: Person) => {
    dispatch(addPerson(person));
    props.onClose();
  };
  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add People",
        submitButton: {
          type: "submit",
          label: "Add",
          form: "add_people_form",
        },
      }}
    >
      <AddPeopleForm
        handleFormSubmit={handleAddPeople}
        projectId={props.projectId}
      />
    </GenericDialog>
  );
};

type AddPeopleDialogProps = Pick<GenericDialogProps, "open" | "onClose"> & {
  projectId?: string;
};
