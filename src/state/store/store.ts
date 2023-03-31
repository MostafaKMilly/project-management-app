import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slices/projectSlice";
import taskReducer from "../slices/taskSlice";
import peopleReducer from "../slices/peopleSlice";
import { localStorageMiddleware } from "./middleware";
import { loadDataFromLocalStorage } from "../utils/loadDataFromLocalStorage";

const preloadedState = loadDataFromLocalStorage();

export const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
    people: peopleReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

if (!preloadedState) {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
