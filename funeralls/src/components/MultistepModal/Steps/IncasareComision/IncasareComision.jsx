import { useState } from "react";
import ButoaneControl from "../UI/ButoaneControl";
import { editareTermenIncasareComision, useData, useDispatch } from "../../../../Context/reducer";
/* import {
  editareTermenIncasareComision,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */

export default function IncasareComision() {
  const termenSetat = useData("termenIncasareComision");
  const dispatch = useDispatch();

  const [termen, setTermen] = useState("");

  console.log(termenSetat, termen);

  function handleTermenChange(e) {
    setTermen(e.target.value);
  }

  function setDaysHandler() {
    dispatch(editareTermenIncasareComision(termen));
    setTermen("");
  }
  function resetDaysHandler() {
    dispatch(editareTermenIncasareComision(termen));
  }
  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">Incasare comision</span>
      </div>

      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100 italic">
          In termen de{" "}
          <b className="font-semibold">
            {termenSetat.value ? termenSetat.value : "___"} zile
          </b>{" "}
          calendaristice de la data incasarii valorii totale a facturii emise de
          catre Beneficiar catre client.
        </span>
      </div>

      {/* value setter */}
      <div className="relative border border-slate-600 p-10 mt-10 rounded-md">
        <span className="text-gray-100 absolute -top-4 text-lg left-3 bg-slate-800 px-3">
          Editeaza termen
        </span>
        <div className="flex items-center gap-x-2 flex-wrap gap-y-4">
          <span className="text-gray-200 text-lg">Numar de zile</span>
          <input
            type="number"
            value={termen}
            onChange={handleTermenChange}
            className="py-1 w-32 bg-slate-600 text-gray-200 [&::-webkit-inner-spin-button]:appearance-none"></input>
          <ButoaneControl
            numeButonSet={"Seteaza numar zile"}
            numeButonReset={"Reset"}
            setHandler={setDaysHandler}
            resetHandler={resetDaysHandler}
            disabledReset={!termenSetat.value}
            disabledSet={!termen}
          />
        </div>
      </div>
    </div>
  );
}
