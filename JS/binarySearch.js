let nativeFindIterations = 0
let binarySearchIterations = 0

const currentArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const search = (arr, item) => {
  binarySearchIterations += 1

  const middleIdx = Math.round((arr.length / 2)) - 1
  const isFined = arr[middleIdx] === item

  if (isFined) {
    return arr[middleIdx]
  }

  if (arr[middleIdx] < item) {
    const morePartOfArr = arr.slice(middleIdx + 1)
    return search(morePartOfArr, item)
  }

  if (arr[middleIdx] > item) {
    const lessPartOfArr = arr.slice(0, middleIdx + 1)
    return search(lessPartOfArr, item)
  }
}

currentArr.find((item) => {
  nativeFindIterations += 1
  return item === 7
});

search(currentArr, 7)

console.log("Binary Search Iterations: ", binarySearchIterations);
console.log("Native Find Method Iterations: ", nativeFindIterations);