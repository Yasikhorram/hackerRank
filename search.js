/*
- Using divide and conquer algo -> o(log n)

*/
function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (n < arr[mid]) {
      max = mid - 1;
    } else if (n > arr[mid]) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log([1, 3, 4, 6, 7, 10, 13], 10);
