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
import { Form, useNavigate, Link } from "react-router-dom";
import { useLoginForm } from "../hooks";
import _ from "lodash";

export const LoginForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useLoginForm();
  const navigate = useNavigate();

  return (
    <Box p={4} width="100%">
      <Form method="post" action="/login">
        <Stack spacing={3}>
          <FormControl error={touched.username && Boolean(errors.username)}>
            <FormLabel sx={{ mb: 1 }}>Username</FormLabel>
            <TextField id="username" required {...getFieldProps("username")} />
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
              disabled={!dirty || !isValid}
            >
              Login
            </Button>
            <Box display="flex" columnGap={1}>
              <Typography variant="body1" sx={{ color: "common.black" }}>
                Dont have an account ?
              </Typography>
              <Link to="/signup">Sign up</Link>
            </Box>
          </Box>
        </Stack>
      </Form>
    </Box>
  );
};
