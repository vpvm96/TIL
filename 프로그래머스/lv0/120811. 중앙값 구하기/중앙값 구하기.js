function solution(array) {
    let middle = Math.floor(array.length / 2)
    
    array.sort((a, b) => a - b)
    
    return array[middle]
}