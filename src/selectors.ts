import { RootState } from "./store/store";

export const getTaskById = (taskId: string) => (state: RootState) => {
  const tasks = state.persistedReducer.task.tasks;
  return tasks.find(({ id }) => id === taskId);
};

export const getRepoById = (currentId: number) => (state: RootState) => {
  const repos = state.persistedReducer.github.repos;
  return repos.find((repo) => repo.id === currentId);
};
