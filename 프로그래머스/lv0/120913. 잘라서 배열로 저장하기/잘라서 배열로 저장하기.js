function solution(my_str, n) {
    let str = my_str.split("")
    let answer = []
    
    // for (let i = 0; i < str.length; i++) {
    //     answer.push(str.splice(0, n).join(""))
    //     console.log(answer)
    // }
    
    while (str.length > 0) {
        answer.push(str.splice(0, n).join(""))
        console.log(answer)
    }
    
    return answer
}