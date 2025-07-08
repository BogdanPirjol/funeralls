import { Datepicker } from "flowbite-react";
import ButoaneControl from "../UI/ButoaneControl";
import { useState } from "react";
import moment from "moment";
import { editareDurataContract, useData, useDispatch } from "../../../../Context/reducer";
/* import {
  editareDurataContract,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */

const datePickerTheme = {
  root: {
    base: "relative",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
    },
    header: {
      base: "",
      title:
        "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-primary-300",
        today:
          "bg-primary-700 text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title:
          "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-primary-700 text-white hover:bg-primary-600",
          disabled:
            "dark:text-gray-100/50 dark:hover:bg-gray-700 hover:cursor-default",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-primary-700 text-white hover:bg-primary-600",
          disabled:
            "dark:text-gray-100/50 dark:hover:bg-gray-700 hover:cursor-default",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-primary-700 text-white hover:bg-primary-600",
          disabled:
            "dark:text-gray-100/50 dark:hover:bg-gray-700 hover:cursor-default",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-primary-700 text-white hover:bg-primary-600",
          disabled:
            "dark:text-gray-100/50 dark:hover:bg-gray-700 hover:cursor-default",
        },
      },
    },
  },
};

export default function DurataContract() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [prelungire, setPrelungire] = useState(null);
  const [unitOfTime, setUnitOfTime] = useState("---");

  const dispatch = useDispatch();
  const dateSetate = useData("durataContract");

  function handleStartDateChange(date) {
    setStartDate(moment(date).format("DD/MM/YYYY"));
  }

  function handleEndDateChange(date) {
    setEndDate(moment(date).format("DD/MM/YYYY"));
  }

  function handlePrelungire(e) {
    setPrelungire(e.target.value);
  }

  function handleUnitOfTimeChange(e) {
    setUnitOfTime(e.target.value);
  }

  function handleSet() {
    dispatch(
      editareDurataContract({
        dataStart: startDate?.toString() || "",
        dataFinal: endDate?.toString() || "",
        prelungire: {
          unitOfMeasure: unitOfTime,
          quantity: prelungire,
        },
      })
    );
  }

  function handleReset() {
    dispatch(editareDurataContract({}));
    setStartDate(null);
    setEndDate(null);
    setPrelungire(null);
    setUnitOfTime("---");
  }

  return (
    <div className="px-6 py-2  min-h-[50dvh]">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">Durata Contractului</span>
      </div>
      {/* field descriptor */}
      <div className="mt-4">
        <span className="text-lg text-gray-100 italic">
          Prezentul contract se incheie incapand cu data de{" "}
          {dateSetate.dataStart
            ? dateSetate.dataStart
            : `__/__/____
          (zz/ll/aaaa)`}{" "}
          si se desfasoara pana la data de{" "}
          {dateSetate.dataFinal
            ? dateSetate.dataFinal
            : `__/__/___ (zz/ll/aaaa)`}
          . Cu 30 de zile lucratoare inainte de expirarea valabiliatii
          prezentului contract, partile vor decide in scris asupra prelungirii
          sale cu inca{" "}
          {(dateSetate?.prelungire?.cantitate &&
          dateSetate?.prelungire?.unitateDeMasura)
            ? `${dateSetate?.prelungire?.cantitate} ${dateSetate?.prelungire?.unitateDeMasura}`
            : `____ (se vor trece, conform intelegerii, zile, luni,
          ani)`}
          .
        </span>
      </div>

      {/* value setter */}
      <div className="relative border border-slate-600 p-10 mt-10 rounded-md">
        {/* title */}
        <span className="text-gray-100 absolute -top-4 text-lg left-3 bg-slate-800 px-3">
          Editeaza data
        </span>
        {/* value area */}
        <div className="flex flex-wrap gap-y-4 gap-x-3 justify-center">
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-200 text-lg">Data inceput</span>
            <Datepicker
              language="ro"
              labelTodayButton="Astazi"
              labelClearButton="Sterge"
              onChange={handleStartDateChange}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-200 text-lg">Data finalizare</span>
            <Datepicker
              language="ro"
              labelTodayButton="Astazi"
              labelClearButton="Sterge"
              onChange={handleEndDateChange}
              minDate={new Date(moment(startDate, "DD/MM/YYYY"))}
              value={endDate ? new Date(moment(endDate, 'DD/MM/YYYY')): null}
              theme={datePickerTheme}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-200 text-lg">Durata prelungire</span>
            <div className="flex items-center">
              <select
                value={unitOfTime}
                onChange={handleUnitOfTimeChange}
                className="bg-gray-700 text-gray-100 rounded-md rounded-r-none">
                <option value={"---"} className="hidden" disabled></option>
                <option value="zile">Zile</option>
                <option value="luni">Luni</option>
                <option value="ani">Ani</option>
              </select>
              <input
                type="number"
                onChange={handlePrelungire}
                value={prelungire || ""}
                className="bg-gray-700 py-2 rounded-r-md border-l-transparent w-36 text-gray-100"></input>
            </div>
          </div>
        </div>
        {/* action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center">
          <ButoaneControl
            numeButonSet={"Seteaza Date"}
            numeButonReset={"Reseteaza Date"}
            setHandler={handleSet}
            resetHandler={handleReset}
            disabledReset={false}
            disabledSet={false}
          />
        </div>
      </div>
    </div>
  );
}
