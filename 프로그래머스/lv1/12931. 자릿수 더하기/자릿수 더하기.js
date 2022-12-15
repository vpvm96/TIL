function solution(n) {

    return (n + "").split("").reduce((pre, cur) => parseInt(pre) + parseInt(cur), 0)
}