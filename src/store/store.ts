import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./slices/modalSlice";
import taskReducer from "./slices/taskSlice";
import githubReducer from "./slices/githubSlice";
import { githubAPi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  task: taskReducer,
  github: githubReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    persistedReducer,
    [githubAPi.reducerPath]: githubAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(githubAPi.middleware),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);
export { persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
