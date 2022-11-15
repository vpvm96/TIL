function solution(my_string) {
    var answer = '';
    my_string.split("").forEach((str) => {
        if (str == str.toUpperCase()) {
            answer += str.toLowerCase()
        } else {
            answer += str.toUpperCase()
        }
    })
    
    return answer;
}