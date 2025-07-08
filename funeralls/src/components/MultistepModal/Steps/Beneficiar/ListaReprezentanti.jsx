/* import {
  marcheazaEditareReprezentantLegal,
  stergeReprezentant,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */

import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import {
  marcheazaEditareReprezentantLegal,
  stergeReprezentant,
  useData,
  useDispatch,
} from "../../../../Context/reducer";

export default function ListaReprezentanti() {
  const reprezentanti = Array.from(Object.values(useData("reprezentantLegal")));
  const dispatch = useDispatch();

  function handleDelete(index) {
    dispatch(stergeReprezentant(index));
    dispatch(marcheazaEditareReprezentantLegal(null, false));
  }

  function handleEdit(index) {
    dispatch(marcheazaEditareReprezentantLegal(index, true));
  }

  return (
    reprezentanti.length > 0 && (
      <div className="w-full flex flex-col text-gray-100">
        <span className="text-gray-100 px-4 py-2 text-xl">
          Reprezentanti adaugati
        </span>
        <div className="flex flex-wrap w-full bg-slate-900/50 gap-x-4 px-4">
          {reprezentanti.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-800/90 border border-slate-500 rounded-md my-2 py-2 px-3 text-lg flex items-center gap-x-4">
                {/* date personale */}
                <div className="flex flex-col">
                  <span>{`${item.titulatura} ${item.nume}`}</span>
                  <span>{`CNP ${item.CNP}`}</span>
                </div>
                {/* butoane */}
                <div className="flex gap-x-1">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-slate-800 p-[6px] rounded-sm border border-slate-600 hover:border-slate-200">
                    <FaPencilAlt size={"16px"} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-slate-800 p-[6px] rounded-sm border border-slate-600 hover:border-slate-200">
                    <FaTrashAlt size={"16px"} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
