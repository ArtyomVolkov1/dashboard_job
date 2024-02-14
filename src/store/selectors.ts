import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getTasks = (state: RootState) => state.persistedReducer.task.tasks;

export const getModalState = (state: RootState) => state.modal.isOpened;

export const getRepos = (state: RootState) =>
  state.persistedReducer.github.repos;

export const getTaskById = (taskId: string) => (state: RootState) => {
  const tasks = state.persistedReducer.task.tasks;
  return tasks.find(({ id }) => id === taskId);
};

export const getRepoById = (currentId: number) => (state: RootState) => {
  const repos = state.persistedReducer.github.repos;
  return repos.find((repo) => repo.id === currentId);
};

export const getCompletedTasks = createSelector(getTasks, (tasks) => tasks.filter((task) => task.completed === true));
