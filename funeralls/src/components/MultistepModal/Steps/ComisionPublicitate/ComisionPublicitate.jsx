import { useState } from "react";
import { FiPercent } from "react-icons/fi";

import ButoaneControl from "../UI/ButoaneControl";
import { editareComisionPublicitate, useData, useDispatch } from "../../../../Context/reducer";

export default function ComisionPublicitate() {
  const comisionSetat = useData("comisionPublicitate");
  const dispatch = useDispatch();

  const [comisionPublicitate, setComisionPublicitate] = useState({
    tip: "",
    valoare: "",
  });

  function handleSelectChange(e) {
    setComisionPublicitate({
      tip: e.target.value,
      valoare: "",
    });
  }

  function handleValueChange(e) {
    if (comisionPublicitate.tip === "procent") {
      if (e.target.value > 100)
        return setComisionPublicitate((prev) => ({
          ...prev,
          valoare: 100,
        }));
      if (e.target.value < 0)
        return setComisionPublicitate((prev) => ({
          ...prev,
          valoare: 0,
        }));
      return setComisionPublicitate((prev) => ({
        ...prev,
        valoare: e.target.value,
      }));
    }
    return setComisionPublicitate((prev) => ({
      ...prev,
      valoare: e.target.value,
    }));
  }

  function handleEditareComision() {
    dispatch(editareComisionPublicitate(comisionPublicitate));
    setComisionPublicitate({
      tip: "",
      valoare: "",
    });
  }

  function handleResetComision() {
    dispatch(editareComisionPublicitate(null));
    setComisionPublicitate({
      tip: "",
      valoare: "",
    });
  }

  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">
          Comision pentru publicitate
        </span>
      </div>

      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100 italic">
          Intermediarul va actiona pe spezele sale, cu exceptia cazului in care
          va colabora cu beneficiarul in activitatea de publicitate pe pietele
          din Teritoriul contractual, atat in ce priveste formele, cat si
          cheltuielile de publicitate, daca este cazul. Beneficiarul se obliga
          sa plateasca lunar{" "}
          <b className="font-semibold">
            {comisionSetat.valoare
              ? `${comisionSetat.valoare}${
                  comisionSetat.tip === "suma fixa" ? " (RON)" : "%"
                }`
              : "[un procent din vanzari/ o suma fixa]"}
          </b>{" "}
          pentru publictate.
        </span>
      </div>

      {/* value setter */}
      <div className="relative border border-slate-600 p-10 mt-10 rounded-md">
        <span className="text-gray-100 absolute -top-4 text-lg left-3 bg-slate-800 px-3">
          Editeaza comisionul pentru publicitate
        </span>
        <div className="flex flex-wrap gap-y-3 gap-x-4">
          {/* tip remuneratie: procent/suma */}
          <div className="flex items-center gap-x-2">
            <span className="text-gray-200">Tip remuneratie</span>
            <select
              onChange={handleSelectChange}
              value={comisionPublicitate.tip || "---"}
              className="cursor-pointer py-1 bg-slate-600 text-gray-200">
              <option value="---" className="hidden" disabled></option>
              <option value="procent">Procent</option>
              <option value="suma fixa">Suma Fixa</option>
            </select>
          </div>
          {/* valoare remuneratie */}
          <div className="relative">
            <input
              className={`py-1 bg-slate-600 w-36 ${
                comisionPublicitate.tip === "procent"
                  ? "w-36 pr-5"
                  : "w-52 pr-16"
              } [&::-webkit-inner-spin-button]:appearance-none text-gray-100`}
              type="number"
              value={comisionPublicitate.valoare}
              onChange={handleValueChange}></input>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-200/50 font-semibold text-lg select-none pointer-events-none">
              {comisionPublicitate.tip === "procent" ? (
                <FiPercent />
              ) : comisionPublicitate.tip === "suma fixa" ? (
                "(RON)"
              ) : (
                ""
              )}
            </span>
          </div>
          {/* butoane control */}
          <ButoaneControl
            setHandler={handleEditareComision}
            resetHandler={handleResetComision}
            disabledSet={
              !(comisionPublicitate.tip && comisionPublicitate.valoare)
            }
            disabledReset={!comisionSetat.valoare}
            numeButonReset={"Resetare"}
            numeButonSet={"Seteaza suma"}
          />
        </div>
      </div>
    </div>
  );
}
