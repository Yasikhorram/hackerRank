/*
-function accepts sorted arr
- function returns the first pair which sum up to 0 in an arr or return undefined
*/

function sumZero(arr) {
  if (arr[0] >= 0) {
    return undefined;
  }

  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while (pointer1 < pointer2) {
    let sum = arr[pointer1] + arr[pointer2];
    if (sum === 0) {
      return [arr[pointer1], arr[pointer2]];
    } else if (sum > 0) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
}
console.log(sumZero([-1, 1, 2, 3]));
