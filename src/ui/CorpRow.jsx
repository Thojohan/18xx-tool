function CorpRow({ corp }) {
  return (
    <div
      style={{
        backgroundColor: `${corp.color}`,
      }}
      className="flex flex-col py-4 p-6 gap-2"
    >
      <p
        className="font-semibold flex justify-between"
        style={{
          color: "white",
          textShadow: "1px 1px 1px black",
          mixBlendMode: "difference",
        }}
      >
        <span>{corp.name}</span>
        <span>{corp.sym}</span>
      </p>
      <p className="flex gap-2">
        {corp.tokens.map((token, i) => (
          <span
            key={i}
            className="bg-white rounded-3xl w-8 h-8 text-center leading-8"
            style={{
              color: `${corp.color}`,
              boxShadow: "2px 2px 2px darkgray",
              textShadow: "1px 1px 1px black",
              backgroundColor: "white",
            }}
          >
            {token}
          </span>
        ))}
      </p>
      {corp.abilities &&
        corp.abilities.map((ability, i) =>
          ability.desc_detail ? (
            <p
              style={{
                color: "white",
                mixBlendMode: "difference",
              }}
              key={i}
            >
              {ability.desc_detail}
            </p>
          ) : (
            ""
          )
        )}
    </div>
  );
}

export default CorpRow;
