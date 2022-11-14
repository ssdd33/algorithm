function solution(sizes) {
  /*
    1.변수 length1, length2
    2.명함 길이중 
    큰수는 length1값과 비교해서 큰값으로 length1업데이트
    작은수는 length2와 비교해서 length2 업데이트
    3.모든 명함사이즈 탐색후, length1*length2 반환
    */

  let long = 0;
  let short = 0;

  const updateLength = (longer, shorter) => {
    console.log('long', long, longer);
    console.log('short', short, shorter);
    if (longer > long) {
      long = longer;
    }
    if (shorter > short) short = short;
  };

  sizes.forEach(([size1, size2]) => {
    if (size1 >= size2) {
      updateLength(size1, size2);
    } else {
      updateLength(size2, size1);
    }
  });
  console.log(long, short);
  return long * short;
}

const input = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
solution(input);
