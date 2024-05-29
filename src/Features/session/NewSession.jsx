import StartGameForm from "./StartGameForm";
import GameSelectedHeader from "../../ui/GameSelectedHeader";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames";
import { useSelector } from "react-redux";

function NewSession() {
  const selectedGame = useSelector((state) => state.session.selectedGame);

  // const { uiState } = useContext(UiContext);
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });

  const gameObject = games?.find((el) => +el.id === selectedGame) || {};
  console.log(gameObject);

  return (
    <>
      <header className=" font-secondary text-center">
        <h1 className="text-2xl">Start a new session</h1>
        <GameSelectedHeader condition={selectedGame} gameObject={gameObject} />
      </header>

      {Object.keys(gameObject).length > 1 && <StartGameForm />}
    </>
  );
}

export default NewSession;
