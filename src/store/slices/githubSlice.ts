import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IGithubState {
  key: string;
  value?: string;
  id?: number | null;
}

export interface ReposListInterface {
  repos: IGithubState[];
  error: string | null;
}

const initialState: ReposListInterface = {
  repos: [{ key: "Выбор репозитория", value: "" }],
  error: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addRepos: (state, action: PayloadAction<IGithubState>) => {
      const { key, value, id } = action.payload;
      const checked = state.repos.some((el) => el.id === id);
      if (!checked) {
        state.error = null;
        state.repos.push({ key, value, id });
      }
    },
    deleteRepos: (state, action: PayloadAction<IGithubState>) => {
      const { id } = action.payload;
      state.repos = state.repos.filter((repo) => repo.id !== id);
    },
  },
});

export const { addRepos, deleteRepos } = githubSlice.actions;
export default githubSlice.reducer;
