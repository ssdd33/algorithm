function solution(k, dungeons) {
  /*
   1. 던전 중 최소 피로도가 유저의 현재 피로도를 초과하는 던전은 제거한다. 
   2.재귀(count, nextDungeons)로 모든 순열 조합 탐색, 더이상 탐험할수 잇는 던전일 없을때 count > answer면 answer = count
   3. 재귀가 종료되었을때 answer 반환
    */

  let answer = 0;

  const exploreDungeons = (hp, count, dungeonsArr) => {
    for (let i = 0; i < dungeonsArr.length; i++) {
      const [requiredHp, consumption] = dungeonsArr[i];
      console.log(count, requiredHp, consumption, hp);
      console.log([...dungeonsArr].splice(i, 1));
      if (requiredHp <= hp) {
        exploreDungeons(
          hp - consumption,
          count + 1,
          [...dungeonsArr].splice(i, 1)
        );
      }
    }
    if (count > answer) {
      answer = count;
    }
    return;
  };
  const possible = dungeons.filter((dungeon) => dungeon[0] <= k);
  possible.sort((a, b) => b[0] - a[0]);

  exploreDungeons(k, 0, possible);
  return answer;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
