import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterText } from "@/state/slices";
import { RootState } from "@/state/store";

export const TasksSearchField = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state: RootState) => state.task.filterText);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const filterText = event.target.value;
    dispatch(updateFilterText(filterText));
  };

  return (
    <TextField
      onChange={handleInputChange}
      value={filterValue}
      placeholder="Search any tasks"
      InputProps={{
        startAdornment: <SearchIcon sx={{ color: "common.black", mr: 1 }} />,
      }}
      sx={{
        height: "40px",
        "& .MuiInputBase-root": {
          width: "280px",
          height: "40px",
        },
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    />
  );
};
