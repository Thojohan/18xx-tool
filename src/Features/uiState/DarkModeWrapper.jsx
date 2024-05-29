import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

function DarkModeWrapper({ children }) {
  const darkMode = useSelector((state) => state.ui.darkMode);

  useLayoutEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return <>{children}</>;
}

export default DarkModeWrapper;
