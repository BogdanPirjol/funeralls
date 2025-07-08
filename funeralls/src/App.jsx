import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ModalContainer from "./components/MultistepModal/ModalContainer";
import ContractPdf from "./components/PreviewContract/ContractPdf";
import ContractPreview from "./components/PreviewContract/ContractPreview";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <ModalContainer />,
  },
  {
    path: "/preview",
    element: <ContractPreview />,
  },
  {
    path: "/pdf",
    element: <ContractPdf />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
