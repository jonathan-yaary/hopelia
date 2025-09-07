import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Home from "./components/home/Home";
import Cocktails from "./components/cocktails/Cocktails";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.VITE_BASE_URL} element={<App />} />
        <Route path={import.meta.env.VITE_BASE_URL + "home"} element={<Home />} />
        <Route path={import.meta.env.VITE_BASE_URL + "cocktails"} element={<Cocktails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
