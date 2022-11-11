function solution(numbers) {
    numbers.sort((a, b) => a - b)
    let a = numbers[numbers.length - 1]
    let b = numbers[numbers.length - 2]
    
    return a * b
}