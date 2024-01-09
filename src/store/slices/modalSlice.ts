import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IModal {
  isOpened: boolean;
  type: string;
  taskId: string;
}

const initialState: IModal = {
  isOpened: false,
  type: "default",
  taskId: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpened = true;
      state.type = payload.type;
      state.taskId = payload.taskId;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.type = "";
      state.taskId = "";
    },
  },
});

export const getModalType = (state: RootState) => state.modal.type;
export const getTaskId = (state: RootState) => state.modal.taskId;
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
