let input = require("fs").readFileSync("example.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => {
    return element
        .trim()
        .split("")
        .map((element) => Number(element));
});

const visited = [];
let group = 1;

let dx = [0, 0, 1, -1];
let dy = [-1, 1, 0, 0];

for (let i = 0; i < N; i++) {
    visited[i] = new Array(N).fill(false);
}

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (!visited[i][j] && input[i][j] == 1) {
            dfs(i, j);
            group++;
        }
    }
}

function dfs(row, col) {
    visited[row][col] = true;
    input[row][col] = group;
    for (let i = 0; i < 4; i++) {
        let nextRow = row + dy[i];
        let nextCol = col + dx[i];
        if (nextRow >= 0 && nextCol >= 0 && nextRow < input.length && nextCol < input[0].length) {
            if (!visited[nextRow][nextCol] && input[nextRow][nextCol] == 1) {
                dfs(nextRow, nextCol);
            }
        }
    }
}
let arr = new Array(group - 1).fill(0);

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        // 인덱스카운팅
        if (input[i][j] != 0) arr[input[i][j] - 1]++;
    }
}
console.log(arr);
