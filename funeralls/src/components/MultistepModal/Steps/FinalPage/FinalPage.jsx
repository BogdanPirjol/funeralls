import { useState } from "react";
import { useStore } from "../../../../Context/reducer";
import ButoaneControl from "../UI/ButoaneControl";
import { Spinner } from "flowbite-react";

export default function FinalPage() {
  const contractData = useStore();
  const [isLoading, setIsLoading] = useState(false);
  function handlePrevizaualizare() {
    localStorage.setItem("contract-data", JSON.stringify(contractData));
    window.open("/preview", "_blank");
  }

  async function handleGenerarePdf() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contractData),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "raport.pdf";
      link.click();
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  return (
    <div className="relative px-6 py-2">
      {/* loading modal */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-800/70 flex items-center justify-center flex-col gap-y-4">
          <Spinner size="xl" />
          <span className="text-gray-50 text-lg">
            Documentul PDF se genereaza. Va rugam asteptati!
          </span>
        </div>
      )}
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
          numeButonReset={"Genereaza PDF"}
          setHandler={handlePrevizaualizare}
          resetHandler={handleGenerarePdf}
        />
      </div>
    </div>
  );
}
