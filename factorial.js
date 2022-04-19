/*
a Factorial is a product of an integer and ll integers below
factorial 4 -> 4! -> 4*3*2*1 = 24
factorial 0 -> 1
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(4));
