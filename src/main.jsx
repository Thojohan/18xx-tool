import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.js";
import { Provider } from "react-redux";
import DarkModeWrapper from "./Features/uiState/DarkModeWrapper.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <DarkModeWrapper>
          <App />
        </DarkModeWrapper>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);
