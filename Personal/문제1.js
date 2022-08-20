/**
 * 이과 최고를 가리는 문제 S4
 * 2명의 학생이 있다. 이 두 학생은 수학과 과학 성적을 가지고 있다.
 * (x, y), (i, j)
 * 예를 들어 x > i 이고 y > j 라면 a의 등수가 b보다 높다고 판단한다.
 * 만약 x > i 이고 y < j 라면 a와 b의 등수는 같다.
 * 
 * 입출력 에시
 * 5
 * 10 20
 * 30 40
 * 20 20
 * 20 20
 * 50 50
 * 
 * 출력: 5 2 3 3 1
 * 
 * 첫 입력에서는 총 학생의 수를 입력 받고
 * 공백 문자를 기준으로 학생의 수학과 과학 점수를 입력 받는다.
 * 출력은 공백을 기준으로 각자의 등수를 출력한다.
 */

const input = [
    [80, 10], 
    [10, 80], 
    [20, 20], 
    // [20, 100], 
    // [0, 50],
    // [77, 73],
]
// 90 100 40 120 50 150
// [ 4, 3, 6, 2, 5, 1 ]

function solution(input) {
    let answer = []
    let arr = input.map(item => item.reduce((prev, curr) => prev + curr))

    for (let i = 0; i < arr.length; i++) {
        let rank = 1
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) rank++
        }
        answer.push(rank)
    }
    return answer
}
console.log(solution(input))