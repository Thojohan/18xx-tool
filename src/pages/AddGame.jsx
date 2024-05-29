import AddGameForm from "../Features/AdminGames/AddGameForm";
import DeleteGame from "../Features/AdminGames/DeleteGame";

function AddGame() {
  return (
    <div className="flex flex-col">
      <AddGameForm />
      <DeleteGame />
    </div>
  );
}

export default AddGame;
