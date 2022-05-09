/*codewars
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
*/
function openOrSenior(data) {
  return data.map((innerArr) => {
    if (innerArr[0] >= 55 && innerArr[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}
