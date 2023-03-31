import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectState } from "../types";
import { defaultProjects } from "../static";

const initialState: ProjectState = {
  projects: defaultProjects,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    createProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
    },
  },
});

export const { createProject, updateProject, deleteProject } =
  projectSlice.actions;

export default projectSlice.reducer;
