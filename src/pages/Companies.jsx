import { useSelector } from "react-redux";
import { getGames } from "../services/apiGames";
import { useQuery } from "@tanstack/react-query";
import GameSelectedHeader from "../ui/GameSelectedHeader";
import PrivCompRow from "../ui/PrivCompRow";
import CorpRow from "../ui/CorpRow";
import MinorRow from "../ui/MinorRow";

function Companies() {
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
  const privates = gameObject?.privatesJSON;
  const corps = gameObject?.companiesJSON;
  const minors = gameObject?.minorsJSON;

  return (
    <div className="flex flex-col space-y-8 pb-12">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Companies, Privates and Minors</h1>
        <GameSelectedHeader
          condition={corps || privates || minors}
          gameObject={gameObject}
        />
      </header>
      {privates && Object.keys(privates).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {privates.map((privComp, i) => (
            <PrivCompRow key={i} gameObject={gameObject} privComp={privComp} />
          ))}
        </div>
      )}
      {corps && Object.keys(corps).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {corps.map((corp, i) => {
            return <CorpRow key={i} corp={corp} />;
          })}
        </div>
      )}
      {minors && Object.keys(minors).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {minors.map((minor, i) => {
            return <MinorRow key={i} minor={minor} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Companies;
