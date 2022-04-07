import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App"

import {HamburgerData} from "./components/Data/Data"

ReactDOM.render(
  <React.StrictMode>
    <HamburgerData>
      <App />
    </HamburgerData>
     
  </React.StrictMode>,
  document.getElementById("root")
);
