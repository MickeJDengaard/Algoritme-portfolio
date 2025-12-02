export function insertionSort(arr) {
  let iterations = 0; 

  for (let i = 1; i < arr.length; i++) {
    iterations++; 
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      iterations++; 
      arr[j + 1] = arr[j]; 
      j--;
    }

    arr[j + 1] = key; 
  }

  let sorted = true;
  for (let k = 1; k < arr.length; k++) {
    iterations++; 
    if (arr[k - 1] > arr[k]) {
      sorted = false;
      break;
    }
  }

  return { arr, iterations, sorted };
}
