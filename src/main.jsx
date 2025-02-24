import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffees from "./components/AddCoffees.jsx";
import UpdateCoffees from "./components/UpdateCoffees.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "addCoffees",
    element: <AddCoffees />,
  },
  {
    path: "updateCoffees/:id",
    element: <UpdateCoffees />,
    loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
