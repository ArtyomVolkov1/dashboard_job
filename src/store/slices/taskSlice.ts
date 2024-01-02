import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  task: {
    title?: string;
    description?: string;
    selectOptions?: string;
  };
  completed: boolean;
}

export interface TasksListInterface {
  tasks: ITask[];
}

const initialState: TasksListInterface = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const { id, task, completed } = action.payload;
      state.tasks.unshift({ id, task, completed });
    },
    deleteTask: (
      state,
      { payload: { taskId } }: { payload: { taskId: string | null } }
    ) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
    },
    editTask: (
      state,
      {
        payload: { taskId, title, description, selectOptions },
      }: { payload: { taskId: string; title?: string; description?: string, selectOptions?:string, } }
    ) => {
      const currentTask = state.tasks.find(({ id }) => id === taskId);
      if (currentTask) {
        currentTask.task.title = title;
        currentTask.task.description = description;
        currentTask.task.selectOptions = selectOptions;
      }
    },
    toogleTask: (
      state,
      { payload: { taskId } }: { payload: { taskId: string } }
    ) => {
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    },
  },
});

export const { addTask, deleteTask, editTask, toogleTask } = taskSlice.actions;
export default taskSlice.reducer;
