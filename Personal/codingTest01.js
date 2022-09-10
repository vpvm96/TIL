/**
 * nums: Array(number)
 * [2, 6, 4, 8, 5, 10, 11, 15]
 * return 4
 * 
 * [1, 2, 3, 4]
 * return 0
 * 
 * [4, 3, 2, 1]
 * return 4
 */

function solution(nums) {
    let answer = 0
    const copy = nums.slice().sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != copy[i]) {
            answer++
        }
    }

    return answer
}

// console.log(solution([2, 6, 4, 8, 5, 10, 11, 15]))

/**
 * nums = Array(number), target = 3 (number)
 * [1, 1, 1, 1, 1]
 * 
 * 1 + 1 + 1 - 1 - 1 ...
 */

function solution2(nums, target) {
    function dfs(current, index) {
        if(index == nums.length) {
            if(target == current) {
                return 1
            }
            return 0
        }
        return dfs(current + nums[index], index + 1) + dfs(current - nums[index], index + 1)
    }
    return dfs(0, 0)
}

// console.log(solution2([1, 1, 1, 1, 1], 3))

/**
 * @param {*} str = "I hate typescript...!"
 * return a : 1 ...
 */
function solution3(str) {
    let answer = {}
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const bigAlpha = alpha.toUpperCase()
    str.split("").forEach((e) => {
        if(alpha.includes(e) || bigAlpha.includes(e)) {
            answer[e] = (answer[e] || 0) + 1
        }
    })

    return answer
}
// console.log(solution3("I hate typescript...!"))

/**
 * 계단 2칸, 1칸
 * 1칸짜리 계단은 니가 1칸오르면 끝남 => 1
 * 2칸은 2칸 오르거나 1칸오르면 끝나 => 2
 * 3칸은 3가지 경우의 수임
 * 4칸 5
 * ...
 * 골드 5
 */

function solution4(stairs) {
    let answer = 0
    const arr = new Array(stairs + 1).fill(0)
    arr[0] = 0
    arr[1] = 1
    arr[2] = 2
    for(let i = 3; i <= stairs; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    answer = arr[stairs]
    return answer
}

// console.log(solution4(10))

/**
 * 
 * @param {*} str1 || string
 * @param {*} str2 || string
 * "123455"
 * "15578"
 * str1에 1이 포함되어 있으므로, str2의 1은 str1의 1과 짝꿍입니다.
 * str1에 5가 포함되어 있고, str2에도 5가 포함되어 있으므로 str1, str2의 5는
 * 서로 짝꿍입니다. 단, 5가 2개씩 있으므로, 55가 짝꿍입니다.
 * 서로 짝꿍을 찾고, 그 짝꿍들의 집합 중에서 가장 큰 값을 string으로 반환하세요
 * result: 155 => 551
 * 단, 만약에 짝꿍이 존재하지 않으면 "0"을 반환하세요
 */
function solution5(str1, str2) {
    let [a, b] = [str1.split(""), str2.split("")]
    let obj = {}
    for (let i = 0; i < a.length; i++) {
        const ch = a[i]
        const aCnt = a.filter((n) => n == ch).length
        const bCnt = b.filter((e) => e == ch).length
        const min = Math.min(aCnt, bCnt)
        if(min) obj[ch] = min
    }
    const arr = []
    const keys = Object.keys(obj)
    if(keys.every(e => e == "0")) return "0"
    if(!keys.length) return "0"
    keys.forEach((k) => {
        arr.push(k.repeat(obj[k]))
    })
    return arr.sort((a, b) => b - a).join('')
}

// console.log(solution5("123455", "15578"))


// 중앙값 찾기
function solution6 (str) {
    str = str.split(" ").map((item) => parseInt(item)).sort((a, b) => a - b)

    return str[Math.floor(str.length / 2)]
}

console.log(solution6("-7 5 3 9 -9"))