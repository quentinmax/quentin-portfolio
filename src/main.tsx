import "./styles/styles";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence initial={true} mode="wait">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
