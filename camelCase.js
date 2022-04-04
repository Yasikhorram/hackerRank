/*
Sample Input
saveChangesInTheEditor
Sample Output
5
*/
function camelcase(s) {
  let times = 1;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      times++;
    }
  }
  return times;
}
