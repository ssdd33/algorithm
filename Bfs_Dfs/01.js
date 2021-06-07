/* 프로그래머스 LV2 타겟 넘버
주어진 숫자들과 +,-연산을 사용하여 target을 만들 수 있는 '모든' 경우의 수 찾기 -> dfs
 1.경우의 수를 세는 anwer변수를 만든다
 2.연산횟수 count와 총합 sum을 인자로 받는 dfs함수를 만든다.
 2.1.연산횟수가 numbers배열의 길이와 같다면 함수 종료. 이때 총합이 target과 같다면 answer를 한번 센다.
 2.2.연산횟수가 충분하지 않다면 연산횟수를 1늘리고 현재 총합에 다음 숫자를 각각 빼고 더한 값으로 2개의 재귀함수를 호출한다.(가지 만들기)
 3.재귀함수는 연산횟수 0, 총합 0에서 시작한다.
 4.answer 반환

*/
module.exports = function solution(numbers, target) {
  let answer = 0;

  const dfs = (count, sum) => {
    if (count === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  };
  dfs(0, 0);
  return answer;
};
