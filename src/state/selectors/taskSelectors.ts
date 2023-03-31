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

export const selectFilteredTasks = (state: RootState) => {
  const { tasks, filterText } = state.task;
  const normalizedFilterText = filterText.trim().toLowerCase();
  return tasks.filter((task) =>
    task.title.toLowerCase().includes(normalizedFilterText)
  );
};
