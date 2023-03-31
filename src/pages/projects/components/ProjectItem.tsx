import {
  Avatar,
  AvatarGroup,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Project } from "@/state/types";
import { selectProjectPeople } from "@/state/selectors/peopleSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useNavigate, useParams } from "react-router-dom";
import { selectTasks } from "@/state/selectors/taskSelectors";

export const ProjectItem = ({
  project,
  onAddPeopleClick,
}: ProjectItemProps) => {
  const people = useSelector((state: RootState) =>
    selectProjectPeople(state, project.id)
  );
  const tasks = useSelector(selectTasks);
  const projectTasks = tasks.filter((task) => task.projectId === project.id);
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleNavigate = () => {
    if (projectId === project.id) {
      navigate("/");
    } else {
      navigate(project.id);
    }
  };
  return (
    <Card elevation={0}>
      <CardActionArea
        sx={{ background: projectId === project.id ? "#f5f7ff" : "inherit" }}
        disableRipple
        onClick={handleNavigate}
      >
        <CardContent sx={{ p: 3 }}>
          <AvatarGroup
            max={4}
            sx={{ justifyContent: "left", mb: 1.5 }}
            componentsProps={{
              additionalAvatar: {
                sx: { width: 25, height: 25, fontSize: 10 },
              },
            }}
          >
            {people.map((person) => (
              <Avatar
                key={person.id}
                alt={person.name}
                src={person.image}
                sx={{ width: 25, height: 25 }}
              />
            ))}
            {people.length === 0 && (
              <Typography
                fontSize={9}
                sx={{ color: "grey.700", mb: "13px", mt: "6px" }}
              >
                There is no people
              </Typography>
            )}
          </AvatarGroup>
          <Typography variant="body2" fontWeight={700} gutterBottom>
            {project.name}
          </Typography>

          <Typography sx={{ color: "grey.400", fontSize: 10 }}>
            {projectTasks.length} tasks added{" "}
            <span style={{ color: "red" }}>*</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        <ButtonBase
          onClick={onAddPeopleClick}
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

type ProjectItemProps = {
  project: Project;
  onAddPeopleClick: () => void;
};
