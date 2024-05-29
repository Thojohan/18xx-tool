import { GiSteamLocomotive } from "react-icons/gi";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import DarkMode from "../Features/uiState/DarkMode";

function Header() {
  return (
    <header className="flex justify-around items-center col-span-2 border-zinc-300 border-solid border-b-2 dark:border-zinc-600">
      <NavLink
        to="/addgame"
        className={({ isActive }) => (isActive ? " group active" : "")}
      >
        <Button variant="primary" type="button">
          Administer games
        </Button>
      </NavLink>
      <NavLink to="/">
        <h1 className="flex text-4xl select-none tracking-wide font-semibold">
          <GiSteamLocomotive
            style={{ transform: "rotateY(180deg)", fontSize: "2.5rem" }}
          />
          <span className="font-secondary border-t-2 mt-[0.11rem] border-zinc-600">
            18XXTool
          </span>
          <GiSteamLocomotive style={{ fontSize: "2.5rem" }} />
        </h1>
      </NavLink>
      <Button variant="primary" type="button">
        Revenue per company
      </Button>
      <NavLink
        to="/revenue"
        className={({ isActive }) => (isActive ? " group active" : "")}
      >
        <Button variant="primary" type="button">
          Revenue tracker
        </Button>
      </NavLink>
      <NavLink
        to="/companies"
        className={({ isActive }) => (isActive ? " group active" : "")}
      >
        <Button variant="primary" type="button">
          Companies
        </Button>
      </NavLink>
      <NavLink
        to="/stockmarket"
        className={({ isActive }) => (isActive ? " group active" : "")}
      >
        <Button variant="primary" type="button">
          Stock market
        </Button>
      </NavLink>
      <NavLink
        to="/gameinfo"
        className={({ isActive }) => (isActive ? " group active" : "")}
      >
        <Button variant="primary" type="button">
          Game Info
        </Button>
      </NavLink>

      <DarkMode />
    </header>
  );
}

export default Header;
