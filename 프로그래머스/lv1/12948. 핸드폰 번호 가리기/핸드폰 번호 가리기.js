function solution(phone_number) {
    const len = phone_number.length - 4
    console.log(phone_number.slice(-4))
    return "*".repeat(len) + phone_number.slice(-4)
}