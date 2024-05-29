function Slider({ handler, defaultValue }) {
  return (
    <label className="relative inline-block w-12 h-6 bg-zinc-400 rounded-xl">
      <input
        type="checkbox"
        onChange={handler}
        defaultChecked={defaultValue}
        className="peer hidden w-0 h-0"
      />
      <span className=" absolute cursor-pointer w-6 h-6 rounded-xl bg-zinc-200 before:left-0 peer-checked:translate-x-6 peer-checked:bg-zinc-600 ease-linear"></span>
    </label>
  );
}

export default Slider;
