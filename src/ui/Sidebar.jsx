import { getGames } from "../services/apiGames";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import Error from "./Error";
import Button from "./Button";
import toast from "react-hot-toast";
import WarningToast from "./WarningToast";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGame, stopOngoing } from "../Features/session/sessionSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { selectedGame, isOngoing } = useSelector((state) => state.session);
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });

  function statusHandler(gameID, selectedGameID, ongoing) {
    if (+gameID === +selectedGameID && ongoing === false) return "selected";
    if (+gameID === +selectedGameID && ongoing === true) return "active";
    return "";
  }

  console.log(games);

  function selectGame(e) {
    console.log(e.target.id);
    const gameID = e.target.id;
    if (isOngoing) {
      toast((t) => (
        <WarningToast
          yesHandler={() => {
            toast.dismiss(t.id);
            dispatch(setSelectedGame(selectedGame === +gameID ? "" : +gameID));
            dispatch(stopOngoing());
            // theme.dispatch({
            //   type: "selected-game",
            //   payload: `${
            //     +theme.uiState.selectedGame === +gameID ? "" : +gameID
            //   }`,
            // });
            // theme.dispatch({ type: "stop-ongoing" });
          }}
          noHandler={() => {
            toast.dismiss(t.id);
          }}
        >
          NB: This will terminate the current game session
        </WarningToast>
      ));
    }
    if (isOngoing === false) {
      dispatch(setSelectedGame(selectedGame === +gameID ? "" : +gameID));
      // theme.dispatch({
      //   type: "selected-game",
      //   payload: `${+theme.uiState.selectedGame === +gameID ? "" : +gameID}`,
      // });
    }
  }

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMsg={error?.message} />;

  return (
    <aside className="w-full h-full pl-4 text-md font-secondary pt-4 flex flex-col pr-2">
      {games?.map((game, i) => (
        <Button
          key={i}
          variant="listItem"
          type="button"
          id={game.id}
          clickHandler={selectGame}
          status={statusHandler(game.id, selectedGame, isOngoing)}
        >
          {game.gameName}
        </Button>
      ))}
    </aside>
  );
}

export default Sidebar;
