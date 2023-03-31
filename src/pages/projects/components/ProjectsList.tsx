import { Box, Grid } from "@mui/material";
import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <Grid container rowSpacing={0.5} columnSpacing={0.5}>
      {new Array(5).fill("").map((item, index) => (
        <Grid item xs={6} key={index}>
          <ProjectItem key={index} />
        </Grid>
      ))}
    </Grid>
  );
};
