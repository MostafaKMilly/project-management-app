import { selectFilteredTasks } from "@/state/selectors/taskSelectors";
import { useSelector } from "react-redux";
import _ from "lodash";

export const useGoupedTasksByDate = () => {
  const tasks = useSelector(selectFilteredTasks);
  return (projectId: string) => {
    const filteredTasks = tasks.filter((task) => task.projectId === projectId);
    return _.groupBy(filteredTasks, (task) => task.creationDate);
  };
};
