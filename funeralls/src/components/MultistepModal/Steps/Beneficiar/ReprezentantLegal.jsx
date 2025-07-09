import { useEffect, useState } from "react";
import InputField from "./InputField";
import {
  adaugaReprezentantLegal,
  editeazaReprezentantLegal,
  marcheazaEditareReprezentantLegal,
  useData,
  useDispatch,
} from "../../../../Context/reducer";

export default function ReprezentantLegal({
  editedReprezentantLegal,
  targetIndex,
}) {
  const formatedEditedRepresentant =
    Object.keys(editedReprezentantLegal || {}).length > 0
      ? {
          ...editedReprezentantLegal,
          titulatura: {
            options: ["---", "Domnul", "Doamna"],
            value: editedReprezentantLegal?.titulatura,
          },
          identificare: {
            options: ["---", "C/I", "B/I"],
            value: editedReprezentantLegal?.identificare,
          },
        }
      : {
          titulatura: {
            options: ["---", "Domnul", "Doamna"],
            value: "---",
          },
          nume: "",
          calitate: "",
          identificare: {
            options: ["---", "C/I", "B/I"],
            value: "---",
          },
          serie: "",
          numar: "",
          CNP: "",
        };
  const [reprezentantLegal, setReprezentantLegal] = useState(
    formatedEditedRepresentant
  );

  useEffect(() => {
    setReprezentantLegal(formatedEditedRepresentant);
  }, [editedReprezentantLegal]);

  const dispatch = useDispatch();

  function onChangeHandler(e) {
    console.log(e.target.name, e.target.value);
    if (["identificare", "titulatura"].includes(e.target.name))
      return setReprezentantLegal((prev) => {
        return {
          ...prev,
          [e.target.name]: {
            ...prev[e.target.name],
            value: e.target.value,
          },
        };
      });
    setReprezentantLegal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleAddRepresentative() {
    const titulatura = reprezentantLegal.titulatura.value;
    const identificare = reprezentantLegal.identificare.value;

    dispatch(
      adaugaReprezentantLegal({
        ...reprezentantLegal,
        titulatura: titulatura,
        identificare: identificare,
      })
    );
    setReprezentantLegal({
      titulatura: {
        options: ["---", "Domnul", "Doamna"],
        value: "",
      },
      nume: "",
      calitate: "",
      identificare: {
        options: ["---", "C/I", "B/I"],
        value: "",
      },
      serie: "",
      numar: "",
      CNP: "",
    });
  }

  function handleDiscardChanges() {
    dispatch(marcheazaEditareReprezentantLegal(null, false));
  }

  function handleSubmitChanges() {
    const titulatura = reprezentantLegal.titulatura.value;
    const identificare = reprezentantLegal.identificare.value;
    dispatch(
      editeazaReprezentantLegal(targetIndex, {
        ...reprezentantLegal,
        titulatura: titulatura,
        identificare: identificare,
      })
    );
    handleDiscardChanges();
  }

  const [editMode, setEditMode] = useState(false);
  const editState = useData("editareReprezentantLegal");
  useEffect(() => {
    if (editState?.isEditing) return setEditMode(true);
    return setEditMode(false);
  }, [editState?.isEditing]);

  return (
    <div className="flex flex-col gap-y-10 items-center">
      <div className="grid grid-cols-2 w-full px-6 gap-y-2">
        {Object.keys(reprezentantLegal).map((item) => {
          const inputType =
            typeof reprezentantLegal[item] === "object" ? "option" : "text";
          return (
            <InputField
              name={item}
              value={
                inputType === "option"
                  ? reprezentantLegal[item].value
                  : reprezentantLegal[item]
              }
              changeHandler={onChangeHandler}
              inputType={inputType}
              options={
                inputType === "option" && reprezentantLegal[item].options
              }
            />
          );
        })}
      </div>
      <div className="flex w-full justify-center">
        {editMode ? (
          <div className="flex justify-center gap-x-4 w-full">
            <button
              onClick={handleSubmitChanges}
              className="bg-slate-600/50 text-gray-100 py-2 px-4 rounded-md hover:bg-slate-600"
            >
              Modifica Reprezentant Legal
            </button>
            <button
              onClick={handleDiscardChanges}
              className="bg-red-600/80 text-gray-100 py-2 px-4 rounded-md hover:bg-red-600"
            >
              Renunta la modifcari
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddRepresentative}
            className="bg-slate-600/50 text-gray-100 py-2 px-4 rounded-md hover:bg-slate-600"
          >
            {" "}
            Adauga Reprezentant Legal
          </button>
        )}
      </div>
    </div>
  );
}
