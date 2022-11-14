function solution(my_string) {
    let answer = 0
    my_string.split("").forEach((num) => {
        if (Number(num)) {
            answer += Number(num)
        }
    })
    return answer
}