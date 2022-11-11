function solution(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= 1) {
            answer.push(-1)
        } else if (arr[i] !== Math.min(...arr)) {
            answer.push(arr[i])
        }
    }
    return answer
}