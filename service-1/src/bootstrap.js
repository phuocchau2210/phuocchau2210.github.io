import React from "react";
import { render } from "react-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { FilterUniComponent } from "./filterUniComponent";

const renderElemement = document.getElementById("service-1-app");
const mountFilterUni = (el) => {
  render(<FilterUniComponent />, el);
};

if (renderElemement) {
  mountFilterUni(renderElemement);
}

// export { mountFilterUni };

export default mountFilterUni;
