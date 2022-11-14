function solution(dots) {
  /* 
    기울기(y1-y2/x1-x2) 비교
    01/23
    02/13
    03/12
    
    1-3의 점을 탐색
    0과 선택된 점의 기울기, 나머지 점들의 기울기를 비교 
    기울기가 같은 경우 return 1
    탐색이 끝나면 return 0 
    */
  let answer = 0;
  const dot = dots[0];

  const getInclination = (dot1, dot2) => {
    return Math.abs((dot1[1] - dot2[1]) / (dot1[0] - dot2[0]));
  };
  for (let i = 0; i < 3; i++) {
    const search = dots.slice(1);
    const one = search.splice(i, 1)[0];
    console.log(one, search);
    console.log(
      getInclination(dot, one),
      getInclination(...search),
      getInclination(dot, one) === getInclination(...search)
    );
    if (getInclination(dot, one) === getInclination(...search)) {
      answer = 1;
      break;
    }
  }

  return answer;
}

const input = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

console.log(solution(input));
