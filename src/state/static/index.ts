import { Person, Project, Task } from "../types";

export const defaultProjects: Project[] = [
  { id: "1", name: "Project 1", createdAt: "2022-04-01" },
  { id: "2", name: "Project 2", createdAt: "2022-04-02" },
  { id: "3", name: "Project 3", createdAt: "2022-04-03" },
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    projectId: "1",
    assignedTo: "John Doe",
    isCompleted: false,
    description: "This task is important",
  },
  {
    id: "2",
    title: "Task 2",
    projectId: "1",
    assignedTo: "Jane Doe",
    isCompleted: true,
    description: "This task is important",
  },
  {
    id: "3",
    title: "Task 3",
    projectId: "2",
    assignedTo: "John Smith",
    isCompleted: false,
    description: "This task is important",
  },
  {
    id: "4",
    title: "Task 4",
    projectId: "2",
    assignedTo: "Jane Smith",
    isCompleted: true,
    description: "This task is important",
  },
  {
    id: "5",
    title: "Task 5",
    projectId: "3",
    assignedTo: "John Doe",
    isCompleted: false,
    description: "This task is important",
  },
  {
    id: "6",
    title: "Task 6",
    projectId: "3",
    assignedTo: "Jane Doe",
    isCompleted: true,
    description: "This task is important",
  },
];

export const defaultPeople: Person[] = [
  {
    id: "1",
    name: "John Doe",
    projectId: "1",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
  {
    id: "2",
    name: "Jane Doe",
    projectId: "2",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
  {
    id: "3",
    name: "John Smith",
    projectId: "3",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
  {
    id: "4",
    name: "Jane Smith",
    projectId: "1",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0079b31228692b6ede046499ca82491fe6897b61.jpg",
  },
];