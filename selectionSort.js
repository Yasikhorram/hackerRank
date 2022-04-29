function selectionSort(arr) {
  let noSwap = false;
  for (let j = 0; j < arr.length; j++) {
    let min = arr[j];
    let idx = j;
    console.log("arr[j]", arr[j]);
    for (let i = j + 1; i < arr.length; i++) {
      console.log("min before comparison", min);
      console.log("arr[i]", arr[i]);
      if (arr[i] < min) {
        min = arr[i];
        idx = i;
      }
    }
    console.log("min after is", min);
    console.log("---------");

    let temp = arr[j];
    arr[j] = min;
    arr[idx] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 4, 3, 76, 0]));
