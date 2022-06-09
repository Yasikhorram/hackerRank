/*
Extra perfect number is the number that first and last bits are set bits.
extraPerfect(3)  ==>  return {1,3}
*/

function extraPerfect(n) {
  //your code here
  let arr = [];
  for (let i = n; i > 0; i--) {
    if (i % 2 !== 0) {
      console.log(i);
      arr.push(i);
    }
  }
  return arr.reverse();
}

console.log(extraPerfect(5));
