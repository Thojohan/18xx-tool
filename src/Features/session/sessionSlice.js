import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGame: "",
  isOngoing: false,
  sessionObject: {},
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSelectedGame: (state, action) => {
      state.selectedGame = action.payload;
    },
    startOngoing: (state) => {
      state.isOngoing = true;
    },
    stopOngoing: (state) => {
      state.isOngoing = false;
    },
    sessionObject: (state, action) => {
      state.sessionObject = action.payload;
    },
  },
});
export const { setSelectedGame, startOngoing, stopOngoing, sessionObject } =
  sessionSlice.actions;

export default sessionSlice.reducer;
