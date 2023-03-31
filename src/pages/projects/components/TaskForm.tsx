import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useTaskForm } from "../hooks/useTaskForm";
import { Task } from "@/state/types";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { selectProjectPeople } from "@/state/selectors/peopleSelector";

export const TaskForm = ({
  onSubmit,
  defaultValue,
  projectId,
}: {
  onSubmit: (task: Task) => void;
  defaultValue?: Task;
  projectId: string;
}) => {
  const people = useSelector((state: RootState) =>
    selectProjectPeople(state, projectId)
  );
  const { getFieldProps, handleSubmit, touched, errors, isValid, dirty } =
    useTaskForm({
      onSubmit,
      defaultValue,
      projectId,
    });

  return (
    <Box p={4} width="100%">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) {
            handleSubmit();
          }
        }}
        id="task_form"
      >
        <Stack spacing={3}>
          <FormControl error={touched.title && Boolean(errors.title)}>
            <FormLabel sx={{ mb: 1 }}>Title</FormLabel>
            <TextField id="title" required {...getFieldProps("title")} />
            <FormHelperText>{touched.title && errors.title}</FormHelperText>
          </FormControl>

          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  {...getFieldProps("isCompleted")}
                  checked={getFieldProps("isCompleted").value}
                  color="primary"
                />
              }
              label="Completed"
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>Assigned To</FormLabel>
            <Select {...getFieldProps("assignedTo")} required>
              {people.map((person) => (
                <MenuItem key={person.id} value={person.id}>
                  {person.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {touched.assignedTo && errors.assignedTo}
            </FormHelperText>
          </FormControl>

          <FormControl
            error={touched.description && Boolean(errors.description)}
          >
            <FormLabel sx={{ mb: 1 }}>Description</FormLabel>
            <TextField id="description" {...getFieldProps("description")} />
            <FormHelperText>
              {touched.description && errors.description}
            </FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
