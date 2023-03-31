import { Box, Typography } from "@mui/material";
import LogoSvgIcon from "@/assets/images/shapebg.svg";
import { FormContainer, SignupForm } from "./components";
import { action, loader } from "./utils";

export const Signup = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      overflow="hidden"
      position="relative"
      px={1}
    >
      <img src={LogoSvgIcon} width={900} style={{ position: "absolute" }} />
      <FormContainer elevation={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src="/logo.svg" width={230} />
          <Typography
            variant="h1"
            fontWeight={700}
            sx={{ color: "common.black" }}
          >
            Sign Up
          </Typography>
        </Box>
        <SignupForm />
      </FormContainer>
    </Box>
  );
};

Signup.loader = loader;
Signup.action = action;
