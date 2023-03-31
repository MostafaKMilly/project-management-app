import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slices/projectSlice";
import taskReducer from "../slices/taskSlice";
import peopleReducer from "../slices/peopleSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
    people: peopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
