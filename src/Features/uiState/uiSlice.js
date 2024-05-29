import { createSlice } from "@reduxjs/toolkit";

function getLocalTheme() {
  const isDark = localStorage.getItem("dark");
  const initValue = JSON.parse(isDark);
  return initValue || false;
}
const darkMode = getLocalTheme();
const initialState = {
  darkMode,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    darkToggle: (state) => {
      const newDarkState = !state.darkMode;
      state.darkMode = newDarkState;
      localStorage.setItem("dark", newDarkState.toString());
    },
  },
});

export const { darkToggle } = uiSlice.actions;
export default uiSlice.reducer;
