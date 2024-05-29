import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Slider from "../../ui/Slider";
import { useDispatch, useSelector } from "react-redux";
import { darkToggle } from "./uiSlice";

function DarkMode() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);
  // const { uiState, dispatch } = text);

  function darkHandler() {
    dispatch(darkToggle());
    // localStorage.setItem("dark", !darkMode.toString());
  }

  return (
    <div className="flex text-2xl items-center gap-2">
      <MdOutlineLightMode />
      <Slider handler={darkHandler} defaultValue={darkMode} />
      <MdOutlineDarkMode />
    </div>
  );
}

export default DarkMode;
