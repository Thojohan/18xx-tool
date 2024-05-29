function GameSelectedHeader({ condition, gameObject = [] }) {
  return (
    <p className="text-xl">
      {condition ? (
        <>
          <span className="capitalize">{gameObject.gameName}</span>
          <span> selected</span>
        </>
      ) : (
        "Please select a game from the sidebar"
      )}
    </p>
  );
}

export default GameSelectedHeader;
