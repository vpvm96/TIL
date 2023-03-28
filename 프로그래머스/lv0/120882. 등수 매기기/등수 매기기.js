function solution(score) {
    const avg = score.map(([a, b]) => (a + b) / 2)
    const answer = Array.from({length: avg.length}, () => 1)
    
    for (let i = 0; i < avg.length; i++) {
        for (let j = 0; j < avg.length; j++) {
            if (avg[j] > avg[i]) answer[i]++
        }
    }
    
    return answer;
}