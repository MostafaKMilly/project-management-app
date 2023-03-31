import { Components, Theme } from "@mui/material";

export const ContainerStylesOverrides: Components<Theme>["MuiContainer"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.up("md")]: {
        paddingLeft: "32px !important",
        paddingRight: "32px !important",
      },

      [theme.breakpoints.down("md")]: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important",
      },
    }),
  },
  variants: [
    {
      props: {
        maxWidth: "xl",
      },
      style: {
        maxWidth: "1665px !important",
      },
    },
  ],
};
