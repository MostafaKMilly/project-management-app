import { Components, Theme } from "@mui/material";

export const DialogStylesOverrides: Components<Theme>["MuiDialog"] = {
  defaultProps: {
    maxWidth: "sm",
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        background: "rgba(201, 201, 201, 0.06)",
        backdropFilter: "blur(2px)",
      },
    },
    paper: ({ theme }) => ({
      minWidth: "auto !important",
      paddingBottom: 16,
      borderRadius: 8,
      boxShadow: theme.shadows[2],
      "& .MuiDialogTitle-root": {
        paddingTop: 16,
        paddingRight: 32,
        paddingLeft: 32,
        height: 60,
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        ...theme.typography.h2,
        "& .MuiButtonBase-root": {
          color: "#fff",
        },
      },
      "& .MuiDialogContent-root": {
        marginTop: 32,
        paddingRight: 32,
        paddingLeft: 32,
      },
      "& .MuiDialogActions-root": {
        paddingRight: 32,
        paddingLeft: 32,
        paddingBottom: 0,
      },
    }),
    paperWidthMd: {
      maxWidth: 847,
      height: 617,
    },
  },
};
