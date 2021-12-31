let arr = [
  [1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1],
];
let visited = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
];
let count = 0;
let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let sizeRow = 2;
let sizeCol = 7;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (!visited[i][j]) {
      if (arr[i][j] == 1) {
        dfs(i, j);
        count++;
      }
    }
  }
}

console.log(count);

function dfs(row, col) {
  // 재귀함수
  visited[row][col] = true;

  for (let i = 0; i < 4; i++) {
    let tempRow = dy[i] + row;
    let tempCol = dx[i] + col;

    if (tempRow >= 0 && tempCol >= 0 && tempRow < sizeRow && tempCol < sizeCol) {
      //
      if (!visited[tempRow][tempCol] && arr[tempRow][tempCol] == 1) {
        //
        dfs(tempRow, tempCol);
      }
    }
  }
}
