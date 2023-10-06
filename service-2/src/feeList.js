import React, { useEffect, useState } from "react";
import { GlobalStore } from "redux-micro-frontend";
import { getFeeTypes } from "./services/fee";
import Button from "@material-ui/core/button";

const App = (props) => {
  const [feeType, setFeeType] = useState([]);
  const [select, setSelect] = useState("");
  const globalStore = GlobalStore.Get(false);
  globalStore.SubscribeToGlobalState("Service2", (globalState) =>
    updateState(globalState)
  );

  const updateState = (globalState) => {
    console.log("new state");
    setSelect(globalState.Service1.select);
  };

  useEffect(() => {
    if (select !== "") {
      getFeeTypes(select).then((res) => {
        setFeeType(res);
      });
    }
  }, [select]);

  return (
    <div>
      <h1>Fee Type:</h1>
      <p>The fee types will be listed here.</p>
      <div>
        {feeType.map((type) => (
          <div key={type}>{type}</div>
        ))}
      </div>
      <Button variant="contained" color="primary">
        Hello World (using mui4)
      </Button>
    </div>
  );
};

export { App };
