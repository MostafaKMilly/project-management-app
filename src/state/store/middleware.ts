import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem("state", JSON.stringify(store.getState()));
    return result;
  };
