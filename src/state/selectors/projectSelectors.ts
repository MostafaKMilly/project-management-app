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
