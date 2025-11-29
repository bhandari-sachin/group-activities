import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppWithCustomHook from "./AppWithCustomHook.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithCustomHook />
    <App />
  </StrictMode>
);
