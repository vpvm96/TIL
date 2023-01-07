function solution(s) {
    let lowerCase = [...s].filter((item) => item === item.toLowerCase()).sort().reverse()
    let upperCase = [...s].filter((item) => item === item.toUpperCase()).sort().reverse()
        
    
    return [lowerCase, upperCase].flat().join("")
}