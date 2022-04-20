/*
- is the second arr squared of first arr
- order doesnt matter but the frequency should be the same
- [1,2,3] -> [4,1,9] -> true
-[1,2,1] -> [4,1] -> false must be the same frequency
*/

function squaredSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let allSquared = false;
  let obj1 = {};
  let obj2 = {};
  for (var i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] + 1 || 1;
  }
  for (let val of arr2) {
    obj2[val] = obj2[val] + 1 || 1;
  }
  console.log(obj2);

  return allSquared;
}
console.log(squaredSame([1, 2, 3, 1], [4, 1, 1, 9]));
