/* - 6 x 6 array
- This hourglass pattern occurs 16 times within the array
-  minimum value of any position is -9, the minimum value of the sum is -63.
- loop through rows until 4
- loop column until 4

1  1  1  0  0 0
0  1  0  0  0 0
1  1  1  0  0 0
0  9  2 -4 -4 0
0  0  0 -2  0 0
0  0 -1 -2 -4 0

*/

function hourglassSum(arr) {
  let maxSum = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let middle = arr[i + 1][j + 1];
      let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      let sum = top + middle + bottom;
      if (maxSum < sum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}
