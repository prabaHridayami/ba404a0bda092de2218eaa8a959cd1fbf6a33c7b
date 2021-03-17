export const priceReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUM":
      return state + action.payload;

    default:
      return state;
  }
};

export const itemReducer = (state = 0, action) => {
  switch (action.type) {
    case "ITEM":
      return state + action.payload;
    default:
      return state;
  }
};
