function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [aSort, bSort] = [Math.abs(a-n), Math.abs(b-n)]
        
        if (aSort === bSort) return b-a
        
        return aSort-bSort
    })
}