export const increment = (numToAdd) => {
  return {
    type: "INCREMENT",
    payload: numToAdd,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
