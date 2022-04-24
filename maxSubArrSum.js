/*
- accepts an arr of int and a number
- return the max sum of n cosecutive elements
- avoid O(N**2)
*/

function maxSubArrSum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  let tempSum;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
