import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ModalContainer from "./components/MultistepModal/ModalContainer";
import ContractPreview from "./components/PreviewContract/ContractPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModalContainer />,
  },
  {
    path: "/preview",
    element: <ContractPreview />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
