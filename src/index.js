// eslint-disable-next-line no-unused-vars
import style from "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import CsrfProvider from "./components/csrf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <CsrfProvider>
      <App />
    </CsrfProvider>
  </HashRouter>
);
