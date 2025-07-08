import { useState } from "react";
import {
  editeazaComisionIntermediar,
  useData,
  useDispatch,
} from "../../../../Context/reducer";
/* import {
  editeazaComisionIntermediar,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */

export default function ComisionIntermediar() {
  const comision = useData("comisionIntermediar");
  const dispatch = useDispatch();
  const [comisionIntermediar, setComisionIntermediar] = useState("");

  function onChangeComisionHandler(e) {
    if (e.target.value < 0) return setComisionIntermediar(0);
    if (e.target.value > 100) return setComisionIntermediar(100);
    setComisionIntermediar(e.target.value);
  }

  function handleSetComisionIntermediar() {
    dispatch(editeazaComisionIntermediar(comisionIntermediar));
    setComisionIntermediar("");
  }

  function handleResetComisionIntermediar() {
    dispatch(editeazaComisionIntermediar(null));
    if (comisionIntermediar) setComisionIntermediar("");
  }

  return (
    <div className="h-[80%] px-6">
      {/* title */}
      <div className="flex py-5 border-b m-auto border-slate-300">
        <h1 className="text-gray-100 text-2xl px-2">Comision Intermediar</h1>
      </div>
      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100">
          Intermediarul este indreptatit ca la fiecare vanzare de servicii sau
          produse de catre Beneficiar sa solicite si sa primesca un comision in
          valoare de <b>{comision.value ? `${comision.value}%` : "___%"}</b> din
          valoarea totala a Contractului pe care Beneficiarul il remite
          Cumparatorului.{" "}
        </span>
      </div>
      {/* value setter */}
      <div className="relative w-[55%] m-auto border border-slate-400 rounded-md p-10 mt-16">
        <span className="text-gray-200 absolute -top-4 left-4 bg-slate-800 px-2 py-1">
          Editeaza valoarea comisionului
        </span>
        <div className="flex flex-col w-full gap-y-4">
          <div className="relative">
            <span className="absolute text-gray-300 pointer-events-none text-xl font-semibold top-1/2 -translate-y-1/2 right-2">
              %
            </span>
            <input
              onChange={onChangeComisionHandler}
              className="bg-slate-500 w-full [&::-webkit-inner-spin-button]:appearance-none text-gray-100 txt-lg rounded-md"
              type="number"
              value={comisionIntermediar}></input>
          </div>
          <div className="flex w-full justify-between">
            <button
              onClick={handleSetComisionIntermediar}
              disabled={!Boolean(comisionIntermediar)}
              className="bg-slate-600/60 disabled:bg-slate-600/30 disabled:text-gray-100/50 hover:bg-slate-600 px-5 py-2 rounded-md text-gray-100 disabled:cursor-not-allowed">
              Seteaza valoarea Comisionului
            </button>
            <button
              disabled={!comision.value}
              onClick={handleResetComisionIntermediar}
              className="bg-red-600/70 disabled:bg-red-600/50 disabled:text-gray-100/50 hover:bg-red-600 px-5 py-2 rounded-md text-gray-100 disabled:cursor-not-allowed">
              Resetare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
