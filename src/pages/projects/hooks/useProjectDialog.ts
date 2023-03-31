import { useDialog } from "@/shared";

export const useProjectsDialog = () => {
  return useDialog<Dialog>();
};

type Dialog = "add_project" | "add_people" | "unset";
