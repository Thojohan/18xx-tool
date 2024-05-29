function FormInput({
  rowID,
  inputType,
  isLoading,
  rowName = null,
  register = null,
  children,
  error = null,
  label = null,
}) {
  return (
    <div className="flex justify-around w-full ">
      <label className="w-[300px]" htmlFor={rowID}>
        {inputType === "radio" ? label : children}
      </label>
      <div className="flex flex-col w-full">
        {inputType === "textArea" && (
          <textarea
            className="w-5/6 mr-6 bg-zinc-200 h-32 pl-2 pr-2 dark:bg-zinc-700"
            id={rowID}
            disabled={isLoading}
            name={rowName || rowID}
            {...register}
          />
        )}
        {inputType !== "textArea" && inputType !== "radio" && (
          <input
            className={"w-5/6 mr-6 bg-zinc-200 dark:bg-zinc-700 pl-2"}
            id={rowID}
            type={inputType}
            disabled={isLoading}
            name={rowName || rowID}
            {...register}
          />
        )}
        {inputType === "radio" && children}
        {error && (
          <p className="mt-2 text-sm font-semibold text-red-800 dark:text-red-400 flex justify-center">
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default FormInput;
