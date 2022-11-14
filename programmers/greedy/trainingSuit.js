function solution(n, lost, reserve) {
  /*
    모든 경우에 대해 탐색
    재귀 함수 lendTrainingSuit
    
    */
  let result = 0;

  const lendTrainingSuit = (lost, reserve, count) => {
    console.log(lost, reserve, count);
    for (let o = 0; o < reserve.length; o++) {
      const suitOwner = reserve[o];
      for (let b = 0; b < lost.length; b++) {
        if (lost[b] - 1 === suitOwner || lost[b] + 1 === suitOwner) {
          const nextLost = lost.slice();
          nextLost.splice(b, 1);
          const nextReserve = reserve.slice();
          nextReserve.splice(o, 1);
          lendTrainingSuit(nextLost, nextReserve, count + 1);
        }
      }
    }

    if (count > result) {
      result = count;
    }
  };

  lendTrainingSuit(lost, reserve, 0);
  console.log(result);
  return n - lost.length + result;
}

solution(5, [2, 4], [1, 3, 5]);
