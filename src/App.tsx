import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer limit={3} />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
