function JsonTemplate({ children }) {
  return (
    <div className="ml-12 flex justify-center gap-4 text-xs font-semibold">
      <span>Example: </span>
      <span className="bg-zinc-100 dark:bg-zinc-800 p-2 w-1/2">{children}</span>
    </div>
  );
}
export default JsonTemplate;
