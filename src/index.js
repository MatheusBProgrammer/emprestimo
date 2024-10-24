import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BankProvider } from "./contexts/BankContext";

ReactDOM.render(
  <React.StrictMode>
    <BankProvider>
      <App />
    </BankProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
