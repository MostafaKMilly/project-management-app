import { Person } from "@/state/types";
import { useAddPeopleForm } from "../hooks/useAddPeopleForm";
import {
  Box,
  Stack,
  TextField,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

export const AddPeopleForm = ({
  handleFormSubmit,
  projectId,
}: AddPeopleFormProps) => {
  const { getFieldProps, touched, errors, isValid, handleSubmit, values } =
    useAddPeopleForm({
      onSubmit: handleFormSubmit,
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
        id="add_people_form"
      >
        <Stack spacing={3}>
          <FormControl error={touched.name && Boolean(errors.name)}>
            <FormLabel sx={{ mb: 1 }}>Name</FormLabel>
            <TextField id="name" required {...getFieldProps("name")} />
            <FormHelperText>{touched.name && errors.name}</FormHelperText>
          </FormControl>
          <FormControl error={touched.projectId && Boolean(errors.projectId)}>
            <FormLabel sx={{ mb: 1 }}>Project ID</FormLabel>
            <TextField
              disabled={Boolean(projectId)}
              id="projectId"
              required
              {...getFieldProps("projectId")}
            />
            <FormHelperText>
              {touched.projectId && errors.projectId}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.image && Boolean(errors.image)}>
            <FormLabel sx={{ mb: 1 }}>Image URL</FormLabel>
            <TextField id="image" {...getFieldProps("image")} />
            <FormHelperText>{touched.image && errors.image}</FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

type AddPeopleFormProps = {
  handleFormSubmit: (person: Person) => void;
  projectId?: string;
};
