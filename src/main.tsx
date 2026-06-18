import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./i18n";
import "./styles.css";

const router = getRouter();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('No se encontró el elemento raíz #root');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
