import { Box, Typography } from "@mui/material";
import { loader, action } from "./utils";
import LogoSvgIcon from "@/assets/images/shapebg.svg";
import { FormContainer, LoginForm } from "./components";

export const Login = () => {
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
            Sign In
          </Typography>
        </Box>
        <LoginForm />
      </FormContainer>
    </Box>
  );
};

Login.loader = loader;
Login.action = action;
