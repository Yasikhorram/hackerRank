/*
-One person can bribe at most two others.
-Determine the minimum number of bribes that took place to get to a given queue order.
-Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

*/

function minimumBribes(q) {
  let swaps = 0;
  let chaotic = false;

  for (var i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      chaotic = true;
    }
    for (var j = q[i] - 2; j < i; j++) {
      if (q[i] > q[j]) {
        swap++;
      }
    }
  }
  if (chaotic) {
    console.log("Too chaotic");
  } else {
    console.log(swaps);
  }
}
