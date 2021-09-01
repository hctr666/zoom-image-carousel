import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Sample from "./Sample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Sample />
  </StrictMode>,
  rootElement
);
