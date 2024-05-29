import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./Features/uiState/uiSlice";
import sessionReducer from "./Features/session/sessionSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    session: sessionReducer,
  },
});
