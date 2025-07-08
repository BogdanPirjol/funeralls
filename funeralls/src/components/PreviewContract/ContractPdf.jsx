import { useEffect, useState } from "react";

export default function ContractPdf() {
  const [reqSent, setReqSent] = useState(false);
  const contractData = localStorage.getItem("contract-data");

  const parsedData = JSON.parse(contractData);

  const { beneficiar, reprezentantLegal } = parsedData;
  async function genPdf() {
    const response = await fetch("http://localhost:8080/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "raport.pdf";
    link.click();
    setReqSent(true);
  }

  useEffect(() => {
    setTimeout(() => {
      genPdf();
    }, 1000);
  }, []);

  function renderReprezentantiLegal(repLegArr) {
    return repLegArr.map((repLegal, index, arr) => {
      return (
        <>
          <div className="flex flex-col">
            <span>
              {repLegal.titulatura} {repLegal.nume}
            </span>
            <span>în calitate de: {repLegal.calitate}</span>
            <span>
              identificat(ă) prin: {"plm"} seria {repLegal.serie} numar{" "}
              {repLegal.numar}
            </span>
            <span>
              Telefon {"hardcode"} email {"hardcode"}
            </span>
            <span>identificat(ă) prin: CNP {repLegal.CNP}</span>
          </div>
          {index + 1 < arr.length && (
            <div className="flex self-start">
              <span>și</span>
            </div>
          )}
        </>
      );
    });
  }
  return (
    <div className="p-10 font-serif max-w-[800px] m-auto bg-gray-200 border-slate-400 shadow-md mt-10">
      <div className="flex flex-col items-center p-10">
        {/* titlu contract */}
        <div className="flex flex-col items-center gap-y-3">
          <span className="uppercase text-2xl font-semibold">
            contract de intermediere
          </span>
          <span className="uppercase text-xl font-semibold text-center">
            -promovare, vânzare produse și servicii funerare on-line-
          </span>
          <span className="font-semibold text-center">
            Nr. înregistrare_____________/________
          </span>
        </div>
      </div>
      {/* cap I */}
      <div className="flex flex-col gap-y-4">
        {/* titlu capitol */}
        <div className="flex flex-col gap-y-3">
          <span className="text-xl uppercase font-semibold">
            cap. i părtile contractante
          </span>
          <span>Art. 1 Intermediarul si Beneficiarul</span>
        </div>
        {/* intermediar */}
        <div className="flex gap-x-8 ">
          <div>
            <span>(1)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">
              Societatea {beneficiar.societate},
            </span>
            <span className="font-semibold">Sediul {beneficiar.sediu},</span>
            <span className="font-semibold">
              Înmatriculare la Oficiul Registrul Comertului{" "}
              {beneficiar["Inmatriculare la Registrul Comertului"]},
            </span>
            <span className="font-semibold">
              Cod Unic de Înregistrare/Cod Fiscal {beneficiar.CUI},
            </span>
            <span className="font-semibold">
              Cont bancar nr. {beneficiar["Cont Bancar"]},
            </span>
            <span className="font-semibold">Banca {beneficiar.banca},</span>
            <span className="font-semibold">
              Sucursala {beneficiar.sucursala},
            </span>
            <span className="font-semibold">Telefon {beneficiar.telefon},</span>
            <span className="font-semibold">email {beneficiar.email},</span>
            <span>reprezentata legal de </span>
            <div className="flex flex-col items-end">
              {renderReprezentantiLegal(reprezentantLegal)}
            </div>
            <span className="pt-5">
              în calitate de <b className="uppercase">intermediar</b>, denumită
              în continuare în prezentul contract <b>Intermediar</b>, și
            </span>
          </div>
        </div>

        {/* beneficiar */}
        <div className="flex gap-x-8 ">
          <div>
            <span>(1)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">
              Societatea {beneficiar.societate},
            </span>
            <span className="font-semibold">Sediul {beneficiar.sediu},</span>
            <span className="font-semibold">
              Înmatriculare la Oficiul Registrul Comertului{" "}
              {beneficiar["Inmatriculare la Registrul Comertului"]},
            </span>
            <span className="font-semibold">
              Cod Unic de Înregistrare/Cod Fiscal {beneficiar.CUI},
            </span>
            <span className="font-semibold">
              Cont bancar nr. {beneficiar["Cont Bancar"]},
            </span>
            <span className="font-semibold">Banca {beneficiar.banca},</span>
            <span className="font-semibold">
              Sucursala {beneficiar.sucursala},
            </span>
            <span className="font-semibold">Telefon {beneficiar.telefon},</span>
            <span className="font-semibold">email {beneficiar.email},</span>
            <span>reprezentata legal de </span>
            <div className="flex flex-col items-end">
              {renderReprezentantiLegal(reprezentantLegal)}
            </div>
            <span className="pt-5">
              în calitate de <b className="uppercase">beneficiar</b>, denumită
              în continuare în prezentul contract <b>Beneficiar</b>, având ca
              temei legal legislația română în materie în vigoare, au convenit
              încheierea prezentului contract, cu respectarea următoarelor
              clauze
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
