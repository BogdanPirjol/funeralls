import { useState } from "react";
import ButoaneControl from "../UI/ButoaneControl";
import { editeazaComisionPlatforma, useData, useDispatch } from "../../../../Context/reducer";

export default function ComisionPlatforma() {
  const comisionSetat = useData("comisionPlatforma");
  const dispatch = useDispatch();

  const [comision, setComision] = useState("");

  function handleComisionChange(e) {
    setComision(e.target.value);
  }

  function handleSetComision() {
    dispatch(editeazaComisionPlatforma(comision));
    setComision("");
  }

  function handleResetComision() {
    dispatch(editeazaComisionPlatforma(""));
    setComision("");
  }

  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">Comision platforma</span>
      </div>

      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100 italic">
          Comisionul tranzactiilor efectuate prin intermediul platformei
          www.funeralls.com intre Intermediar si Beneficiar este de{" "}
          {comisionSetat.value ? (
            <b className="font-semibold">{`${comisionSetat.value} %`}</b>
          ) : (
            ` ____
          (procent in litere)%`
          )}{" "}
          din valoarea facturilor emise, aparte de abonamentul achizitionat.
        </span>
      </div>

      {/* value setter */}
      <div className="relative border border-slate-600 p-10 mt-10 rounded-md">
        <span className="text-gray-100 absolute -top-4 text-lg left-3 bg-slate-800 px-3">
          Editeaza comisionul pentru platforma
        </span>
        <div className="flex flex-wrap gap-x-4">
          <div className="flex items-center gap-x-2">
            <span className="text-gray-100 text-lg">Procent in litere</span>
            <div className="relative">
              <input
                type="text"
                value={comision}
                onChange={handleComisionChange}
                className="py-1 bg-slate-600 text-gray-100 rounded-md"></input>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 select-none pointer-events-none">
                %
              </span>
            </div>
          </div>
          <ButoaneControl
            setHandler={handleSetComision}
            resetHandler={handleResetComision}
            numeButonSet={"Seteaza procent"}
            numeButonReset={"Reset"}
            disabledReset={false}
            disabledSet={false}
          />
        </div>
      </div>
    </div>
  );
}
