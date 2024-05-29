import { listWords, removeUnderscore } from "../services/Utility";

function PhaseTable({ phases }) {
  return (
    <table className="w-[95%] text-sm">
      <caption className="text-xl font-bold">Phase Table</caption>
      <thead>
        <tr className=" text-l font-semibold">
          <th>Phase name</th>
          <th>Phase trigger</th>
          <th>Train limit</th>
          <th>Operating rounds</th>
          <th>Available tiles</th>
          <th>Phase status</th>
        </tr>
      </thead>
      <tbody>
        {phases.map((phase, i) => {
          function phaseColour(tileset) {
            if (tileset.find((el) => el.includes("gray")))
              return "rgba(128, 128, 128, 0.4)";
            if (tileset.find((el) => el.includes("brown")))
              return "rgba(131, 60, 28, 0.4)";
            if (tileset.find((el) => el.includes("green")))
              return "rgba(14, 122, 50, 0.4)";
            if (tileset.find((el) => el.includes("yellow")))
              return "rgba(246, 246, 6, 0.4)";
            return "rgba(131, 90, 28, 0.4)";
          }

          console.log(phaseColour(phase.tiles));
          return (
            <tr
              key={i}
              className="text-center"
              style={{ backgroundColor: `${phaseColour(phase.tiles)}` }}
            >
              <td>{phase.name}</td>
              <td>{phase.on || ""}</td>
              <td>{phase.train_limit}</td>
              <td>{phase.operating_rounds}</td>
              <td>
                {phase.tiles.map((tile, i) => listWords(tile, i, phase.tiles))}
              </td>
              <td className="capitalize">{removeUnderscore(phase.status)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PhaseTable;
