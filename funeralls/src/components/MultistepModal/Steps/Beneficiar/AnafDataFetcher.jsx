import { useEffect, useState } from "react";
import moment from "moment";
import { modifyBeneficiar, useDispatch } from "../../../../Context/reducer";
/* import { modifyBeneficiar, useDispatch } from "../../../ContractEditor"; */

export default function AnafDataFetcher() {
  const [CUI, setCUI] = useState("");

  const dispatch = useDispatch();

  function changeHandler({ target: { value } }) {
    setCUI(value);
  }

  async function fetchData() {
    try {
      const response = await fetch(/* "http://localhost:8080/anaf" */'/anaf', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cui: CUI,
        }),
      });

      if (!response || !response?.ok) throw Error("Can`t fetch data from ANAF");
      const { data } = (await response.json()) || null;
      if (!data) throw Error("Can`t parse data from ANAF");
      const { date_generale } = data[0] || {};
      const { inregistrare_scop_Tva: scpTVA = null } = data[0] || {};
      console.log(scpTVA);
      if (Object.keys(date_generale)) {
        [
          { value: "adresa", name: "sediu" },
          { value: "denumire", name: "societate" },
          { value: "nrRegCom", name: "Inmatriculare la Registrul Comertului" },
          { value: "iban", name: "Cont Bancar" },
          { value: "cui", name: "CUI" },
        ].map(({ value, name }) => {
          console.log({ nume: name, val: date_generale[value] });
          console.log(
            name === "CUI" && scpTVA
              ? "RO" + date_generale[value]
              : date_generale[value]
          );
          dispatch(
            modifyBeneficiar(
              name,
              name === "CUI" && scpTVA
                ? "RO" + date_generale[value]
                : date_generale[value]
            )
          );
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full flex justify-center gap-x-3">
      <button
        disabled={!CUI ? true : false}
        className={`px-5 py-2 rounded-md bg-blue-600/70 hover:bg-blue-600 text-gray-100 disabled:bg-blue-800 disabled:text-gray-100/40 disabled:cursor-not-allowed`}
        onClick={fetchData}>
        Adu datele de la ANAF
      </button>
      <input
        id="cui-reader"
        type="text"
        placeholder="Introduceti CUI-ul firmei"
        onChange={changeHandler}
        className="px-2 bg-[#465a7e66] text-slate-200 w-56 rounded-md focus:ring-1 focus:ring-slate-300 focus:border-slate-300 focus-visible:outline-none"></input>
    </div>
  );
}
