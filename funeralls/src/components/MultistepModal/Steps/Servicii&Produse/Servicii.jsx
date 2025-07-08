import { useEffect, useRef, useState } from "react";
/* import {
  adaugaProdus,
  editeazaProdus,
  stergeProdus,
  useData,
  useDispatch,
} from "../../../ContractEditor"; */
import { IoIosArrowDown } from "react-icons/io";
import { adaugaProdus, editeazaProdus, stergeProdus, useData, useDispatch } from "../../../../Context/reducer";

export default function Servicii() {
  const [listaProduse, setListaProduse] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const produse = Array.from(Object.values(useData("produseSiServicii")));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState({
    denumire: "",
    descriere: "",
  });
  const [syncData, setSyncData] = useState(false);

  useEffect(() => {
    setListaProduse(produse);
  }, [produse.length]);
  useEffect(() => {
    if (syncData) {
      setListaProduse(produse);
      setSyncData(false);
    }
  }, [syncData]);

  const dispatch = useDispatch();

  function handleChangeProduct(e) {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleAddProduct() {
    dispatch(adaugaProdus(product));
    setProduct({
      denumire: "",
      descriere: "",
    });
  }

  function handleSaveEdit() {
    if (isEditing !== null) {
      dispatch(editeazaProdus(isEditing, product));
      setProduct({ denumire: "", descriere: "" });
      setIsEditing(null);
      setSelectedProduct(null);
      setSyncData(true);
    }
  }

  const [isExpanded, setIsExpanded] = useState(null);

  function handleExpandDescription(index, e) {
    e.stopPropagation();
    return setIsExpanded((prev) => (prev === index ? null : index));
  }

  const testRef = useRef(null);
  const [showButton, setShowButton] = useState([]);
  useEffect(() => {
    const el = testRef.current;
    if (el) {
      if (el.scrollWidth > el.clientWidth)
        setShowButton((prev) => [...prev, el.id]);
      console.log(el.scrollWidth, el.clientWidth, el.id);
    }
  }, [listaProduse]);

  function handleEditProduct() {
    setIsEditing(selectedProduct);
    setProduct(listaProduse[selectedProduct]);
  }

  function handleDelete() {
    if (selectedProduct !== null) {
      dispatch(stergeProdus(selectedProduct));
      setSelectedProduct(null);
      
    }
  }

  return (
    <div className="px-6">
      {/* title */}
      <div className="border-b border-slate-500 py-5">
        <span className="text-white text-2xl pl-3">Servicii si Produse</span>
      </div>

      {/* add area */}
      <div className="relative m-auto border border-slate-500 p-5 mt-10 rounded-md w-full">
        <span className="text-gray-100 absolute left-2 -top-4 px-3 text-lg bg-slate-800">
          Adaugare servicii si produse
        </span>
        <div className="flex flex-col items-center gap-y-3">
          <div className="grid grid-cols-2 w-full">
            <span className="text-gray-100">Denumire produs/serviciu*</span>
            <input
              type="text"
              name="denumire"
              value={product.denumire}
              onChange={handleChangeProduct}
              className="py-1 bg-slate-600 text-gray-100 rounded-md"></input>
          </div>
          <div className="grid grid-cols-2 w-full">
            <span className="text-gray-100">Descriere</span>
            <textarea
              name="descriere"
              value={product.descriere}
              onChange={handleChangeProduct}
              rows={3}
              cols={80}
              disabled={!product.denumire}
              className="max-w-full max-h-[350px] min-h-[75px] bg-slate-600 text-gray-100 rounded-md disabled:text-gray-100/50"></textarea>
          </div>
          <button
            onClick={isEditing !== null ? handleSaveEdit : handleAddProduct}
            disabled={!product.denumire}
            className="bg-slate-600/75 hover:bg-slate-600 rounded-sm disabled:bg-slate-600/50 disabled:text-gray-100/50 text-gray-100 px-5 py-1 text-lg mt-8 disabled:cursor-not-allowed">
            {isEditing !== null ? "Salveaza" : "Adauga"}
          </button>
        </div>
      </div>

      {/* lista servicii si produse adaugate */}
      <div className="relative mt-10 border border-slate-500 rounded-md py-5 w-full m-auto flex flex-col gap-y-5">
        <span className="text-gray-100 absolute -top-4 bg-slate-800 px-3 text-lg left-2">
          Lista servicii si produse
        </span>
        <div className="flex flex-col gap-y-2 w-full">
          {/* lista scrollabila */}
          {listaProduse.map((produs, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (isEditing !== null) {
                    if (index === isEditing) {
                      setIsEditing(null);
                      setProduct({
                        denumire: "",
                        descriere: "",
                      });
                    }
                  }
                  setSelectedProduct((prev) => (prev === index ? null : index));
                }}
                className={`text-gray-100 border hover:cursor-pointer text-nowrap border-slate-600 mx-5 flex gap-x-5 py-3 rounded-md px-2 ${
                  index === selectedProduct
                    ? "border-blue-600 bg-slate-700"
                    : "border-slate-600"
                }`}>
                <span>{produs.denumire}</span>
                <span>---</span>
                <span
                  ref={testRef}
                  id={`descriere-${index}`}
                  className={`${
                    isExpanded === index
                      ? "text-wrap"
                      : "whitespace-nowrap overflow-hidden text-ellipsis"
                  }`}>
                  {produs.descriere}
                </span>
                {showButton.includes(`descriere-${index}`) && (
                  <button
                    onClick={(e) => handleExpandDescription(index, e)}
                    className="self-center bg-slate-600/80 p-1 rounded-md hover:bg-slate-600 hover: cursor-pointer">
                    <IoIosArrowDown
                      className={`${
                        isExpanded === index ? "rotate-180" : "rotate-0"
                      }`}
                      size={"18px"}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {/* butoane de control */}
        <div className="flex gap-x-3 justify-center">
          <button
            disabled={selectedProduct === null}
            onClick={handleEditProduct}
            className="bg-slate-600/80 hover:bg-slate-600 disabled:bg-slate-500/50 disabled:text-gray-100/50 disabled:cursor-not-allowed px-4 py-1 text-gray-100 rounded-sm">
            Editeaza
          </button>
          <button
            onClick={handleDelete}
            disabled={selectedProduct === null}
            className="bg-red-600/80 hover:bg-red-600 hover:text-white disabled:bg-red-600/50 disabled:text-gray-100/50 disabled:cursor-not-allowed px-4 py-1 text-gray-50 rounded-sm">
            Sterge
          </button>
        </div>
      </div>
    </div>
  );
}
