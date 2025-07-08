import { useState } from "react";
import Beneficiar from "./Steps/Beneficiar/Beneficiar";
import { Link, Route, useNavigate } from "react-router";
import ComisionIntermediar from "./Steps/Comision/ComisionItermediar";
import Servicii from "./Steps/Servicii&Produse/Servicii";
import TermenIndeplinireContract from "./Steps/TermenIndeplinireContract/TermenIndeplinireContract";
import ComisionPublicitate from "./Steps/ComisionPublicitate/ComisionPublicitate";
import IncasareComision from "./Steps/IncasareComision/IncasareComision";
import DurataContract from "./Steps/DurataContract/DurataContract";
import ComisionPlatforma from "./Steps/ComisionPlatforma/ComisionPlatforma";
import Pret from "./Steps/Pret/Pret";
import FinalPage from "./Steps/FinalPage/FinalPage";

export default function Stepper() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  function renderStep(step) {
    switch (step) {
      case 1:
        return <Beneficiar />;
      case 2:
        return <ComisionIntermediar />;
      case 3:
        return <Servicii />;
      case 4:
        return <TermenIndeplinireContract />;
      case 5:
        return <ComisionPlatforma />;
      case 6:
        return <ComisionPublicitate />;
      case 7:
        return <DurataContract />;
      case 8:
        return <Pret />;
      case 9:
        return <IncasareComision />;
      case 10:
        return <FinalPage />;
    }
  }

  return (
    <>
      <div
        id="stepper"
        className="w-[80%] max-w-[900px] min-h-[50dvh] max-h-[90dvh] bg-slate-800 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between gap-y-5 overflow-y-auto rounded-md">
        {/* Step to display */}
        {renderStep(step)}
        {/* navigation button */}
        <div className="w-full flex justify-between items-center h-20 px-10 mb-10">
          <button
            disabled={step - 1 <= 0}
            onClick={handlePrevStep}
            id="back-button"
            className="px-10 py-3 bg-slate-600 text-white rounded-md  hover:bg-slate-500 disabled:bg-slate-600/50 disabled:text-gray-100/50 disabled:cursor-not-allowed">
            Inapoi
          </button>
          <button
            /* onClick={handleNextStep} */
            onClick={handleNextStep}
            disabled={step + 1 >= 11}
            id="forward-button"
            className="px-10 py-3 bg-slate-600 text-white rounded-md hover:bg-slate-500 hover:cursor-pointer disabled:bg-slate-600/50 disabled:text-gray-100/50 disabled:cursor-not-allowed">
            Urmatorul
          </button>
        </div>
      </div>
    </>
  );
}
