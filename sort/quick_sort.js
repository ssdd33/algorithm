/*1.배열안에서 임의의 피봇을 기준으로 피봇보다 작은값과 큰값으로 배열을 분할
 1-1.피봇 값보다 클때까지 왼쪽 포인터를 오른쪽으로 옮긴다.
 1-2.피봇 값보다 작을때 까지 오른쪽 포인터를 왼쪽으로 옮긴다.
 1-3.오른쪽 포인터와 왼쪽 포인터의 값을 swap
 1-4.두개의 포인터가 같은 위치에 올때 까지 반복
 1-5.포인터의 이동이 멈추면 왼쪽 포인터와 피봇을 swap
 1-6.다음 분할을 위해 피봇값을 반환
2.분할된 배열의 크기가 0보다 크거나 같을때까지(base case) 1단계를 재귀적으로 반복
*/

import { makeUnsortedArr } from "./unsorted_arr_maker.js";
let unsortedArr = makeUnsortedArr(30);

// function partition(arr, left_pointer, right_pointer) {
//   let pivot_position = right_pointer;
//   let pivot = arr[pivot_position];
//   right_pointer--;

//   while (left_pointer !== right_pointer) {
//     while (arr[left_pointer] < pivot) {
//       left_pointer++;
//     }
//     while (arr[right_pointer] > pivot) {
//       right_pointer--;
//     }
//     arr[(left_pointer, right_pointer)] = arr[(right_pointer, left_pointer)];
//   }

//   arr[(left_pointer, pivot_position)] = arr[(pivot_position, left_pointer)];

//   return left_pointer;
// }

// function qsRecursion(arr, left_idx, right_idx) {
//   if (right_idx - left_idx <= 0) {
//     return arr;
//   }
//   let pivot_position = partition(arr, left_idx, right_idx);

//   qsRecursion(arr, left_idx, pivot_position - 1);
//   qsRecursion(arr, pivot_position + 1, right_idx);
// }
// console.log(unsortedArr);
// console.log(qsRecursion(unsortedArr, 0, unsortedArr.length - 1));

//attempt2--------------------------------------------------------------

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[0];
//   let left_part = [];
//   let right_part = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left_part.push(arr[i]);
//     }
//     if (arr[i] > pivot) {
//       right_part.push(arr[i]);
//     }
//   }

//   let left_sorted = quickSort(left_part);
//   let right_sorted = quickSort(right_part);

//   return [...left_sorted, pivot, ...right_sorted];
// }

// console.log(unsortedArr);
// console.log(quickSort(unsortedArr));

//--------------------------------------------------------------------

function sortableArray(arr) {
  this.array = arr;
  this.partition = function (lp, rp) {
    let pivot_position = rp;
    let pivot = this.array[0];

    rp = rp - 1;

    while (true) {
      while (lp < pivot) {
        lp++;
      }
      while (rp > pivot) {
        rp--;
      }
      if (lp >= rp) {
        break;
      }
      [this.array[lp], this.array[rp]] = [this.array[rp], this.array[lp]];
    }
    [this.array[lp], this.array[pivot_position]] = [
      this.array[pivot_position],
      this.array[lp],
    ];
    return lp;
  };
  this.quickSort = function (li, ri) {
    if (ri - li <= 0) {
      return;
    }
    let pivot_position = this.partition(li, ri);
    this.quickSort(li, pivot_position - 1);
    this.quickSort(pivot_position + 1, ri);
  };
}

let arr = makeUnsortedArr(30);

let qs = new sortableArray(arr);
console.log(arr);
console.log(qs.quickSort(0, arr.length - 1));
