/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

*/
function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") === -1) {
      arr.push(i);
      console.log(i);
    }
  }
  return arr.length;
}
console.log(dontGiveMeFive(4, 17));
