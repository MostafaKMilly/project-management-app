import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Task } from "../types";

export const selectTasks = (state: RootState): Task[] => state.task.tasks;

export const selectTasksByProjectId = createSelector(
  selectTasks,
  (_: RootState, projectId: string) => projectId,
  (tasks, projectId) => tasks.filter((task) => task.projectId === projectId)
);

export const selectTaskById = createSelector(
  selectTasks,
  (_: RootState, taskId: string) => taskId,
  (tasks, taskId) => tasks.find((task) => task.id === taskId)
);
