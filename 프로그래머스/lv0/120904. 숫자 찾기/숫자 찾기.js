function solution(num, k) {
    let find = [...("" + num)].findIndex(n => +n == k)
    
    return find == -1 ? -1 : find + 1
}