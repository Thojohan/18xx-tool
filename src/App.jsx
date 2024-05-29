import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import FrontPage from "./pages/FrontPage";
import { LocalState } from "./utility/LocalState";
import AddGame from "./pages/AddGame";
import { Toaster } from "react-hot-toast";
import StockMarket from "./pages/StockMarket";
import Companies from "./pages/Companies";
import GameInfo from "./pages/GameInfo";
import RevenueTracker from "./pages/RevenueTracker";

function App() {
  return (
    <LocalState>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="front" />} />
            <Route path="front" element={<FrontPage />} />
            <Route path="addgame" element={<AddGame />} />
            <Route path="stockmarket" element={<StockMarket />} />
            <Route path="companies" element={<Companies />} />
            <Route path="gameinfo" element={<GameInfo />} />
            <Route path="revenue" element={<RevenueTracker />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--primary-lightest)",
              textColor: "var(--primary-dark)",
              border: "1px solid var(--primary-light)",
              boxShadow: "5px 5px 5px var(--primary-lighter)",
            },
          }}
        />
      </BrowserRouter>
    </LocalState>
  );
}

export default App;
