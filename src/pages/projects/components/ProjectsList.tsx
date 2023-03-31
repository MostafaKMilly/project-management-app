import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export const ProjectsList = ({ children }: PropsWithChildren) => {
  return (
    <Grid container rowSpacing={0.5} columnSpacing={0.5}>
      {children}
    </Grid>
  );
};
