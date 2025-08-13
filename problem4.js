function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const result = isSame([1, 2, 3], [1, 2, 3]);
const result2 = isSame([34, 5, 7, 9], [34, 5, 7]);
const result3 = isSame([1, undefined, 3], [1, null, 3]);
const result4 = isSame([1, 4, 5], [1, 4, 5]);
const result5 = isSame([1, "4", 4], [(1, 4, 4)]);
const result6 = isSame([2, 5, 6], 256);
const result7 = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
