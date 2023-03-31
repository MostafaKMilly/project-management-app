import MuiShadows, { Shadows } from "@mui/material/styles/shadows";

export const shadows = [
  "none",
  "0px 0px 1px 0px rgba(0, 0, 0, 0.06),0px 2px 6px 0px rgba(0, 0, 0, 0.04),0px 10px 20px 0px rgba(0, 0, 0, 0.04)",
  "0px 0px 1px 0px rgba(0, 0, 0, 0.06) , 0px 2px 6px 0px rgba(0, 0, 0, 0.04),0px 10px 20px 0px rgba(0, 0, 0, 0.04) , 0px 4px 9px 0px rgba(147, 147, 147, 0.2)",
  "0px 10px 24px 0px rgba(83, 83, 83, 0.16)",
  ...MuiShadows.slice(4),
] as Shadows;
