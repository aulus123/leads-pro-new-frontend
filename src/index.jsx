import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Services } from "./screens/Services";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Services />
  </StrictMode>,
);
