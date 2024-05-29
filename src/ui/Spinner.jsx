function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <span
        className="flex h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-zinc-100 text-zinc-600"
        role="status"
      />
    </div>
  );
}

export default Spinner;
