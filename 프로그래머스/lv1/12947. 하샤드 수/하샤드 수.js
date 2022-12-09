function solution(x) {
    let str = (x + "").split("")    
    let answer = str.reduce((pre, cur) => Number(pre) + Number(cur))
    return x % answer == 0 ? true : false
}