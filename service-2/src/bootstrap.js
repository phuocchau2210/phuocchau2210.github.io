import React from "react";
import { render } from "react-dom";
import { App } from "./feeList";

const renderElemement = document.getElementById("service-2-app");

const mountFeeList = (el) => {
  render(<App />, el);
};

if (renderElemement) {
  mountFeeList(renderElemement);
}

// export { mountFeeList };
export default mountFeeList;
