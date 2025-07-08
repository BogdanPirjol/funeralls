export default function InputField({
  name,
  value,
  inputType = "text",
  changeHandler,
  options,
}) {
  return (
    <div className="grid grid-cols-subgrid col-span-2 items-center">
      <span className="col-start-1 col-span-1 text-white text-lg">
        {name[0].toUpperCase() + name.slice(1)}
      </span>
      {inputType === "option" ? (
        <select
          onChange={changeHandler}
          name={name}
          value={value}
          className="col-start-2 col-span-1 bg-[#465a7e66] text-gray-100 py-1 rounded-md focus:ring-1 focus:ring-slate-400 focus:border-slate-400 focus-visible:outline-none cursor-pointer">
          {options.map((option) => {
            return option === "---" ? (
              <option value="---" disabled className="hidden"></option>
            ) : (
              <option name={option} className="bg-slate-700 cursor-pointer">
                {option}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={inputType}
          name={name}
          className="col-start-2 col-span-1 bg-[#465a7e66] text-gray-100 py-1 rounded-md focus:ring-1 focus:ring-slate-400 focus:border-slate-400 focus-visible:outline-none"
          value={value}
          onChange={changeHandler}></input>
      )}
    </div>
  );
}
