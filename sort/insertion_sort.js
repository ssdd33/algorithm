/*
1. 변수 temp 선언, for문으로 1~ arr.length-1(i) 순회하면서 비교값을 변수에 할당
2. 내부 for문에서 i-1~0(j) 역순으로 값의 크기를 비교하며 temp보다 크면 arr[j+1] = arr[j], 작다면 arr[j+1] = temp, break;
*/
import { makeUnsortedArr } from "./unsorted_arr_maker.js";
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
  }
  return arr;
}

let arr = makeUnsortedArr(20);

console.log(arr);
console.log(insertionSort(arr));
