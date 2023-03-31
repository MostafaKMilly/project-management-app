import { Components, Theme } from "@mui/material";

export const MuiFormHelperTextOverrides: Components<
  Omit<Theme, "components">
>["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.primary.light,
      ...theme.typography.body2,
    }),
  },
};
