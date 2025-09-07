import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./components/home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.VITE_BASE_URL} element={<App />} />
        <Route path={import.meta.env.VITE_BASE_URL + "home"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
