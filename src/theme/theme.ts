import { createTheme } from "@mui/material";
import { palette } from "./palette";
import typography from "./typography";
import { componentOverrides } from "./overrides";
import { shadows } from "./shadows";

export const theme = createTheme({
  palette,
  typography,
  shadows,
  components: componentOverrides,
});
