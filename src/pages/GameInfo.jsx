import { useSelector } from "react-redux";
import GameSelectedHeader from "../ui/GameSelectedHeader";
import { getGames } from "../services/apiGames";
import { useQuery } from "@tanstack/react-query";
import GameMetrics from "../ui/GameMetrics";
import PhaseTable from "../ui/PhaseTable";
import TrainTable from "../ui/TrainTable";

function GameInfo() {
  const selectedGame = useSelector((state) => state.session.selectedGame);
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });
  const gameObject = games?.find((el) => +el.id === +selectedGame);
  const phases = gameObject?.phasesJSON;
  const trains = gameObject?.trainsJSON;

  return (
    <div className="pb-12 space-y-8">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Game Info </h1>
        <GameSelectedHeader condition={gameObject} gameObject={gameObject} />
      </header>
      {gameObject && <GameMetrics gameObject={gameObject} />}
      {phases && Object.keys(phases).length > 0 && (
        <PhaseTable phases={phases} />
      )}
      {trains && Object.keys(trains) && <TrainTable trains={trains} />}
    </div>
  );
}

export default GameInfo;
