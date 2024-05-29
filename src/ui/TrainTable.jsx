import { useSelector } from "react-redux";
import { distance } from "../services/Utility";

function TrainTable({ trains }) {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <table className="w-[95%] text-sm">
      <caption className="text-xl font-bold">Train Table</caption>
      <thead>
        <tr className="text-l font-semibold">
          <th>Train name</th>
          <th>Price</th>
          <th>Distance</th>
          <th>Rusts on</th>
          {trains?.some((train) => train.obsolete_on) && <th>Obsolete on</th>}
          {trains?.some((train) => train.events) && <th>Events</th>}
        </tr>
      </thead>
      <tbody>
        {trains.map((train, i) => {
          const variantName = train.variants?.map((variant) => variant.name);
          const variantPrice = train.variants?.map((variant) => variant.price);
          const variantDistance = train.variants?.map((variant) =>
            variant.distance
              .map((dist) => `${dist.pay}/${dist.visit}`)
              .join(", ")
          );
          const events = train.events
            ?.map((event) => String(event.type).replaceAll("_", " "))
            .join(", ");
          const bgColour =
            i % 2 === 0
              ? `${darkMode ? "black" : "white"}`
              : "rgb(102, 153, 153, 0.2)";

          console.log(events);
          return (
            <tr
              className="text-center"
              style={{ backgroundColor: `${bgColour}` }}
              key={i}
            >
              <td>
                {train.name}
                {variantName && (
                  <>
                    <br />
                    {variantName}
                  </>
                )}
              </td>
              <td>
                {train.price}{" "}
                {variantPrice && (
                  <>
                    <br />
                    {variantPrice}
                  </>
                )}
              </td>
              {
                <td>
                  {distance(train.distance).map((el, i) => (
                    <p className="capitalize" key={i}>
                      {el}
                    </p>
                  ))}{" "}
                  {variantDistance && <>{variantDistance}</>}
                </td>
              }
              <td>{train.rusts_on}</td>
              {trains?.some((train) => train.obsolete_on) && (
                <td>{train.obsolete_on || ""}</td>
              )}
              {events ? <td className="capitalize">{events}</td> : <td></td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TrainTable;
