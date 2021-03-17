export const changeLocation = (state = "Select Location", action) => {
  switch (action.type) {
    case "LOC":
      return (state = action.payload);
    default:
      return state;
  }
};
