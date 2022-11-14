function solution(babbling) {
  const available = ['aya', 'ye', 'woo', 'ma'];
  /*
1.babbling의 모든 단어 검사
2.available 단어들을 "*"로 변환 
3.match 검사 결과가 null이 아닌경우 count
*/
  let count = 0;

  babbling.forEach((word) => {
    let memo = word;
    const alt = '*';
    console.log(memo);
    available.forEach((a) => (memo = memo.replace(a, alt.repeat(a.length))));
    console.log(memo);
    const reg = new RegExp(`\\*{${memo.length}}`);
    console.log(reg);
    console.log(memo.match(reg));
    if (memo.match(reg) !== null) {
      console.log('match!');
      count++;
    }
  });

  console.log(count);
}

const input = ['aya', 'yee', 'u', 'maa', 'wyeoo'];

solution(input);
