function solution(denum1, num1, denum2, num2) {
  /*
    1. 분모 통일하기, 
       분모가 같지 않은 경우 두 분수에 각각의 분모 곱하기 
    2.분자 더하기
    3.분모로 분자가 나눠떨어지지 않을때까지 나누기 
    */
  let result = [denum1 + denum2, num1];

  if (num1 !== num2) {
    result = [denum1 * num2 + denum2 * num1, num1 * num2];
  }

  let [denum, num] = result;
  if (denum % num === 0) {
    return [denum / num, 1];
  }

  let factor = 2;
  /*
    2~sqrt(num)
 
   분모 분자의 나머지가 0이 아닌경우 factor +1
   0인 경우 result 업데이트 
   
    */

  while (factor <= Math.floor(Math.sqrt(num))) {
    if (denum % factor === 0 && num % factor === 0) {
      denum = denum / factor;
      num = num / factor;
    } else {
      factor = factor + 1;
    }
  }

  return [denum, num];
}

solution(1, 2, 3, 4);
