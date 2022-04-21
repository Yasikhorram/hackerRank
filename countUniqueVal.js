/*
- accepts sorted arr
return int which is numbers of unique values
*/

function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ar[i + 1]) {
      count++;
    }
  }
  return count;
}
