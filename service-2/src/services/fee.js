const getFeeTypes = async (uni) => {
  console.log("start calling");
  const response = await fetch(`http://localhost:8080/api/fees/${uni}`);
  const result = await response.json();
  console.log("done", result);
  return result;
};

export { getFeeTypes };
