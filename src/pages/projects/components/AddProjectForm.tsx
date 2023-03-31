import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Form } from "formik";
import { useAddProjectForm } from "../hooks/useAddProjectForm";
import { Project } from "@/state/types";

export const AddProjectForm = ({
  onSubmit,
}: {
  onSubmit: (project: Project) => void;
}) => {
  const { getFieldProps, handleSubmit, touched, errors, isValid, dirty } =
    useAddProjectForm({
      onSubmit,
    });

  return (
    <Box p={4} width="100%">
      <form
        onSubmit={() => {
          if (isValid) {
            handleSubmit();
          }
        }}
        id="add_project_form"
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
