/*
- A left rotation operation on an array shifts each of the array's elements  unit to the left.
- int a[n]: the array to rotate
- int d: the number of rotations
- return the rotated array
*/
function rotLeft(a, d) {
  for (var i = 0; i < d; i++) {
    let first = a.shift();
    a.push(first);
  }
  return a;
}
