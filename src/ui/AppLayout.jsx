import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="h-dvh w-dvw bg-zinc-50 text-zinc-800 grid grid-cols-[20rem_1fr] grid-rows-[90px_1fr_65px] dark:bg-zinc-800 dark:text-zinc-100">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
}

export default AppLayout;
