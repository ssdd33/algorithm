function solution(numbers) {
  /*
    첫번째 자리에 들어갈 수 있는 수 : 0을 제외한 수  
    마지막 자리에 들어갈 수 있는 수 : 5를 제외한 홀수 
    
    1. firstNum배열에 모든 수 저장, 첫번째 자리에 들어갈수 있는 하나의 숫자 선택하면서 fN 배열에서 삭제 
    2. fN.length!==0 인 경우 secondNum 배열에 1에서 선택한 숫자를 제외한 나머지 숫자 저장
    3. 1,2 재귀 반복하는 동안
      조합된 숫자가 소수인 경우 -> 빈배열의 조합된 숫자와 같은 idx위치 값이 undefined라면 true 
      소수가 아닌 경우 -> 
    4. 
    

    */
  let checkPrimeNum = [];

  const firstNumValidity = (num) => {
    return num !== 0;
  };

  const lastNumValidity = (num) => {
    return num !== 0 && num !== 5 && num % 2 !== 0;
  };

  const isPrimeNum = (num) => {
    if (num === 1 || num === 0) {
      return false;
    }
    console.log(num);
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findPrimeNum = (defaultNum, numArr) => {
    for (let i = 0; i < numArr.length; i++) {
      const num = numArr[i];
      if (
        (defaultNum.length === 0 && !firstNumValidity(num)) ||
        (numArr.length === 1 && !lastNumValidity(num))
      ) {
        continue;
      }
      const comb = defaultNum * 10 + num;
      if (isPrimeNum(comb) && !checkPrimeNum[comb]) {
        checkPrimeNum[comb] = true;
      }
      const nextNumArr = [...numArr];
      nextNumArr.splice(i, 1);
      findPrimeNum(comb, nextNumArr);
    }
    return;
  };

  const strArr = numbers.split('');
  const numArr = strArr.map((item) => Number(item));
  console.log('start', numArr);
  findPrimeNum(0, numArr);
  console.log(
    checkPrimeNum
      .map((num, idx) => (num ? idx : num))
      .filter((item) => !isNaN(item))
  );
  return checkPrimeNum.filter((num) => num).length;
}

solution('011');
