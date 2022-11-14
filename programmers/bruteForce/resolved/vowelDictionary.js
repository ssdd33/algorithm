function solution(word) {
  const vowIndex = ['A', 'E', 'I', 'O', 'U'];
  /*
    주어진 단어를 이루는 모음 i0 - 4 순회하면서 각 위치의 모음의 이전 순서 모음의 단어 조합 개수를 더하기
    idx => vows.indexOf(word[i])
   단어의 0번째 모음 : idx * 781
   1 : idx * (1(2자리 단어)+5(3자리단어)+ 5^2(4자리 단어 개수) + 5^3(5자리 단어개수))
   2: idx*()
   
   5^0 ~5^(4-i)+1(1자리 단어 개수)
   
   
   vows = word.concat(Array(5-word.length).fill(false))
   
   vows 단어의 마지막 모음부터 순회하며 이전 순서의단어의 조합수를 더한다. 
   단어 조합의 수는 누적되고 누적된값을 계속 더한다. 
   
   마지막에 1자리 수 더하기 
    */

  let vows = word.split('');
  vows = vows.concat(Array(5 - word.length).fill(false));

  let answer = 0;
  let combinationCount = 0;

  for (let i = 4; i >= 0; i--) {
    combinationCount += Math.pow(5, 4 - i);

    const vow = vows[i];

    if (vow) {
      answer += vowIndex.indexOf(vow) * combinationCount + 1;
    }
  }

  console.log(answer);
  return answer;
}

solution('I');
