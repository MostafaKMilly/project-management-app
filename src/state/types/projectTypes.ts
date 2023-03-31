export type Project = {
  id: string;
  name: string;
  createdAt: string;
};

export type ProjectState = {
  projects: Project[];
};

export type ProjectPayload = Pick<Project, "name">;
