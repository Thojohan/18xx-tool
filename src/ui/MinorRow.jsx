function MinorRow({ minor }) {
  return (
    <div
      style={{
        backgroundColor: `${minor.color}`,
      }}
      className="flex flex-col py-4 p-6 gap-2 space-y-1"
    >
      <p
        className="font-semibold flex justify-between"
        style={{
          color: "white",

          textShadow: "1px 1px 1px black",
          mixBlendMode: "difference",
        }}
      >
        <span>{minor.name}</span>
        <span>{minor.sym}</span>
      </p>
      <p className="flex gap-2">
        {minor.tokens?.map((token, i) => (
          <span
            key={i}
            className="bg-white rounded-3xl w-8 h-8 text-center leading-8"
            style={{
              color: `${minor.color}`,
              boxShadow: "2px 2px 2px darkgray",
              textShadow: "1px 1px 1px black",
              backgroundColor: "white",
            }}
          >
            {token}
          </span>
        ))}
      </p>
    </div>
  );
}

export default MinorRow;
