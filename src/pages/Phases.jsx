import GameSelectedHeader from "../ui/GameSelectedHeader";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../services/apiGames";
import { useSelector } from "react-redux";
import PhaseTable from "../ui/PhaseTable";
import TrainTable from "../ui/TrainTable";

function Phases() {
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
    <div className="flex flex-col gap-12 pb-12">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Game Phases & Train Roster</h1>
        <GameSelectedHeader condition={phases} gameObject={gameObject} />
      </header>

      {phases && Object.keys(phases).length > 0 && (
        <PhaseTable phases={phases} />
      )}
      {trains && Object.keys(trains) && <TrainTable trains={trains} />}
    </div>
  );
}

export default Phases;
