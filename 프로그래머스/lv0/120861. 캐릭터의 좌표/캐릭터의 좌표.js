function solution(keyinput, board) {
    let location = [0, 0]
    let key = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1, 0],
    }
    
    let width = [board[0]/2 << 0, board[1]/2 << 0]
    keyinput.forEach(move => {
        if (Math.abs(location[0] + key[move][0]) <= width[0] && Math.abs(location[1] + key[move][1]) <= width[1]) {
            location[0] += key[move][0]
            location[1] += key[move][1]
        }
    })
    
    return location
}