function solution(numbers, k) {
    let index = 0
    
    for (let i = 0; i < k; i++) {
        index += 2 
        if (index > numbers.length) { // index 값이 numbres의 길이가 넘어가면 numbers의 길이만큼 빼서 다시 처음부터 돌 수 있도록 한다.
            index -= numbers.length  
        }
    }
    return numbers[index - 2] // 공을 마지막으로 받은 사람이 아닌 던진 사람의 값을 구해야 하므로 인덱스 -2를 해준다.
}