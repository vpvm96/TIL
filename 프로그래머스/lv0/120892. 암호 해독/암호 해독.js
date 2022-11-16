function solution(cipher, code) {
    let arr = [...cipher]
    let answer = []
    
    for (let i = 1; i <= arr.length; i++) {
        if (i % code == 0) {
            answer.push(arr[i - 1])
        }
    }
    
    return answer.join("")
}