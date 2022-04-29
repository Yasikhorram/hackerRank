function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let min = arr[j];
    let lowestIdx = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        lowestIdx = i;
      }
    }
    if (j !== lowestIdx) {
      let temp = arr[j];
      arr[j] = min;
      arr[lowestIdx] = temp;

  }
  return arr;
}

console.log(selectionSort([0, 4, 1, 3, 76]));
