/*
- accepts sorted arr
return int which is numbers of unique values
*/

function countUniqueVal(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(countUniqueVal([-2, -1, -1, 0, 1]));
