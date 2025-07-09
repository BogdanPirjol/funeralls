import InputField from "./InputField.jsx";
import AnafDataFetcher from "./AnafDataFetcher.jsx";
import { useEffect, useState } from "react";
import ReprezentantLegal from "./ReprezentantLegal.jsx";
import ListaReprezentanti from "./ListaReprezentanti.jsx";
import {
  modifyBeneficiar,
  useData,
  useDispatch,
} from "../../../../Context/reducer.js";

export default function Intermediar() {
  const beneficiarData = useData("beneficiar");
  const editareReprezentant = useData("editareReprezentantLegal");
  const dateReprezentant = useData("reprezentantLegal");
  const [dataForEdit, setDataForEdit] = useState({});

  const dispatch = useDispatch();
  const [displayFormReprezentant, setDisplayFormReprezentant] = useState(false);

  function handleCheck(e) {
    setDisplayFormReprezentant(e.target.checked);
  }

  function onChangeHandler(e) {
    dispatch(modifyBeneficiar(e.target.name, e.target.value));
  }

  /* display legal representative modal for editing one  and select data for edit*/
  useEffect(() => {
    if (editareReprezentant.isEditing) {
      setDataForEdit({
        representative: dateReprezentant[editareReprezentant?.index],
        index: editareReprezentant.index,
      });
      setDisplayFormReprezentant(true);
    } else {
      setDataForEdit({});
      setDisplayFormReprezentant(false);
    }
  }, [editareReprezentant?.isEditing, editareReprezentant?.index]);

  useEffect(()=> {
    console.log(dateReprezentant);
  }, [dateReprezentant])

  return (
    <div>
      {/* titlu */}
      <div className="text-white text-2xl border-b-[1px] border-slate-500 px-4 py-6 w-[95%] m-auto">
        Date Beneficiar
      </div>
      {/* date identificare firma */}
      <div className="grid grid-cols-2 w-full p-4 px-6 gap-y-2">
        {Object.keys(beneficiarData).map((prop, index) => {
          return (
            <InputField
              key={index}
              name={prop}
              value={beneficiarData[prop]}
              changeHandler={onChangeHandler}
            />
          );
        })}
      </div>

      {/* sincronizare data ANAF */}
      <AnafDataFetcher />
      {/* adaugare reprezentant legal */}
      <div className="flex w-[90%] items-center gap-x-2 py-6 px-4 select-none">
        <span className="text-gray-200">
          Doriti adaugarea unui reprezentant legal?
        </span>
        <input
          checked={displayFormReprezentant}
          className="cursor-pointer bg-slate-400 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
          type="checkbox"
          onChange={handleCheck}></input>
      </div>

      {/* form reprezentant legal */}
      {displayFormReprezentant && (
        <div className="w-full pb-10">
          <ReprezentantLegal
            editedReprezentantLegal={dataForEdit.representative}
            targetIndex={dataForEdit.index}
          />
        </div>
      )}

      {/* lista reprezentanti */}
      <div className="w-full">
        <ListaReprezentanti />
      </div>
    </div>
  );
}
