function solution(num_list) {
    let Even = num_list.filter((n) => n % 2 == 0).length
    let odd = num_list.filter((n) => n % 2 != 0).length

    return [Even, odd]
}