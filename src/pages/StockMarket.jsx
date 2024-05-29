import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getGames } from "../services/apiGames";
import { colourFinder } from "../services/Utility";
import GameSelectedHeader from "../ui/GameSelectedHeader";

function StockMarket() {
  const darkMode = useSelector((state) => state.ui.darkMode);
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
  const market = gameObject?.marketJSON;

  return (
    <div className="pb-12 space-y-8">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Stock Market</h1>
        <GameSelectedHeader condition={market} gameObject={gameObject} />
      </header>
      {market && Object.keys(market).length > 0 && (
        <table>
          <tbody>
            {market.map((line, i) => (
              <tr key={i}>
                {line.map((cell, i) => {
                  const str = cell[String(cell).search(/\D/g)] || "";
                  const numb = parseInt(cell) ?? "";
                  return (
                    <td
                      key={i}
                      className={`${colourFinder(str, darkMode)} py-2 px-3  ${
                        !isNaN(numb) &&
                        "border-solid border-[1px] border-gray-400"
                      }`}
                    >
                      {isNaN(numb) ? "" : numb}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StockMarket;
