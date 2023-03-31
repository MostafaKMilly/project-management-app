import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const TasksSearchField = () => {
  return (
    <TextField
      placeholder="Search any tasks"
      InputProps={{
        startAdornment: <SearchIcon sx={{ color: "common.black", mr: 1 }} />,
      }}
      sx={{
        "& .MuiInputBase-root": {
          width: "280px",
        },
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    />
  );
};
