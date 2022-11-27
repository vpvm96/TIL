function solution(i, j, k) {
    let count = 0
    for (let q = i; q <= j; q++) {
        count += [...("" + q)].filter(n => +n === k).length
    }
    
    return count;
}