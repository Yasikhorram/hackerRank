/*
- is the second arr squared of first arr
- order doesnt matter but the frequency should be the same
- [1,2,3] -> [4,1,9] -> true
-[1,2,1] -> [4,1] -> false must be the same frequency
*/

function squaredSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] + 1 || 1;
  }
  for (let val of arr2) {
    obj2[val] = obj2[val] + 1 || 1;
  }
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }

  return true;
}
console.log(squaredSame([1, 2, 3, 1], [4, 1, 1, 9]));
