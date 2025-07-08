import { useState } from "react";
import ButoaneControl from "../UI/ButoaneControl";
import { editareTermenIndeplinireContract, useData, useDispatch } from "../../../../Context/reducer";


export default function TermenIndeplinireContract() {
  const termenSetat = useData("termenOnorareContract");
  const dispatch = useDispatch();
  const [termen, setTermen] = useState({
    unitateDeMasura: "",
    cantitate: "",
  });

  function handleChange(e) {
    if (e.target.id === "unitate-masura")
      return setTermen((prev) => ({
        ...prev,
        unitateDeMasura: e.target.value,
      }));
    setTermen((prev) => ({
      ...prev,
      cantitate: e.target.value,
    }));
  }

  function handleSave() {
    dispatch(editareTermenIndeplinireContract(termen));
    setTermen({
      unitateDeMasura: "",
      cantitate: "",
    });
  }

  function handleReset() {
    dispatch(editareTermenIndeplinireContract({}));
  }

  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">
          Modul de indeplinire a contractului
        </span>
      </div>
      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100 italic">
          Beneficiarul va prelua comanda clientilor solicitate prin intermediul
          site-ului www.funeralls.com. Tot beneficiarul va emite Contractul de
          Prestare servicii si vanzare de produse catreclientul de pe platforma
          www.funeralls.com insotit de factura corespunzatoare. Beneficiarul se
          obliga sa onoreze comanda in termenul asumat prin contract de{" "}
          {termenSetat.cantitate !== undefined ? (
            <b>
              {termenSetat?.cantitate} {termenSetat?.unitateDeMasura}
            </b>
          ) : (
            `_____
          (ore, zile,etc)`
          )}
          .
        </span>
      </div>
      {/* value setter */}
      <div className="relative border border-slate-600 p-10 mt-10 rounded-md">
        <span className="text-gray-100 absolute -top-4 text-lg left-3 bg-slate-800 px-3">
          Editeaza termenul asumat prin contract
        </span>
        <div className="flex flex-col justify-center gap-x-2 gap-y-10">
          <div className="flex justify-center gap-x-2 flex-wrap gap-y-3">
            {/* unitate de masura */}
            <div className="flex gap-x-1 items-center">
              <span className="text-lg text-gray-100">Unitate de masura</span>
              <select
                id="unitate-masura"
                className="py-1 bg-slate-600 cursor-pointer text-gray-100"
                value={termen.unitateDeMasura || "---"}
                onChange={handleChange}>
                <option value={"---"} disabled className="hidden"></option>
                <option className="text-gray-100" value="ore">
                  Ore
                </option>
                <option className="text-gray-100" value="zile">
                  Zile
                </option>
                <option className="text-gray-100" value="saptamani">
                  Saptamani
                </option>
                <option className="text-gray-100" value="luni">
                  Luni
                </option>
              </select>
            </div>
            {/* cantitate */}
            <div className="flex gap-x-1 items-center">
              <span className="text-lg text-gray-100">Cantitatea</span>
              <input
                id="cantitate"
                className="py-1 bg-slate-600 text-gray-100 [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                value={termen.cantitate}
                onChange={handleChange}></input>
            </div>
          </div>
          {/* butoane de control */}
          <ButoaneControl
            numeButonReset={"Resetare"}
            numeButonSet={"Salveaza termen"}
            disabledReset={termenSetat.cantitate === undefined}
            disabledSet={!(termen.cantitate && termen.unitateDeMasura)}
            setHandler={handleSave}
            resetHandler={handleReset}
          />
        </div>
      </div>
    </div>
  );
}
