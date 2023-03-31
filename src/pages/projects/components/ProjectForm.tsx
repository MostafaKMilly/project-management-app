import {
  Box,
  Stack,
  TextField,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useProjectForm } from "../hooks/useProjectForm";
import { Project } from "@/state/types";

export const ProjectForm = ({
  onSubmit,
  defaultValue,
}: {
  onSubmit: (project: Project) => void;
  defaultValue?: Project;
}) => {
  const { getFieldProps, handleSubmit, touched, errors, isValid, dirty } =
    useProjectForm({
      onSubmit,
      defaultValue,
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
        id="project_form"
      >
        <Stack spacing={3}>
          <FormControl error={touched.name && Boolean(errors.name)}>
            <FormLabel sx={{ mb: 1 }}>Name</FormLabel>
            <TextField id="name" required {...getFieldProps("name")} />
            <FormHelperText>{touched.name && errors.name}</FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
