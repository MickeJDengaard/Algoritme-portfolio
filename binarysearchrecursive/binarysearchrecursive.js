export function binarySearchRecursive(search, values, start, end, iterations, comparator) {
  if (iterations === undefined) iterations = 0;
  if (comparator === undefined) comparator = null;

  console.group(`binarySearchRecursive call: start=${start}, end=${end}, iterations=${iterations}`);

  if (start > end) {
    console.groupEnd();
    return { found: false, index: -1, iterations: iterations + 1 };
  }

  var mid = Math.floor((start + end) / 2);
  var valueAtMid = values[mid];

  var compareResult;
  if (comparator && typeof comparator === "function") {
    compareResult = comparator(search, valueAtMid);
  } else {
    if (search === valueAtMid) compareResult = 0;
    else if (search < valueAtMid) compareResult = -1;
    else compareResult = 1;
  }

  if (compareResult === 0) {
    console.groupEnd();
    return { found: true, index: mid, iterations: iterations + 1 };
  } else if (compareResult < 0) {
    var result = binarySearchRecursive(search, values, start, mid - 1, iterations + 1, comparator);
    console.groupEnd();
    return result;
  } else {
    var result = binarySearchRecursive(search, values, mid + 1, end, iterations + 1, comparator);
    console.groupEnd();
    return result;
  }
}
