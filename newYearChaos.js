/*
-One person can bribe at most two others.
-Determine the minimum number of bribes that took place to get to a given queue order.
-Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

*/

function minimumBribes(q) {
  let swap = 0;
  for (var i = q.length - 1; i >= 0; i--) {}
  if (swap > 2) {
    console.log("Too chaotic");
  }
}
