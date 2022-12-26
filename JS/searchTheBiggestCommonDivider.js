const getTheBiggestCommonDivider = (a, b) => {
  const theBiggestNumber = a < b ? b : a
  const theSmallestNumber = a < b ? a : b;
  const dividingIntegerResult = Math.floor(theBiggestNumber / theSmallestNumber);
  const restAfterDividing = theBiggestNumber - (dividingIntegerResult * theSmallestNumber)

  if (restAfterDividing) {
    return getTheBiggestCommonDivider(theSmallestNumber, restAfterDividing)
  }
  return theSmallestNumber
};

console.log(getTheBiggestCommonDivider(189, 42))