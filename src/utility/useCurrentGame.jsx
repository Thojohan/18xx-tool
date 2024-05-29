import { useQuery } from "@tanstack/react-query";
import { getGames } from "../services/apiGames";

export function useCurrentGame(selectedGame) {
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });
  console.log(selectedGame, games);
  const gameObject = games.find((el) => +el.id === +selectedGame);
  return gameObject;
}
