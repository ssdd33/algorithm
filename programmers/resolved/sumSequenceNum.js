function solution(num, total) {
  /*
    start = 제곱근의 소수점 버린 부분
    result = start 부터 num개 더한값
    
    result!==total 일때까지 
    result < total start++
    result > total start--
    
    return start...num
    */

  let start = Math.floor(Math.sqrt(total));

  const getNumArr = (start) => {
    let temp = [];
    for (let s = start; s < start + num; s++) {
      temp.push(s);
    }
    return temp;
  };

  const getSum = (numArr) => {
    return numArr.reduce((a, c) => a + c, 0);
  };

  let result = getSum(getNumArr(start));
  console.log(start, getSum(getNumArr(start)));
  while (result !== total) {
    if (result > total) {
      console.log(start, result, 'result > total');
      start--;
    }
    if (result < total) {
      console.log('result < total');
      start++;
    }
    result = getSum(getNumArr(start));
  }
  console.log(getNumArr(start));
  return getNumArr(start);
}

solution(5, 15);
