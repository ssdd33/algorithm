function solution(board) {
  /*
    1.board의 복사본에 위험지역 체크
    2. board를 순회하면서 지뢰의 위치 탐색
    3. 지뢰위치 board[x][y]를 찾은 경우 : x-1~x+1, y-1~y+1 범위의 지역 체크 
    4. 체크보드의 총합 구하기
    */

  let checkBoard = board.map((row) => [...row]);
  const boardLength = board.length;

  const checkDangerArea = ([rowStart, rowEnd], [colStart, colEnd]) => {
    for (let row = rowStart; row <= rowEnd; row++) {
      for (let col = colStart; col <= colEnd; col++) {
        checkBoard[row][col] = 1;
      }
    }
  };

  const getCheckRange = (idx) => [
    idx === 0 ? 0 : idx - 1,
    idx === boardLength - 1 ? idx : idx + 1,
  ];

  for (let row = 0; row < boardLength; row++) {
    for (let col = 0; col < boardLength; col++) {
      if (board[row][col] === 1) {
        console.log(board);
        checkDangerArea(getCheckRange(row), getCheckRange(col));
      }
    }
  }

  const result = checkBoard.reduce(
    (a, c) => a + c.reduce((a, c) => a + c, 0),
    0
  );

  return Math.pow(boardLength, 2) - result;
}

const input = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

solution(input);
