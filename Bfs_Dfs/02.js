/*
boj 1260
Graph DFS & BFS

0.주어진 간선 목록을 참고하여 인접리스트를 만든다. 목록에 없어도 모든 간선에 대해 key를 만든다.
1.dfs,bfs 각각의 출력을 기록할 변수 생성, 시작정점을 추가한다. 
2.dfs, bfs의 방문기록 배열 각각 생성

*/

const fs = require("fs");
const input = fs.readFileSync("./04.txt").toString().split("\n");

let graphInfo = input[0].split(" ");
let startV = +graphInfo[2];
let totalNodes = +graphInfo[0];
let edges = input.slice(1, input.length).map((e) => e.split(" "));

//edges를 참고하여 list 생성

let list = new Array(totalNodes + 1).fill(0);

for (let i = 0; i < list.length; i++) {
  list[i] = [];
}

for (let i = 0; i < edges.length; i++) {
  let from = +edges[i][0];
  let to = +edges[i][1];

  list[from].push(to);
  list[to].push(from);
}
//작은 수의 정점부터 방문해야하기떄문에
list.forEach((e) => e.sort((a, b) => a - b));

//순회 출력
let dfsTraversal = [];
let bfsTraversal = [];

//방문 기록
let dfsVisited = new Array(totalNodes + 1).fill(false);
let bfsVisited = new Array(totalNodes + 1).fill(false);

let stack = [startV]; //dfs stack
let queue = [startV]; //bfs queue

dfsVisited[startV] = true;
bfsVisited[startV] = true;
//DFS traversal
while (stack.length > 0) {
  let currentV = stack.pop();
  dfsTraversal.push(currentV);

  //작은 정점부터 방문하기 위해 역순으로 stack에 추가
  for (let next = list[currentV].length - 1; next >= 0; next--) {
    let to = list[currentV][next];
    if (!dfsVisited[to]) {
      dfsVisited[to] = true;
      stack.push(to);
    }
  }
}

//BFS traversal

while (queue.length > 0) {
  let currentV = queue.shift();
  bfsTraversal.push(currentV);

  for (let next = 0; next < list[currentV].length; next++) {
    let to = list[currentV][next];
    if (!bfsVisited[to]) {
      bfsVisited[to] = true;
      queue.push(to);
    }
  }
}

console.log(dfsTraversal.join(" ") + "\n" + bfsTraversal.join(" "));

//결과 런타임에러(TypeError)
