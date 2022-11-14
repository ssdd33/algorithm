function solution(n, wires) {
  /*
   1.길이 n+1의 2차원배열에 각 송전탑이 연결된 송전탑들에 대한 정보를 저장 
   2.연결된 송전탑이 가장 많은 송전 탑 찾기
   3-a 가장 많은 송전탑a가 1개인 경우: 
    a-1 그 다음으로 연결수가 많은 송전탑b 찾기 
    a-2 a와 b가 연결되어있다면, 2개의 트리로 분리되었을때 각 트리의 노드 개수 차 구하기, a와 모든b의 차이값중 최소값 구하기 
   3-b가장 많은 송전탑이 2개 이상인 경우
    b-1 찾은 송전탑들사이의 모든 2개조합을 확인하여 두개의 송전탑이 연결되어있는 경우 2개 트리 노드개수 확인, 최소값 구하기 
    */

  let towers = [];
  let towerNodesCount = Array(n + 1).fill(0);
  let sortedTower = [[], []];

  //================= ( 1 )
  for (let i = 0; i < wires.length; i++) {
    const [towerA, towerB] = wires[i];
    const prevTowerALink = towers[towerA] ? towers[towerA] : [];
    const prevTowerBLink = towers[towerB] ? towers[towerB] : [];

    towers[towerA] = [...prevTowerALink, towerB];
    towers[towerB] = [...prevTowerBLink, towerA];
    towerNodesCount[towerA]++;
    towerNodesCount[towerB]++;
  }
  console.log('towers : ', towers);
  console.log('towerNodesCount : ', towerNodesCount);

  //=================== ( 2 )
  const compareWireCount = (isMax, towerIdx) => {
    const arrRef = isMax ? 0 : 1;

    const towerACount = towerNodesCount[towerIdx];

    if (!sortedTower[arrRef].length) {
      sortedTower[arrRef] = [towerIdx];
    } else {
      const curMaxCount = towerNodesCount[sortedTower[arrRef][0]];

      if (towerACount > curMaxCount) {
        if (isMax) {
          sortedTower[1] = [...sortedTower[0]];
        }
        sortedTower[arrRef] = [towerIdx];
      }
      if (curMaxCount > towerACount) {
        if (isMax) {
          compareWireCount(false, towerIdx);
        }
      }
      if (curMaxCount === towerACount) {
        sortedTower[arrRef] = [...sortedTower[arrRef], towerIdx];
      }
    }
    return;
  };

  for (let i = 1; i <= n; i++) {
    compareWireCount(true, i);
  }
  console.log('sortedTower : ', sortedTower);

  let minDiff = Infinity;
  //==============================(a -2, b-1 )
  const getTreeSize = (mother, siblings) => {
    let count = siblings.length;
    for (let i = 0; i < siblings.length; i++) {
      const node = siblings[i];
      const children = towers[node].filter((t) => t !== mother);

      if (children.length >= 1) {
        count += getTreeSize(node, children);
      }
    }
    return count;
  };

  const compareNodeCount = (tower, traversalTowers, isSameValue) => {
    for (let i = 0; i < traversalTowers.length; i++) {
      const towerB = traversalTowers[i];
      if (towers[tower].includes(towerB)) {
        const diff = Math.abs(
          getTreeSize(
            tower,
            towers[tower].filter((t) => t !== towerB)
          ) -
            getTreeSize(
              towerB,
              towers[towerB].filter((t) => t !== tower)
            )
        );
        console.log(
          'towerA : ',
          tower,
          'size : ',
          getTreeSize(tower, towers[tower])
        );
        console.log(
          'towerB :',
          towerB,
          'size :',
          getTreeSize(towerB, towers[towerB])
        );
        if (diff < minDiff) {
          minDiff = diff;
        }
      }
    }
    if (isSameValue && traversalTowers.length > 1) {
      const nextTower = traversalTowers.shift();
      compareNodeCount(nextTower, traversalTowers, true);
    }
    return;
  };

  const startTower = sortedTower[0].shift();
  const traversalTowerRef = sortedTower[0].length > 0 ? 0 : 1;

  compareNodeCount(
    startTower,
    sortedTower[traversalTowerRef],
    traversalTowerRef === 0
  );

  console.log(minDiff);
  return minDiff;
}

const input = [
  9,
  [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ],
];

solution(...input);
