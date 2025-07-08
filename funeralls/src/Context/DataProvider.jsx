import { useReducer } from "react";
import { dataReducer, dataStore } from "./reducer";
import { DataContext } from "./DataContext";
import { DispatchContext } from "./DispatchContext";

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, dataStore);

  return (
    <DataContext.Provider value={data}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </DataContext.Provider>
  );
}
