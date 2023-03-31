import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
  Typography,
} from "@mui/material";
import { Form, useNavigate, Link } from "react-router-dom";
import { useSignupForm } from "../hooks";
import _ from "lodash";

export const SignupForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useSignupForm();
  const navigate = useNavigate();

  return (
    <Box p={4} width="100%">
      <Form method="post" action="/signup">
        <Stack spacing={3}>
          <FormControl error={touched.fullName && Boolean(errors.fullName)}>
            <FormLabel sx={{ mb: 1 }}>Full Name</FormLabel>
            <TextField id="username" required {...getFieldProps("fullName")} />
            <FormHelperText>
              {touched.fullName && errors.fullName}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.username && Boolean(errors.username)}>
            <FormLabel sx={{ mb: 1 }}>Username</FormLabel>
            <TextField
              id="username"
              required
              error={touched.username && Boolean(errors.username)}
              {...getFieldProps("username")}
            />
            <FormHelperText>
              {touched.username && errors.username}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.password && Boolean(errors.password)}>
            <FormLabel sx={{ mb: 1 }}>Password</FormLabel>
            <TextField
              id="password"
              required
              type="password"
              autoComplete="on"
              {...getFieldProps("password")}
            />
            <FormHelperText>
              {touched.password && errors.password}
            </FormHelperText>
          </FormControl>
          <Box pt={2} display="flex" flexDirection={"column"} rowGap={2}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="secondary"
              disabled={!dirty || !isValid}
            >
              Register
            </Button>
            <Box display="flex" columnGap={1}>
              <Typography variant="body1" sx={{ color: "common.black" }}>
                Already have an account ?
              </Typography>
              <Link to="/login">Sign In</Link>
            </Box>
          </Box>
        </Stack>
      </Form>
    </Box>
  );
};
