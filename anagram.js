/*
Anagrams are words same letters with same frequencies
*/
function validAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let frequency1 = {};
  let frequency2 = {};
  for (let item of arr1) {
    frequency1[item] = frequency1[item] + 1 || 1;
  }
  for (let item of arr2) {
    frequency2[item] = frequency2[item] + 1 || 1;
  }
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("aaz", "zza"));
