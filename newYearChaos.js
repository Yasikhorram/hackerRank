/*
-One person can bribe at most two others.
-Determine the minimum number of bribes that took place to get to a given queue order.
-Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

*/

function minimumBribes(q) {
  let swap = 0;
  let sortedQ = q.sort((a, b) => a - b);
  for (var i = q.length - 1; i >= 0; i--) {
    console.log(q[i]);
    console.log(qSorted[i]);

    if (q[i] !== qSorted[i]) {
      let index = q.indexOf(qSorted[i]);
      let difference = i - index;
      console.log("difference", difference);
      swap += difference;
      console.log("swap inside: ", swap);
    }
  }
  if (swap > 2) {
    console.log("Too chaotic");
  }
}
