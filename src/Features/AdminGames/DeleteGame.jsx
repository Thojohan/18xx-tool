import Button from "../../ui/Button";
import { BsExclamationTriangle } from "react-icons/bs";
import { deleteGame } from "../../services/apiGames";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import WarningToast from "../../ui/WarningToast.jsx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGame } from "../session/sessionSlice.js";

function DeleteGame() {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.session.selectedGame);
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      toast.success("Game successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
      dispatch(setSelectedGame(""));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function clickHandler(game) {
    toast((t) => (
      <WarningToast
        yesHandler={() => {
          toast.dismiss(t.id);
          mutate(game);
        }}
        noHandler={() => {
          toast.dismiss(t.id);
        }}
      >
        Sure you want to delete this game permanently?
      </WarningToast>
    ));
  }

  return (
    <div className="flex justify-center mb-12 mr-32">
      <Button
        variant="primary"
        type="button"
        clickHandler={() => clickHandler(selectedGame)}
        disabled={!selectedGame || isLoading}
      >
        <p className="flex items-center">
          <BsExclamationTriangle className="text-red-800 dark:text-red-400" />
          <span className="m-2">Delete selected game </span>
          <BsExclamationTriangle className="text-red-800 dark:text-red-400" />
        </p>
      </Button>
    </div>
  );
}

export default DeleteGame;
