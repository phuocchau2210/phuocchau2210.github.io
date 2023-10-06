import { mountFilterUni } from "service1/filterUni";
import React, { useEffect, useRef } from "react";

const FilterUniComponent = () => {
  console.log("running filterUni");
  const ref = useRef(null);

  useEffect(() => {
    mountFilterUni(ref.current);
  });

  return <div ref={ref}></div>;
};

export default FilterUniComponent;
