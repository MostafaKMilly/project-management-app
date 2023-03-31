import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../types";
import { defaultTasks } from "../static";

const initialState: TaskState = {
  tasks: defaultTasks,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { createTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
