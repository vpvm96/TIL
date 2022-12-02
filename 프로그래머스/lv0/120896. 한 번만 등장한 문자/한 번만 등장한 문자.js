function solution(s) {
    let answer = []
    for (let i = 0; i < s.length; i++) {
        let find = s.indexOf(s[i])
        let compare = s.lastIndexOf(s[i])
        
        if (find == compare) {
            answer.push(s[i])
        }
    }
    return answer.sort().join("")
}