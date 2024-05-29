function GameMetrics({ gameObject }) {
  return (
    <table className="capitalize w-[90%] ml-4 ">
      <caption className="font-bold text-xl">Game Info and Metrics</caption>
      <thead>
        <tr className="w-100 font-semibold text-l">
          <th>Attribute</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-400">
        <tr>
          <td>Game Designer</td>
          <td>{gameObject.gameDesigner}</td>
        </tr>
        <tr>
          <td>Release year</td>
          <td>{gameObject.releaseYear}</td>
        </tr>
        <tr>
          <td>BGG Link</td>
          <td>
            <a href={gameObject.bggLink} className="lowercase">
              {gameObject.bggLink}
            </a>
          </td>
        </tr>
        <tr>
          <td>Rules Link</td>
          <td>
            <a href={gameObject.rulesLink} className="lowercase">
              {gameObject.rulesLink}
            </a>
          </td>
        </tr>
        <tr>
          <td>Player Count</td>
          <td>
            {gameObject.playerCountFrom}{" "}
            {gameObject.playerCountFrom !== gameObject.playerCountTo
              ? `- ${gameObject.playerCountTo}`
              : ""}
          </td>
        </tr>
        <tr>
          <td>Best Player Count</td>
          <td>
            {gameObject.bestPlayerCountFrom}{" "}
            {gameObject.bestPlayerCountFrom !== gameObject.bestPlayerCountTo
              ? `- ${gameObject.bestPlayerCountTo}`
              : ""}
          </td>
        </tr>
        <tr>
          <td>Bank size</td>
          <td>
            {gameObject?.bankSize &&
              Number.isInteger(gameObject.bankSize) &&
              `${gameObject.currencySymbol} ${gameObject.bankSize}`}
            {gameObject?.bankSize &&
              typeof gameObject.bankSize === "object" &&
              Object.keys(gameObject.bankSize).map((key) => (
                <p
                  key={key}
                >{`${key} players  -  ${gameObject.currencySymbol} ${gameObject.bankSize[key]}`}</p>
              ))}
          </td>
        </tr>
        <tr>
          <td>Starting money per player</td>
          <td>
            {gameObject?.startingMoneyJSON &&
              Object.keys(gameObject.startingMoneyJSON).map((key) => (
                <p
                  key={key}
                >{`${key} players  -  ${gameObject.currencySymbol} ${gameObject.startingMoneyJSON[key]}`}</p>
              ))}
          </td>
        </tr>
        <tr>
          <td>Certificate Limit</td>
          <td>
            {gameObject?.certLimitJSON &&
              Object.keys(gameObject.certLimitJSON).map((key) => {
                const certLimit = Number.isInteger(
                  gameObject.certLimitJSON[key]
                )
                  ? `${gameObject.certLimitJSON[key]} certificates`
                  : Object.keys(gameObject.certLimitJSON[key])
                      .map(
                        (subKey) =>
                          `${subKey} corps: ${gameObject.certLimitJSON[key][subKey]} certs`
                      )
                      .join(", ");

                return <p key={key}>{`${key} players  - ${certLimit}`}</p>;
              })}
          </td>
        </tr>
        <tr>
          <td>McGuffins</td>
          <td className="normal-case">
            {gameObject.mcGuffins &&
              gameObject.mcGuffins
                .split(".")
                .map((el, i) => <p key={i}>{el}</p>)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GameMetrics;
