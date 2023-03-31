import React from "react";
import { selectProjects } from "@/state/selectors/projectSelectors";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskItem } from "../../components/TaskItem";
import { GenericDialog, useDialog } from "@/shared";
import { EditProjectDialog } from "../../components/EditProjectDialog";
import { Project } from "@/state/types";
import { deleteProject } from "@/state/slices";
import { useGoupedTasksByDate } from "../../hooks";
import _ from "lodash";
import { AddTaskDialog } from "../../components";

export const TasksList = () => {
  const groupedTasks = useGoupedTasksByDate();
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = React.useState<Project>();
  const { closeDialog, isDialogOpen, openDialog } = useDialog<
    "add_task" | "edit_project" | "delete_project"
  >();

  const handleDeleteProject = () => {
    dispatch(deleteProject(selectedProject?.id));
    closeDialog();
  };

  return (
    <Box>
      <Typography variant="h1" sx={{ color: "common.black", mb: 4 }}>
        Tasks List
      </Typography>
      {projects.map((project) => (
        <Stack spacing={2}>
          <Box
            key={project.id}
            my={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" columnGap={1} alignItems="center">
              <Typography variant="h2" sx={{ color: "common.black" }}>
                {project.name}
              </Typography>
              <Box display="flex" alignItems="center">
                <IconButton
                  disableRipple
                  onClick={() => {
                    setSelectedProject(project);
                    openDialog("edit_project");
                  }}
                >
                  <EditIcon fontSize="small" sx={{ color: "grey.400" }} />
                </IconButton>
                <IconButton
                  disableRipple
                  onClick={() => {
                    setSelectedProject(project);
                    openDialog("delete_project");
                  }}
                >
                  <DeleteIcon fontSize="small" sx={{ color: "error.main" }} />
                </IconButton>
              </Box>
            </Box>

            <Button
              color="secondary"
              endIcon={<AddIcon />}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
              onClick={() => {
                openDialog("add_task");
                setSelectedProject(project);
              }}
            >
              Add new task
            </Button>
            <IconButton
              color="secondary"
              disableRipple
              sx={{
                display: {
                  xs: "inline-flex",
                  sm: "none",
                },
                bgcolor: "secondary.main",
              }}
            >
              <AddIcon sx={{ color: "common.white" }} />
            </IconButton>
          </Box>
          <Stack spacing={2} mt={2}>
            {Object.entries(groupedTasks(project.id)).map(([date, tasks]) => (
              <>
                <Typography variant="body1" sx={{ color: "common.black" }}>
                  {date}
                </Typography>
                {tasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
                <Divider />
              </>
            ))}
            {Object.entries(groupedTasks(project.id)).length === 0 && (
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ color: "grey.800", m: "0 auto" }}
              >
                There is no tasks in this project
              </Typography>
            )}
          </Stack>
        </Stack>
      ))}
      <EditProjectDialog
        open={isDialogOpen("edit_project")}
        onClose={closeDialog}
        project={selectedProject}
      />
      <GenericDialog
        open={isDialogOpen("delete_project")}
        onClose={closeDialog}
        onSubmit={handleDeleteProject}
        dialog={{
          title: "Delete Project Confimation",
          submitButton: {
            label: "Delete",
            color: "error",
          },
        }}
      >
        <Typography variant="body1" sx={{ color: "grey.900" }}>
          Are you sure you want to delete {selectedProject?.name} project ?
        </Typography>
      </GenericDialog>
      <AddTaskDialog
        open={isDialogOpen("add_task")}
        onClose={closeDialog}
        projectId={selectedProject?.id as string}
      />
    </Box>
  );
};
