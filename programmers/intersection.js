function solution(lines) {
  /*
   선분 a,b 비교 
일부가 겹치는 경우
하나이상의 선분 전체가 겹치는 경우
    
    
    */

  let intersections = [];
  let lengthSum = 0;

  const getIntersectionArea = (lineA, lineB) => {
    const [aStart, aEnd] = lineA;
    const [bStart, bEnd] = lineB;

    if (aStart < bEnd && aStart >= bStart) {
      return [aStart, Math.min(aEnd, bEnd)];
    }

    if (aEnd <= bEnd && aEnd > bStart) {
      return [Math.max(aStart, bStart), aEnd];
    }
    return null;
  };

  for (let i = 0; i < lines.length; i++) {
    const lineA = lines[i];
    if (i === lines.length - 1) break;

    for (let l = i + 1; l < lines.length; l++) {
      const lineB = lines[l];
      const intersection = getIntersectionArea(lineA, lineB);
      if (intersection) intersections.push(intersection);
    }
  }
  //탐색이 필요한 구역
  let que = [...intersections];

  while (que.length > 1) {
    console.log('enter while', que);
    const [aStart, aEnd] = que.shift();
    let noIntersection = true;

    /*
        que 탐색         
        겹치는 경우 que에서 제거,  최대범위 계산해서 que에 push break;
        겹치지 않는 경우 : 탐색이 끝나고 sectionA 길이를 lengthSum에 합산 */
    for (let i = 0; i < que.length; i++) {
      const [bStart, bEnd] = que[i];
      if (
        (aEnd > bStart && aEnd <= bEnd) ||
        (aStart < bEnd && aStart >= bStart)
      ) {
        que.shift();
        que.push([Math.min(aStart, bStart), Math.max(aEnd, bEnd)]);
        noIntersection = false;
        break;
      }
    }
    if (noIntersection) lengthSum += aEnd - aStart;
    console.log('finish 1 circle', 'sum:', lengthSum, 'que:', que);
  }
  que.forEach(([start, end]) => (lengthSum += end - start));
  console.log('finish while', 'sum:', lengthSum, 'que:', que);
  console.log('result', lengthSum);
  return lengthSum;
}

const input = [
  [-10, 1],
  [0, 5],
  [-1, 9],
];

solution(input);
