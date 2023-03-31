import { useEffect } from "react";
import { AppBar } from "./components";
import { loader } from "./utils/loader";
import { Box, Container, Toolbar } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const MainLayout = () => {
  const { pathname } = useLocation();
  const [, child] = pathname.split("/");
  const navigate = useNavigate();

  useEffect(() => {
    if (!child) {
      navigate("projects");
    }
  }, [child, navigate]);

  return (
    <Box display="flex">
      <AppBar />
      <Container
        maxWidth={false}
        sx={{
          flexGrow: 1,
        }}
      >
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
};

MainLayout.loader = loader;
