export function makeUnsortedArr(length) {
  let arr = [];
  let isOverlap = [];
  for (let i = 0; i <= length; i++) {
    let randomNum = parseInt(Math.random() * 100);
    if (isOverlap[randomNum] === undefined) {
      arr.push(randomNum);
      isOverlap[randomNum] = 1;
    }
  }
  return arr;
}
