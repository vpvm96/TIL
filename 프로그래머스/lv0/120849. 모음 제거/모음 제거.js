function solution(my_string) {
    return [...my_string].filter(str => ["a","e","i","o","u"].includes(str) == false).join("")
}