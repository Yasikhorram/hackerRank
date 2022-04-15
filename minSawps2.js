/*
-unordered arr - without duplicates - allowed to swap 2 elements
-find min num of swap

*/

function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      console.log("arr[i]", arr[i]);
      while (arr[i] !== i + 1) {
        let temp = arr[i];
        arr[i] = arr[temp - 1];
        arr[temp - 1] = temp;
        swap++;
      }
    }
  }

  return swap;
}

console.log(minimumSwaps([4, 3, 1, 2]));
