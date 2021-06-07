/*
boj 2606

BFS - queue 로 풀기

0.list 객체 생성
1.visited 
2.visited .filter(true) .length 반환
*/

const fs = require("fs");
const input = fs.readFileSync("./05.txt").toString().split("\n");
let edges = input.slice(2, input.length).map((e) => e.split(" "));
let totalVertices = +input[0];
let list = {};

for (let i = 0; i < edges.length; i++) {
  let from = edges[i][0];
  let to = edges[i][1];

  if (!list[from]) {
    list[from] = [];
  }
  if (list[from]) {
    list[from].push(to);
  }
  if (!list[to]) {
    list[to] = [];
  }
  if (list[to]) {
    list[to].push(from);
  }
}

//1번 컴퓨터에서 시작
let queue = ["1"];
let isVisited = new Array(totalVertices + 1).fill(false);
isVisited[1] = true;

while (queue.length > 0) {
  let currentV = queue.shift();

  for (let next = 0; next < list[currentV].length; next++) {
    let to = list[currentV][next];
    if (!isVisited[to]) {
      queue.push(to);
      isVisited[to] = true;
    }
  }
}

//시작 정점은 제외
let totalInfected = isVisited.filter((e) => e === true).length - 1;

console.log(totalInfected);
