import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import PracticeTypeScript from "./PracticeTypescript.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <PracticeTypeScript />
    </BrowserRouter>
  </StrictMode>,
);
