function divide(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let sum = min + max;
    console.log("sum min+max", sum);
    let mid = Math.floor((min + max) / 2);
    console.log("mid is:", mid);
    if (n < arr[mid]) {
      max = mid - 1;
      console.log("here inside max is:", max);
    } else if (n > arr[mid]) {
      min = mid + 1;
      console.log("min inside is:", min);
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(
  divide(
    ["Alabama", "Alaska", "California", "Georgia", "Utah", "Wyoming"],
    "Alaska"
  )
);
