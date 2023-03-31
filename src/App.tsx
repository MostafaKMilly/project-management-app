import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer limit={3} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
