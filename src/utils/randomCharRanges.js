function randomCharRanges(formDataArray) {
  const charCodes = [
    [65, 90],
    [97, 122],
    [48, 57],
    [
      [33, 47],
      [58, 64],
      [91, 96],
      [123, 126],
    ],
  ];
  const includedCharCodes = [];
  for (let i = 0; i < formDataArray.length; i++) {
    if (formDataArray[i]) {
      includedCharCodes.push(charCodes[i]);
    }
  }
  return includedCharCodes;
}
export default randomCharRanges;
