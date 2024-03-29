import {
  Button,
  Grid,
  InputBase,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  AddPeopleDialog,
  AddProjectDialog,
  ProjectItem,
  ProjectsList,
} from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectFilteredProjects } from "@/state/selectors/projectSelectors";
import { RootState } from "@/state/store";
import { useProjectsDialog } from "./hooks";
import ProjectPlaceholderImage from "@/assets/images/ProjectPlaceholder.svg";

export const Projects = () => {
  const [search, setSearch] = useState("");
  const projects = useSelector((state: RootState) =>
    selectFilteredProjects(state, search)
  );
  const [selectedProject, setSelectedProject] = useState<string>();
  const { closeDialog, isDialogOpen, openDialog } = useProjectsDialog();

  return (
    <Grid container columnSpacing={2} rowGap={4} height="100%" mt={1}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "#f6f7f9", height: "100%" }}>
          <InputBase
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Project ..."
            sx={{ p: 2, bgcolor: "common.white" }}
            fullWidth
            startAdornment={<SearchIcon fontSize="small" sx={{ mr: 2 }} />}
          />
          <Button
            fullWidth
            endIcon={<AddIcon />}
            onClick={() => {
              openDialog("add_project");
            }}
          >
            Add new project
          </Button>
          <ProjectsList>
            {projects.map((project) => (
              <Grid item xs={6} key={project.id}>
                <ProjectItem
                  project={project}
                  onAddPeopleClick={() => {
                    openDialog("add_people");
                    setSelectedProject(project.id);
                  }}
                />
              </Grid>
            ))}
            {projects.length === 0 && (
              <Stack spacing={3} p={4} m="0 auto">
                <img src={ProjectPlaceholderImage} width={200} />
                <Typography variant="body1" sx={{ color: "grey.900" }}>
                  There is no projects
                </Typography>
              </Stack>
            )}
          </ProjectsList>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} height="100%">
        <Paper sx={{ height: "auto", p: { xs: 2, sm: 5 } }} elevation={0}>
          <Outlet />
        </Paper>
      </Grid>
      <AddPeopleDialog
        open={isDialogOpen("add_people")}
        onClose={() => closeDialog()}
        projectId={selectedProject}
      />
      <AddProjectDialog
        open={isDialogOpen("add_project")}
        onClose={() => closeDialog()}
      />
    </Grid>
  );
};
