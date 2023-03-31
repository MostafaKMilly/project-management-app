import { selectPersonById } from "@/state/selectors/peopleSelector";
import { RootState } from "@/state/store";
import { Task } from "@/state/types";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Checkbox,
  Typography,
  IconButton,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { DropDownMenu, GenericDialog, useDialog } from "@/shared";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTask, updateTask } from "@/state/slices";
import { EditTaskDialog } from "./EditTaskDialog";

export const TaskItem = ({ task }: TaskItemProps) => {
  const person = useSelector((state: RootState) => {
    return selectPersonById(state, task.assignedTo);
  });
  const dispatch = useDispatch();
  const { closeDialog, isDialogOpen, openDialog } = useDialog<
    "delete_task" | "edit_task"
  >();

  const toggleCompleteTask = (_: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTask({ ...task, isCompleted: !task.isCompleted }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    closeDialog();
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" flexWrap="wrap" alignItems="center">
        <Box display="flex" columnGap={1} mr={7} alignItems="center">
          <Checkbox
            checked={task.isCompleted}
            color="success"
            onChange={toggleCompleteTask}
          />
          <Typography
            variant="body1"
            fontWeight={400}
            sx={{ color: "common.black" }}
          >
            {task.title}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "grey.400" }}>
          {task.description}
        </Typography>
      </Box>
      <Box display="flex" columnGap={1} alignItems="center">
        <Avatar src={person?.image} sx={{ width: 32, height: 32 }} />
        <DropDownMenu
          button={(props) => (
            <IconButton {...props} disableRipple>
              <MoreVertIcon sx={{ color: "grey.800" }} />
            </IconButton>
          )}
        >
          <MenuItem
            onClick={() => {
              openDialog("edit_task");
            }}
          >
            <ListItemText sx={{ color: "secondary.main" }}>Edit</ListItemText>
            <ListItemIcon>
              <EditIcon sx={{ color: "secondary.main" }} />
            </ListItemIcon>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openDialog("delete_task");
            }}
          >
            <ListItemText sx={{ color: "error.main" }}>Delete</ListItemText>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "error.main" }} />
            </ListItemIcon>
          </MenuItem>
        </DropDownMenu>
      </Box>
      <EditTaskDialog
        open={isDialogOpen("edit_task")}
        onClose={closeDialog}
        defaultValue={task}
        projectId={task.projectId}
      />
      <GenericDialog
        open={isDialogOpen("delete_task")}
        onClose={closeDialog}
        onSubmit={handleDeleteTask}
        dialog={{
          title: "Delete Task Confimation",
          submitButton: {
            label: "Delete",
            color: "error",
          },
        }}
      >
        <Typography variant="body1" sx={{ color: "grey.900" }}>
          Are you sure you want to delete {task.title} task ?
        </Typography>
      </GenericDialog>
    </Box>
  );
};

type TaskItemProps = {
  task: Task;
};
