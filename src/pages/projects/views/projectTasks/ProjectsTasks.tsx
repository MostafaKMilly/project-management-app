import { selectProjectById } from "@/state/selectors/projectSelectors";
import { selectTasksByProjectId } from "@/state/selectors/taskSelectors";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { GenericDialog, useDialog } from "@/shared";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useGoupedTasksByDate } from "../../hooks";
import { TaskItem } from "../../components/TaskItem";
import { AddTaskDialog } from "../../components";
import { EditProjectDialog } from "../../components/EditProjectDialog";
import { deleteProject } from "@/state/slices";

export const ProjectsTasks = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const project = useSelector((state: RootState) =>
    selectProjectById(state, projectId as string)
  );
  const tasks = useSelector((state: RootState) =>
    selectTasksByProjectId(state, projectId as string)
  );
  const { closeDialog, isDialogOpen, openDialog } = useDialog<
    "add_task" | "edit_project" | "delete_project"
  >();
  const groupedTasks = useGoupedTasksByDate();

  const handleDeleteProject = () => {
    dispatch(deleteProject(project?.id));
    navigate("/projects");
    closeDialog();
  };

  return (
    <Box>
      <Box
        key={project?.id}
        my={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" columnGap={1} alignItems="center">
          <Typography variant="h2" sx={{ color: "common.black" }}>
            {project?.name}
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              disableRipple
              onClick={() => {
                openDialog("edit_project");
              }}
            >
              <EditIcon fontSize="small" sx={{ color: "grey.400" }} />
            </IconButton>
            <IconButton
              disableRipple
              onClick={() => {
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
          }}
        >
          Add new task
        </Button>
        <IconButton
          onClick={() => {
            openDialog("add_task");
          }}
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
        {Object.entries(groupedTasks(project?.id as string)).map(
          ([date, tasks]) => (
            <>
              <Typography variant="body1" sx={{ color: "common.black" }}>
                {date}
              </Typography>
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
              <Divider />
            </>
          )
        )}
        {Object.entries(groupedTasks(project?.id as string)).length === 0 && (
          <Typography
            variant="body2"
            fontWeight={500}
            sx={{ color: "grey.800", m: "0 auto" }}
          >
            There is no tasks in this project
          </Typography>
        )}
      </Stack>
      <EditProjectDialog
        open={isDialogOpen("edit_project")}
        onClose={closeDialog}
        project={project}
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
          Are you sure you want to delete {project?.name} project ?
        </Typography>
      </GenericDialog>
      <AddTaskDialog
        open={isDialogOpen("add_task")}
        onClose={closeDialog}
        projectId={project?.id as string}
      />
    </Box>
  );
};
