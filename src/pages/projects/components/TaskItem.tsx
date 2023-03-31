import { selectPersonById } from "@/state/selectors/peopleSelector";
import { RootState } from "@/state/store";
import { Task } from "@/state/types";
import { useSelector } from "react-redux";
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
import { DropDownMenu } from "@/shared";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const TaskItem = ({ task }: TaskItemProps) => {
  const person = useSelector((state: RootState) => {
    return selectPersonById(state, task.assignedTo);
  });
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" flexWrap="wrap" alignItems="center">
        <Box display="flex" columnGap={1} mr={7} alignItems="center">
          <Checkbox />
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
          <MenuItem>
            <ListItemText sx={{ color: "secondary.main" }}>Edit</ListItemText>
            <ListItemIcon>
              <EditIcon sx={{ color: "secondary.main" }} />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemText sx={{ color: "error.main" }}>Delete</ListItemText>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "error.main" }} />
            </ListItemIcon>
          </MenuItem>
        </DropDownMenu>
      </Box>
    </Box>
  );
};

type TaskItemProps = {
  task: Task;
};
