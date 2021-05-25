import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ContextProvider } from "./components/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
