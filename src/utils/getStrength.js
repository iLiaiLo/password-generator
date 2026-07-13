export const getStrength = (value) => {
  if (value < 40) {
    return { label: "weak", color: "red" };
  }
  if (value < 60) {
    return { label: "medium", color: "orange" };
  }
  if (value < 80) {
    return { label: "strong", color: "yellow" };
  }
  return { label: "very strong", color: "lightgreen" };
};
