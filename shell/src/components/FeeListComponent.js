import { mountFeeList } from "service2/feeList";
import React, { useEffect, useRef } from "react";

const FeeListComponent = () => {
  console.log("running service2");
  const ref = useRef(null);

  useEffect(() => {
    mountFeeList(ref.current);
  });

  return <div ref={ref}></div>;
};

export default FeeListComponent;
