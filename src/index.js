import React from "react";
import Rout from "./Rout";

import dotenv from "dotenv"

import ReactDOM from "react-dom";

dotenv.config()
ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById("root")
);
