import { useNavigate } from "react-router";
import { useStore } from "../../../../Context/reducer";
import ButoaneControl from "../UI/ButoaneControl";

export default function FinalPage() {
  const contractData = useStore();
  const navigate = useNavigate();
  function handlePrevizaualizare() {
    localStorage.setItem("contract-data", JSON.stringify(contractData));
    navigate("/preview");
  }
  return (
    <div className="px-6 py-2">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">
          Previzualizare Contract si Generare PDF
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center m-auto h-20">
        <ButoaneControl
          disabledReset={false}
          disabledSet={false}
          numeButonSet={"Previzualizeaza Contract"}
          setHandler={handlePrevizaualizare}
          numeButonReset={"Genereaza PDF"}
        />
      </div>
    </div>
  );
}
