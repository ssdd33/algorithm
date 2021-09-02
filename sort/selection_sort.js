/*
1.배열에서 최솟값과 인덱스를 담을 변수 min 선언
2.검색이 시작되는 인덱스를 담을 변수 startPoint 선언
3.sp부터 최소값 검색
4.sp의 값과 min을 swap
5.sp++
6.sp<arr.length-1 일때까지 1-5 반복
*/

import { makeUnsortedArr } from "./unsorted_arr_maker.js";
const unsortedArr = makeUnsortedArr(30);

function selectionSort(arr) {
  let min = [Infinity, 0];
  let startPoint = 0;

  while (startPoint < arr.length - 1) {
    for (let i = startPoint; i < arr.length; i++) {
      if (arr[i] < min[0]) {
        min = [arr[i], i];
      }
    }
    [arr[startPoint], arr[min[1]]] = [arr[min[1]], arr[startPoint]];
    startPoint++;
    min = [arr[startPoint + 1], startPoint + 1];
  }

  return arr;
}

console.log(unsortedArr);
console.log(selectionSort(unsortedArr));
