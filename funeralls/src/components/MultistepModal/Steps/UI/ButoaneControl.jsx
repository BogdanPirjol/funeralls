export default function ButoaneControl({
  numeButonSet,
  numeButonReset,
  disabledSet,
  disabledReset,
  setHandler,
  resetHandler,
}) {
  return (
    <div className="flex gap-x-4 justify-center">
      <button
        onClick={setHandler}
        disabled={disabledSet}
        type="button"
        className="bg-slate-600/80 hover:bg-slate-600 hover:cursor-pointer disabled:bg-slate-600/50 disabled:cursor-not-allowed text-gray-200 px-5 py-1 rounded-sm">
        {numeButonSet}
      </button>
      <button
        onClick={resetHandler}
        disabled={disabledReset}
        type="button"
        className="bg-red-600/80 hover:cursor-pointer hover:text-white hover:bg-red-600 text-gray-50 disabled:bg-red-600/70 disabled:text-gray-50/50 disabled:cursor-not-allowed px-5 py-1 rounded-sm">
        {numeButonReset}
      </button>
    </div>
  );
}
