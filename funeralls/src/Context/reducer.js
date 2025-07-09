import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "./DataContext";
import { DispatchContext } from "./DispatchContext";

export function dataReducer(data, { type, payload }) {
  switch (type) {
    case "modify data":
      return {
        ...data,
        [payload.sliceName]: {
          ...data[payload.sliceName],
          [payload.propertyName]: payload.propertyValue,
        },
      };
    case "adauga reprezentant legal":
      return {
        ...data,
        reprezentantLegal: [...data.reprezentantLegal, payload],
      };
    case "sterge reprezentant legal":
      const filtered = data.reprezentantLegal.filter((_, currentIndex) => {
        console.log(payload, currentIndex);
        return payload !== currentIndex;
      });
      return {
        ...data,
        reprezentantLegal: [...filtered],
      };
    case "marcheaza editare reprezentant legal":
      return {
        ...data,
        editareReprezentantLegal: {
          index: payload.index,
          isEditing: payload.state,
        },
      };
    case "editeaza reprezentant legal":
      const oldRepresentatives = data.reprezentantLegal?.filter(
        (_value, currentIndex) => {
          return currentIndex !== payload.index;
        }
      );
      return {
        ...data,
        reprezentantLegal: [...oldRepresentatives, { ...payload.data }],
      };

    case "editeaza comision intermediar":
      return {
        ...data,
        comisionIntermediar: {
          value: payload.value || null,
        },
      };

    case "adauga produs/serviciu":
      return {
        ...data,
        produseSiServicii: [...data.produseSiServicii, payload],
      };

    case "editeaza produs/serviciu":
      const originalProducts = data.produseSiServicii;
      originalProducts[payload.index] = payload.product;
      return {
        ...data,
        produseSiServicii: [...originalProducts],
      };

    case "sterge serviciu":
      const remainingProducts = data.produseSiServicii.filter(
        (_item, currentIndex) => currentIndex !== payload.targetIndex
      );
      console.log({ remainingProducts });
      return {
        ...data,
        produseSiServicii: [...remainingProducts],
      };
    case "editare termen indeplinire contract":
      return {
        ...data,
        termenOnorareContract: payload,
      };
    case "editare comision publicitate":
      return {
        ...data,
        comisionPublicitate: payload,
      };
    case "editare termen incasare comision":
      console.log({ payload });
      return {
        ...data,
        termenIncasareComision: {
          value: payload,
        },
      };
    case "editeaza durata contract":
      return {
        ...data,
        durataContract: {
          dataStart: payload.dataStart,
          dataFinal: payload.dataFinal,
          prelungire: {
            unitateDeMasura: payload?.prelungire?.unitOfMeasure,
            cantitate: payload?.prelungire?.quantity,
          },
        },
      };

    case "editeaza procent platforma":
      return {
        ...data,
        comisionPlatforma: {
          value: payload,
        },
      };
    case "editeaza pret si modalitati de plata":
      return {
        ...data,
        pretSiModalitatiDePlata: payload,
      };
    default:
      return data;
  }
}

const idV4 = uuidv4();

export const dataStore = {
  beneficiar: {
    societate: "",
    sediu: "",
    "Inmatriculare la Registrul Comertului": "",
    CUI: "",
    "Cont Bancar": "",
    banca: "",
    sucursala: "",
    telefon: "",
    email: "",
  },
  reprezentantLegal: [],
  editareReprezentantLegal: {
    index: null,
    isEditing: false,
  },
  comisionIntermediar: {
    value: null,
  },
  produseSiServicii: [],
  termenOnorareContract: null,
  comisionPublicitate: null,
  termenIncasareComision: null,
  durataContract: null,
  comisionPlatforma: "",
  pretSiModalitatiDePlata: null,
  id: idV4,
};

export const modifyBeneficiar = (propertyName, propertyValue) => {
  return {
    type: "modify data",
    payload: {
      sliceName: "beneficiar",
      propertyName: propertyName,
      propertyValue: propertyValue,
    },
  };
};

export const adaugaReprezentantLegal = (payload) => {
  return {
    type: "adauga reprezentant legal",
    payload,
  };
};

export const stergeReprezentant = (payload) => {
  return {
    type: "sterge reprezentant legal",
    payload,
  };
};

export const marcheazaEditareReprezentantLegal = (index, state) => {
  return {
    type: "marcheaza editare reprezentant legal",
    payload: {
      index,
      state,
    },
  };
};

export const editeazaReprezentantLegal = (index, data) => {
  return {
    type: "editeaza reprezentant legal",
    payload: {
      index,
      data,
    },
  };
};

export const editeazaComisionIntermediar = (value) => {
  return {
    type: "editeaza comision intermediar",
    payload: {
      value,
    },
  };
};

export const adaugaProdus = (payload) => {
  return {
    type: "adauga produs/serviciu",
    payload,
  };
};

export const editeazaProdus = (index, produs) => {
  return {
    type: "editeaza produs/serviciu",
    payload: { index: index, product: produs },
  };
};

export const stergeProdus = (index) => {
  return {
    type: "sterge serviciu",
    payload: {
      targetIndex: index,
    },
  };
};

export const editareTermenIndeplinireContract = (payload) => {
  return {
    type: "editare termen indeplinire contract",
    payload,
  };
};

export const editareComisionPublicitate = (payload) => {
  return {
    type: "editare comision publicitate",
    payload: payload,
  };
};

export const editareTermenIncasareComision = (payload) => {
  return {
    type: "editare termen incasare comision",
    payload: payload,
  };
};

export const editareDurataContract = (payload) => {
  return {
    type: "editeaza durata contract",
    payload: payload,
  };
};

export const editeazaComisionPlatforma = (payload) => {
  return {
    type: "editeaza procent platforma",
    payload: payload,
  };
};

export const editeazaPretSiPlata = (payload) => {
  return {
    type: "editeaza pret si modalitati de plata",
    payload: payload,
  };
};

// hooks
export const useData = (sliceName) => {
  const data = useContext(DataContext);
  return {
    ...data[sliceName],
  };
};

export const useDispatch = () => {
  return useContext(DispatchContext);
};

export const useStore = () => {
  const data = useContext(DataContext);
  return data;
};
