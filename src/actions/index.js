export const sumPrice = (nr) => {
  return {
    type: "SUM",
    payload: nr,
  };
};

export const sumItem = (nr) => {
  return {
    type: "ITEM",
    payload: nr,
  };
};

export const changeLocation = (nr) => {
  return {
    type: "LOC",
    payload: nr,
  };
};
