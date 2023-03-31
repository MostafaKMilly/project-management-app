import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SignoutIcon from "@mui/icons-material/ExitToApp";
import { useSignout } from "../hooks/useSignout";
import { DropDownMenu } from "@/shared";

export const UserMenu = () => {
  const signout = useSignout();

  return (
    <Box display="flex" sx={{ placeContent: "end" }}>
      <DropDownMenu
        button={(props) => (
          <IconButton {...props}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/1753933?v=4"
              sx={{
                borderColor: ({ palette }) => palette.primary.light,
                width: 32,
                height: 32,
              }}
            />
          </IconButton>
        )}
      >
        <MenuItem onClick={signout}>
          <ListItemText sx={{ color: "secondary.main" }}>Signout</ListItemText>
          <ListItemIcon>
            <SignoutIcon sx={{ color: "secondary.main" }} />
          </ListItemIcon>
        </MenuItem>
      </DropDownMenu>
    </Box>
  );
};
