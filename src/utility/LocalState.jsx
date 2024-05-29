import { createContext, useReducer, useEffect } from "react";

const initialUi = {
  darkMode: false,
  selectedGame: "",
  isOngoing: false,
  sessionObject: {},
};

const getLocalTheme = () => {
  const isDark = localStorage.getItem("dark");
  const initValue = JSON.parse(isDark);
  return { ...initialUi, darkMode: initValue || false };
};

export const UiContext = createContext(null);

export function LocalState({ children }) {
  const [uiState, dispatch] = useReducer(uiReducer, initialUi, getLocalTheme);

  function uiReducer(state, action) {
    switch (action.type) {
      case "toggle-dark":
        return { ...state, darkMode: !state.darkMode };
      case "selected-game":
        return { ...state, selectedGame: action.payload };
      case "start-ongoing":
        return { ...state, isOngoing: true };
      case "stop-ongoing":
        return { ...state, isOngoing: false };
      case "session-object":
        return { ...state, sessionObject: action.payload };

      default:
        return state;
    }
  }

  useEffect(() => {
    console.log(uiState);
    if (uiState.darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [uiState.darkMode, uiState]);

  return (
    <UiContext.Provider value={{ uiState, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}
