export const SelectUniversity = (uni) => {
  console.log("action: ", uni);
  return {
    type: "SELECT_UNIVERSITY",
    payload: uni,
  };
};
