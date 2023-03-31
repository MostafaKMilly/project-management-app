import { Person, Project, Task } from "../types";

export const defaultProjects: Project[] = [
  { id: "project_1", name: "Project 1", createdAt: "2022-04-01" },
  { id: "project_2", name: "Project 2", createdAt: "2022-04-02" },
  { id: "project_3", name: "Project 3", createdAt: "2022-04-03" },
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    projectId: "project_1",
    assignedTo: "1",
    isCompleted: false,
    description: "This task is important",
    creationDate : "3/31/2023"
  },
  {
    id: "2",
    title: "Task 2",
    projectId: "project_1",
    assignedTo: "2",
    isCompleted: true,
    description: "This task is important",
    creationDate : "2023-6-4"
  },
  {
    id: "3",
    title: "Task 3",
    projectId: "project_2",
    assignedTo: "3",
    isCompleted: false,
    description: "This task is important",
    creationDate : "3/31/2023"
  },
  {
    id: "4",
    title: "Task 4",
    projectId: "project_2",
    assignedTo: "4",
    isCompleted: true,
    description: "This task is important",
    creationDate : "5/31/2023"
  },
  {
    id: "5",
    title: "Task 5",
    projectId: "project_3",
    assignedTo: "1",
    isCompleted: false,
    description: "This task is important",
    creationDate : "7/31/2023"
  },
  {
    id: "6",
    title: "Task 6",
    projectId: "project_3",
    assignedTo: "2",
    isCompleted: true,
    description: "This task is important",
    creationDate : "3/31/2023"
  },
];

export const defaultPeople: Person[] = [
  {
    id: "1",
    name: "John Doe",
    projectId: "project_1",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
  {
    id: "2",
    name: "Jane Doe",
    projectId: "project_2",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
  {
    id: "3",
    name: "John Smith",
    projectId: "project_3",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
  {
    id: "4",
    name: "Jane Smith",
    projectId: "project_1",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
];
