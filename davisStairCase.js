/*
-climb each staircase 1, 2, or 3steps at a time.
- return the number of ways Davis can climb the staircase, modulo 10000000007
*/
function stepPerms(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n === 3) {
    return 4;
  }
  return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
}
