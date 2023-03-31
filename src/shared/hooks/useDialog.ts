import React from "react";

export const useDialog = <T>() => {
  const [dialog, setDialog] = React.useState<T>();

  const isDialogOpen = (currentDialog: T) => dialog === currentDialog;

  const closeDialog = () => setDialog(undefined);

  const openDialog = (dialog: T) => setDialog(dialog);

  return { isDialogOpen, closeDialog, openDialog };
};
