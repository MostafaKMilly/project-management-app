import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Project } from "../types";

export const selectProjects = (state: RootState): Project[] =>
  state.project.projects;

export const selectProjectById = createSelector(
  selectProjects,
  (_: RootState, projectId: string) => projectId,
  (projects, projectId) => projects.find((project) => project.id === projectId)
);

export const selectFilteredProjects = (
  state: RootState,
  search: string
): Project[] => {
  if (!search) {
    return state.project.projects;
  }
  const searchWord = search.toLowerCase().trim();
  return state.project.projects.filter((project) =>
    project.name.toLowerCase().includes(searchWord)
  );
};
