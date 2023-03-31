import React from "react";

export const useProjectsDialog = () => {
  const [dialog, setDialog] = React.useState<Dialog>("unset");

  const isDialogOpen = (currentDialog: Dialog) => dialog === currentDialog;

  const closeDialog = () => setDialog("unset");

  const openDialog = (dialog: Dialog) => setDialog(dialog);

  return { isDialogOpen, closeDialog, openDialog };
};

type Dialog = "add_project" | "add_people" | "unset";
