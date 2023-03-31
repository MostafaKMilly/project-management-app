export type Task = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  assignedTo: string;
  creationDate: string;
};

export type TaskState = {
  tasks: Task[];
  filterText: string;
};

export type TaskPayload = Omit<Task, "id">;

export type TaskUpdatePayload = {
  id: string;
  updates: Partial<Omit<Task, "id" | "projectId">>;
};
