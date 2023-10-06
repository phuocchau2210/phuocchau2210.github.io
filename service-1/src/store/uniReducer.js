const initialState = {
  select: "",
};

export const UniReducer = (state = initialState, action) => {
  if (action.type === "SELECT_UNIVERSITY") {
    return { ...state, select: action.payload };
  }
  return state;
};
