// gnomesort.js

export function gnomeSort(arr) {
  let iterations = 0;
  let index = 0;

  while (index < arr.length) {
    iterations++; // tæller hver loop iteration
    if (index === 0 || arr[index] >= arr[index - 1]) {
      index++;
    } else {
      // swap med forrige element
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }

  // Tjek om arrayet er sorteret
  let sorted = true;
  for (let i = 1; i < arr.length; i++) {
    iterations++;
    if (arr[i - 1] > arr[i]) {
      sorted = false;
      break;
    }
  }

  return { arr, iterations, sorted };
}

// Test eksempel
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
console.log(gnomeSort(list));
