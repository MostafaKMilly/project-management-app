import {
  Avatar,
  AvatarGroup,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export const ProjectItem = () => {
  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 3 }}>
        <AvatarGroup sx={{ justifyContent: "left", mb: 1.5 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 20, height: 20 }}
          />
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 20, height: 20 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ width: 20, height: 20 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="/static/images/avatar/4.jpg"
            sx={{ width: 20, height: 20 }}
          />
        </AvatarGroup>
        <Typography variant="body2" fontWeight={700} gutterBottom>
          Olsen Project
        </Typography>

        <Typography sx={{ color: "grey.400", fontSize: 10 }}>
          3 new comments <span style={{ color: "red" }}>*</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <ButtonBase
          sx={{
            bgcolor: "#e7f0ff",
            color: "secondary.main",
            display: "flex",
            columnGap: 1,
            width: "100%",
            p: 1,
          }}
        >
          Add new people <GroupAddIcon color="secondary" fontSize="small" />
        </ButtonBase>
      </CardActions>
    </Card>
  );
};
