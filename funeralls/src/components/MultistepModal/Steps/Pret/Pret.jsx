import { useEffect, useState } from "react";
import ButoaneControl from "../UI/ButoaneControl";
import { editeazaPretSiPlata, useData, useDispatch } from "../../../../Context/reducer";
/* import {
  editeazaPretSiPlata,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */

export default function Pret() {
  const [tipGarantie, setTipGarantie] = useState("");
  const [valoarePret, setValoarePret] = useState(null);
  const [modalitatePlata, setModalitatePlata] = useState("");
  const [valoarePlata, setValoarePlata] = useState("");

  const [dataCompletion, setDataCompletion] = useState(false);
  const [resetDisable, setResetDisable] = useState(false);

  const dispatch = useDispatch();
  const pretSetat = useData("pretSiModalitatiDePlata");

  function handleCheckChange(e) {
    setTipGarantie(e.target.value);
  }

  function handleCheckModalitatePlata(e) {
    setModalitatePlata(e.target.value);
  }

  function handleChangePret(e) {
    if (tipGarantie !== "custom") {
      if (e.target.value > 100) return setValoarePret(100);
      if (e.target.value < 0) return setValoarePret(0);
      return setValoarePret(e.target.value);
    }
    setValoarePret(e.target.value);
  }

  function handleChangeValoarePlata(e) {
    setValoarePlata(e.target.value);
  }

  useEffect(() => {
    if (modalitatePlata === "altfel") setValoarePlata("");
  }, [modalitatePlata]);

  useEffect(() => {
    if (tipGarantie === "custom") return setValoarePret("");
    if (tipGarantie === "garantie-solida" || tipGarantie === "negarantat")
      return setValoarePret("");
  }, [tipGarantie]);

  function setValoriHandler() {
    dispatch(
      editeazaPretSiPlata({
        tipGarantie,
        valoarePret,
        modalitatePlata,
        valoarePlata,
      })
    );
    setTipGarantie("");
    setValoarePret(null);
    setModalitatePlata("");
    setValoarePlata(null);
  }

  function handleResetPret() {
    dispatch(editeazaPretSiPlata({}));
    setTipGarantie("");
    setValoarePret(null);
    setModalitatePlata("");
    setValoarePlata(null);
  }

  useEffect(() => {
    if (pretSetat.tipGarantie && pretSetat.valoarePret) {
      if (pretSetat.modalitatePlata === "standard")
        return setResetDisable(false);
      if (pretSetat.modalitatePlata === "altfel" && pretSetat.valoarePlata)
        return setResetDisable(false);
    }
    return setResetDisable(true);
  }, [pretSetat]);

  useEffect(() => {
    if (tipGarantie && valoarePret) {
      if (modalitatePlata === "standard") {
        return setDataCompletion(true);
      }
      if (modalitatePlata === "altfel" && valoarePlata)
        return setDataCompletion(true);
    }
    return setDataCompletion(false);
  }, [tipGarantie, valoarePret, modalitatePlata, valoarePlata]);

  /* console.log({ tipGarantie, valoarePret, modalitatePlata, valoarePlata }); */

  function renderInput(tipGarantie) {
    switch (tipGarantie) {
      case "garantie-solida":
        return (
          <div className="flex items-center justify-center py-10 gap-x-2">
            <span className="text-gray-100 ">Valoare comision</span>
            <div className="relative">
              <input
                type="number"
                id="garantat"
                value={valoarePret || ""}
                onChange={handleChangePret}
                className="bg-slate-600 py-1 rounded-md text-gray-100 w-28"></input>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                %
              </span>
            </div>
          </div>
        );
      case "negarantat":
        return (
          <div className="flex items-center justify-center py-10 gap-x-2">
            <span className="text-gray-100 ">Valoare comision</span>
            <div className="relative">
              <input
                type="number"
                id="negarantat"
                value={valoarePret || ""}
                onChange={handleChangePret}
                className="bg-slate-600 py-1 rounded-md text-gray-100 w-28"></input>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                %
              </span>
            </div>
          </div>
        );
      case "custom":
        return (
          <div className="flex flex-col items-center justify-center py-10 gap-y-3 gap-x-2">
            <span className="text-gray-100 ">
              Descriere mod de dobandire a comisionului
            </span>
            <textarea
              type="number"
              id="custom"
              value={valoarePret || ""}
              onChange={handleChangePret}
              className="bg-slate-600 py-1 rounded-md text-gray-100 w-full max-h-[350px]"
              rows={3}></textarea>
          </div>
        );
      default:
        return (
          <>
            <br />
            <br />
          </>
        );
    }
  }

  function renderModalitatePlata({ modalitatePlata, valoarePlata }) {
    switch (modalitatePlata) {
      case "standard":
        return (
          <span className="text-gray-100 italic">
            Intermediarul va incasa pretul de la cumparator si in baza comenzii
            isi va retine comsionul urmand a achita Beneficiarului doar pretul
            per achizitie, diminuat cu valoarea comisionului.
          </span>
        );
      case "altfel":
        return (
          <span className="text-gray-100">
            Altfel: <i>{valoarePlata}</i>
          </span>
        );
    }
  }

  function renderComision({ tipGarantie, valoarePret }) {
    console.log(pretSetat);
    switch (tipGarantie) {
      case "garantie-solida":
        return (
          <span className="text-gray-100 italic">
            <b>
              Intermediarul nu garanteaza seriozitatea si solvabilitatea
              clientului.
            </b>{" "}
            In acest caz, Intermediarul va beneficia de un comision reprezentand{" "}
            <b className="font-semibold">{`${valoarePret}%`}</b> din valoarea
            totala a tranzactiei;
          </span>
        );
      case "negarantat":
        return (
          <span className="text-gray-100 italic">
            <b>
              Intermediarul garanteaza seriozitatea si solvabilitatea
              clientului.
            </b>
            In acest caz, Intermediarul va beneficia de un comision reprezentand{" "}
            <b className="font-semibold">{`${valoarePret}%`}</b> din valoarea
            totala a tranzactiei;
          </span>
        );
      case "custom":
        return (
          <span className="text-gray-100 italic">
            Alt mod de dobandire a comisionului convenit de catre parti:{" "}
            {valoarePret}
          </span>
        );
    }
  }

  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">
          Pret si modalitati de plata
        </span>
      </div>
      {/* garantii */}
      <div className="flex flex-col gap-y-4 mt-5">
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="garantare"
            value={"garantie-solida"}
            checked={tipGarantie === "garantie-solida"}
            onChange={handleCheckChange}></input>
          <span className="text-gray-100">
            <b>
              Intermediarul nu garanteaza seriozitatea si solvabilitatea
              clientului.
            </b>{" "}
            In acest caz, Intermediarul va beneficia de un comision reprezentand
            _____ % din valoarea totala a tranzactiei;
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="garantare"
            value={"negarantat"}
            checked={tipGarantie === "negarantat"}
            onChange={handleCheckChange}></input>
          <span className="text-gray-100">
            <b>
              Intermediarul garanteaza seriozitatea si solvabilitatea
              clientului.
            </b>{" "}
            In acest caz, Intermediarul va beneficia de un comision reprezentand
            _____ % din valoarea totala a tranzactiei;
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="garantare"
            value={"custom"}
            checked={tipGarantie === "custom"}
            onChange={handleCheckChange}></input>
          <span className="text-gray-100">
            alt mod de dobandire a comisionului convenit de catre parti
          </span>
        </div>
      </div>
      {renderInput(tipGarantie)}

      {/* mod de plata */}
      <div className="flex flex-col gap-y-2">
        <div>
          <span className="text-gray-100 text-lg">
            Conform vointei partilor, comisionul va fi platit Intermediarului
            astfel:
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              name="plata"
              value={"standard"}
              checked={modalitatePlata === "standard"}
              onChange={handleCheckModalitatePlata}></input>
            <span className="text-gray-100">
              Intermediarul va incasa pretul de la cumparator si in baza
              comenzii isi va retine comsionul urmand a achita Beneficiarului
              doar pretul per achizitie, diminuat cu valoarea comisionului.
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              name="plata"
              value={"altfel"}
              checked={modalitatePlata === "altfel"}
              onChange={handleCheckModalitatePlata}></input>
            <span className="text-gray-100">Altfel</span>
          </div>
        </div>
      </div>
      {modalitatePlata === "altfel" && (
        <div className="flex flex-col items-center justify-center py-10 gap-y-3 gap-x-2">
          <span className="text-gray-100 ">
            Descriere mod de incasare a comisionului
          </span>
          <textarea
            type="number"
            id="altfel"
            onChange={handleChangeValoarePlata}
            value={valoarePlata || ""}
            className="bg-slate-600 py-1 rounded-md text-gray-100 w-full max-h-[350px]"
            rows={3}></textarea>
        </div>
      )}

      {/* sumar */}
      {!resetDisable && (
        <div className="relative flex flex-col mt-10 gap-y-4 border border-slate-500 rounded-md p-4 pt-5">
          <span className="text-gray-100 text-xl absolute px-2 -top-4 left-3 bg-slate-800">Sumar</span>
          <div>{renderComision(pretSetat)}</div>
          <div className="flex flex-col">
            <span className="text-gray-100">
              Conform vointei partilor, comisionul va fi platit Intermediarului
              astfel:
            </span>
            {renderModalitatePlata(pretSetat)}
          </div>
        </div>
      )}

      {/* butoane */}
      <div className="mt-10">
        <ButoaneControl
          numeButonReset={"Reset"}
          numeButonSet={"Seteaza valori"}
          disabledReset={resetDisable}
          disabledSet={!dataCompletion}
          setHandler={setValoriHandler}
          resetHandler={handleResetPret}
        />
      </div>
    </div>
  );
}
