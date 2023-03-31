import { Button, Grid, InputBase, Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { ProjectsList } from "./components";
import { Outlet } from "react-router-dom";

export const Projects = () => {
  return (
    <Grid container columnSpacing={2} rowGap={4} height="100%" mt={1}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "#f6f7f9", height: "100%" }}>
          <InputBase
            placeholder="Search Project ..."
            sx={{ p: 2, bgcolor: "common.white" }}
            fullWidth
            startAdornment={<SearchIcon fontSize="small" sx={{ mr: 2 }} />}
          />
          <Button fullWidth endIcon={<AddIcon />}>
            Add new project
          </Button>
          <ProjectsList />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} height="100%">
        <Paper sx={{ height: "100%", p: 5 }} elevation={0}>
          <Outlet />
        </Paper>
      </Grid>
    </Grid>
  );
};
