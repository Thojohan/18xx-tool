function Button({
  clickHandler,
  variant,
  type,
  children,
  disabled,
  status = "",
  id = null,
}) {
  if (variant === "listItem")
    return (
      <button
        className={`font-secondary mt-2 capitalize text-md text-start dark:text-zink-200 ${
          status === "selected" &&
          "font-semibold text-zinc-900 dark:text-zinc-50"
        } ${status === "active" && "font-bold text-red-900 dark:text-red-300"}`}
        onClick={clickHandler}
        id={id}
        type={type}
      >
        {children}
      </button>
    );

  if (variant === "primary")
    return (
      <button
        onClick={clickHandler}
        style={{ hover: "transform(translate3d(0px, -10px, -0px)" }}
        className="font-secondary capitalize text-sm font-semibold px-4 py-2 rounded-xl enabled:hover:ring ring-offset-2 ring-offset-zinc-50 dark:ring-offset-zinc-800 ring-zinc-300 dark:ring-zinc-500  dark:text-zinc-200 shadow-md bg-zinc-100
         enabled:hover:ring-zinc-300 dark:hover:ring-zinc-500 enabled:dark:active:ring-zinc-300 dark:shadow-zinc-700 dark:bg-zinc-700 enabled:hover:ring-offset-2 enabled:active:ring-zinc-600 enabled:hover:scale-105 disabled:opacity-60 group-[.active]:bg-zinc-200 dark:group-[.active]:bg-zinc-500"
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
}

export default Button;
