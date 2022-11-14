function solution(my_string) {
    return [...my_string].filter((num) => !isNaN(+num)).map(num => +num).sort()
}