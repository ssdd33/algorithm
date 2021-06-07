/*
1.남은 작업기간들을 요소로 갖는 배열 만들기(남은 작업량/속도)
2.let answer =[]
3.let due =배열[0]
4.배열의 앞에서부터 요소를 제거하면서 카운팅한다.due보다 긴 기간이 나오면 카운팅을 answer에 삽입, count 리셋 due = answer.shift()
5.빈배열이 되면 작업을 마치고 카운트를 answer에 한번더 push 답을 리턴한다. 

문제풀이 후/
수도코드에서 계속 뭔가를 하나씩 빠뜨려서 테스트 케이스를 작성하면서 하나씩 조건을 맞춰가는식으로 문제를 해결했다.
처음엔 답으로 출력한 배열에 요소가 1개씩 부족하거나, count를 리셋해주지 않았거나, 리셋되는 숫자가 잘못되었거나.

배열을 사용한다는 점, days의 앞부분부터 순서대로 요소를 꺼내 비교하는데 이를 큐라고 보기엔 좀 자의적인 감이 없지않아 있고
왜 이 문제가 스택/큐에 관련된 문제인지는 아직 잘 모르겠다 
*/
function solution(progresses, speeds) {
  let days = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
  let answer = [];
  let count = 0;
  let due = days[0];
  while (days.length > 0) {
    let day = days.shift();
    if (day <= due) {
      count++;
    } else {
      due = day;
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
