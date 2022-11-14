function solution(answers) {
  /*
    ..문자열, 배열, 객체값을 묶어서 비교후 상이한 값의 index,key 를 뱉는 메소드는 없음
    1.각 수포자의 답안 패턴을 생성해서 현재의 답과 비교, 체크하는 함수 
    2.주어진 답을 순회하며 1번의 함수 실행, 배열 check = [[1,맞은개수],[2,맞은개수],[3,맞은개수]]에 count 
    4.check[i][1]로 check sort, sort하는 과정에서 비교되는 값이 같은 경우 count
    5. check -> check[i][0]으로 mapping
    6. check 배열에서 count+1 만큼의 요소 배열에 담아서 return  
    */

  const check = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  const countSupoza1Answer = (idx, answer) => {
    const pick = (idx + 1) % 5 === 0 ? 5 : (idx + 1) % 5;
    console.log('A', pick);
    if (answer === pick) {
      check[0][1] += 1;
    }
  };

  const countSupoza2Answer = (idx, answer) => {
    const evenPattern = [1, 3, 4, 5];

    const pick = (idx + 1) % 2 === 0 ? evenPattern[((idx + 1) / 2 - 1) % 4] : 2;
    console.log('B', pick);
    if (answer === pick) {
      check[1][1] += 1;
    }
  };

  const countSupoza3Answer = (idx, answer) => {
    const pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const str = `${idx}`;
    const pick = pattern[Number(str[str.length - 1])];
    console.log('C', pick);
    if (pick === answer) {
      check[2][1] += 1;
    }
  };

  for (let i = 0; i < answers.length; i++) {
    console.log(i, answers[i]);
    countSupoza1Answer(i, answers[i]);
    countSupoza2Answer(i, answers[i]);
    countSupoza3Answer(i, answers[i]);
  }

  let sameCheckValueCount = 0;
  console.log(check);
  check.sort((a, b) => {
    console.log(a, b);
    if (a[1] === b[1]) {
      sameCheckValueCount += 1;
    }
    return b[1] - a[1];
  });
  console.log(check, sameCheckValueCount);
  console.log(check.map((item) => item[0]).slice(0, sameCheckValueCount + 1));
  return check.map((item) => item[0]).slice(0, sameCheckValueCount + 1);
}

const input = [1, 2, 3, 4, 5];

solution(input);
