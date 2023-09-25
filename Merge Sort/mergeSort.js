const mergeSort = (array) => {
  if (array.length === 0) return "The array is empty!";
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArray, rightArray) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    } else {
      result.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    result.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    result.push(rightArray[j]);
    j++;
  }

  return result;
};

console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));
