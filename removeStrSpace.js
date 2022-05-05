/*
Codewars
Simple, remove the spaces from the string, then return the resultant string.
*/
function noSpace(x) {
  let str = "";
  x = x.split("");
  for (let char of x) {
    if (char !== " ") {
      str += char;
    }
  }
  return str;
}
