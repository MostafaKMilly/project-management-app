import { AppBar as MuiAppBar, Toolbar, AppBarProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { TasksSearchField } from "./TasksSearchField";

export const AppBar = (props: AppBarProps) => {
  const navigate = useNavigate();

  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "common.white" }}
      {...props}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src="/logo.svg"
          width="42px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <TasksSearchField />
        <UserMenu />
      </Toolbar>
    </MuiAppBar>
  );
};
