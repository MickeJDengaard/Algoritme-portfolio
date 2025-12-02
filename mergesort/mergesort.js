
export function merge(left, right, iterationsObj) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    iterationsObj.count++; // tæller hver loop iteration
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    iterationsObj.count++;
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    iterationsObj.count++;
    result.push(right[j]);
    j++;
  }

  return result;
}

export function mergeSort(arr, iterationsObj = { count: 0 }) {
  iterationsObj.count++; // tæller kald til mergeSort

  if (arr.length <= 1) {
    return { arr: [...arr], iterations: iterationsObj.count, sorted: true };
  }

  const mid = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, mid);
  const rightPart = arr.slice(mid);

  const leftSorted = mergeSort(leftPart, iterationsObj);
  const rightSorted = mergeSort(rightPart, iterationsObj);

  const merged = merge(leftSorted.arr, rightSorted.arr, iterationsObj);

  let sorted = true;
  for (let k = 1; k < merged.length; k++) {
    iterationsObj.count++;
    if (merged[k - 1] > merged[k]) {
      sorted = false;
      break;
    }
  }

  return { arr: merged, iterations: iterationsObj.count, sorted };
}

