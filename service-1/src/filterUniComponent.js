import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { UniReducer } from "./store/uniReducer";
import { GlobalStore } from "redux-micro-frontend";
import { SelectUniversity } from "./store/select.actions";

const FilterUniComponent = (props) => {
  const globalStore = GlobalStore.Get();
  const store = createStore(
    UniReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  globalStore.RegisterStore("Service1", store, [GlobalStore.AllowAll]);

  const changeSelection = (event) => {
    globalStore.DispatchAction(
      "Service1",
      SelectUniversity(event.target.value)
    );
  };

  return (
    <div>
      <h1>Form:</h1>
      <select name="" id="" onChange={(e) => changeSelection(e)}>
        <option value="" disabled selected hidden>
          Select University
        </option>
        <option value="A">University A</option>
        <option value="B">University B</option>
        <option value="C">University C</option>
      </select>
      <br></br>
      <button type="button" className="btn btn-primary">
        Primary (from bootstrap)
      </button>
    </div>
  );
};

export { FilterUniComponent };
