/* Valley: Starting with a step down from sea level and ending with a step up to sea level.
Hikes always start and end at sea level */

function countingValleys(steps, path) {
  let valley = 0;
  let altitude = 0;
  let pathArr = path.split("");
  for (var i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === "D") {
      altitude--;
    } else if (pathArr[i] === "U") {
      if (altitude === -1) {
        valleys++;
      }
      altitude++;
    }
  }
  return valleys;
}
