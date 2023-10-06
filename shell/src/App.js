import React from "react";
import FilterUniComponent from "./components/FilterUniComponent";
import FeeListComponent from "./components/FeeListComponent";

const App = () => {
  const card = {
    border: "1px solid #1F778D",
    backgroundColor: "#f3fdff",
    textAlign: "center",
    padding: "20px 0px",
    color: "#1f778d",
  };
  console.log("renderring APP");
  return (
    <div style={card}>
      <FilterUniComponent></FilterUniComponent>
      <br></br>
      <FeeListComponent></FeeListComponent>
    </div>
  );
};

export default App;
