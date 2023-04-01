function solution(s) {
    const words = s.split(' ')
    
    const answer = words.map(word => {
        const chars = word.split('')
        
        for (let i = 0; i < chars.length; i++) {
            chars[i] = (i % 2 === 0) ? chars[i].toUpperCase() : chars[i].toLowerCase()
        }
        
        return chars.join('')
    })
    
    return answer.join(' ')
}