import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import i18n from "./i18n";
import "./styles.css";

const router = getRouter();
const rootElement = document.getElementById("root")!;

function mount() {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

if (i18n.isInitialized) {
  mount();
} else {
  i18n.on("initialized", () => mount());
}
