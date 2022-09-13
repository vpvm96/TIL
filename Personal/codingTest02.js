/**
 * Q 1) S5
 * I love coding. I wanna be FoxMon. I love coding. I wanna be FoxMon.
 *
 * o를 a로 바꾸세요.
 * a를 지우고, 지운 갯수를 출력해 보세요.
 *
 * 조건1. replace 사용 x.
 *
 * for문 사용 ㄴㄴ
 *
 * while만 써서 해보세요.
 */

function 아이러브코딩(coding) {
    let answer = ""
    let i = 0
    let count = 0
    let arr = coding.split("")
    while (i < arr.length) {
        if (arr[i] == "o") arr[i] = "a"
        i++
    }
    i = 0
    while (i < arr.length) {
        if (arr[i] == "a") {
            count++
            arr[i] = ""
        }
        i++
    }
    answer = count
    return answer
}
// console.log(아이러브코딩("I love coding. I wanna be FoxMon. I love coding. I wanna be FoxMon."))

/**
 * Q 2) S4
 *
 * 대포랑 미사일이 있는데, 대포는 ( 이렇게 표현을 합니다.
 * 대포를 막으려면 ) 이러한 문자로 방어를 해야해요.
 *
 * 미사일은 { 이렇게 표현합니다.
 * 미사일을 막으려면 } 라는 레이저가 필요해요.
 *
 * 예를 들어서 (){} 이렇게 미사일과 대포를 쏘면 방어에 성공했다고 판단합니다.
 * (() 이렇게 대포를 쏘면 방어에 실패한 겁니다.
 *
 * 방어에 성공한 경우 'YES!' 를 출력하세요.
 * 실패한 경우에는 'NO! TT' 를 출력하세요.
 */

function 미사일과대포는무서워(bomb) {
    let obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    let arr = []
    bomb = bomb.split("")
    for (let i = 0; i < bomb.length; i++) {
        if (bomb[i] == "(" || bomb[i] == "{" || bomb[i] == "[") {
            arr.push(bomb[i])
            console.log(arr)
        } else if (bomb[i] == ")" || bomb[i] == "}" || bomb[i] == "]") {
            if (arr.length == 0) return false
            let pop = arr.pop()
            if (bomb[i] != obj[pop]) return false
        }
    }
    if (arr.length != 0) return false
}
console.log(미사일과대포는무서워("{}{[}{]}[(]())[][][]"))

/**
 * Q 3) 거스름돈 계산은 어려워
 * 토끼는 초밥 가게를 운영하고 있습니다.
 * 근데 계산기 POS가 망가져서 거스름돈 계산을 못하고 있습니다.
 * 장수가 수학에 약한 토끼를 위해 거스름돈 계산 프로그램을 개발하려고 합니다.
 * 손님이 먹은 초밥이 13000원 이고, 손님이 낸 금액이 20000원 인데
 * 수학에 약한 토끼가 거스름돈을 10000원을 거슬러 줬습니다.
 * 이를 방지하기 위해서 장수가 작성하려고 하는 프로그램을 만들어 주세요!
 *
 * 예제 입력 예시
 * param: 13000 20000, 10000
 *
 * 출력 예시: 3000
 *
 * 단, 손님이 돈을 더 적게 낸 경우, -1을 출력해 주세요
 */
function 거스름돈계산은어려워(customer, rabbit, exchange) {
    let answer = 0
    if (customer > rabbit) {
        answer = -1
    } else {
        answer = customer - rabbit + exchange
    }
    return answer
}

// console.log(거스름돈계산은어려워(13000, 20000, 10000))

/**
 * Q 4) 평균을 맞추려면 어떻게 해야 할까요?
 * 여왕 학교에는 학생들이 시험을 본 후, 자신의 점수가 나오기를 학수고대 하고 있습니다.
 * 학생의 평균이 고르게 계산이 되도록 여왕이 어떻게 하면 고르게 분포된 점수를 가질 수 있는지
 * 고민을 하고 있어요.
 *
 * 예시) 총 2명이 있고, 각각의 점수는 국어, 수학, 과학이 있습니다.
 * 4 6 3
 * 4 7 4
 * 각각의 학생의 점수가 위와 같은 경우 평균이 일치하지 않습니다!
 * 평균을 일치 시키려면 1 번 학생의 과학 점수와 2번 학생의 국어 점수 혹은 과학 점수를 교환해야 합니다.
 * 교환된 학생의 점수를 출력해 주세요.
 *
 * 입력 예시: [[4, 6, 3], [4, 7, 4]], false
 * 출력 예시: [[4, 6, 4], [3, 7, 4]]
 *
 *
 * 만약에 세 명의 점수가 일치하면 2번째 isCorrect는 true가 입력됩니다.
 */

function 평균을맞추려면어떻게해야하지(students, isCorrect) {
    let rearrange = []

    if (!isCorrect) {
        let index = 0
        for (let i = 0; i < students[0].length; i++) {
            for (let j = 0; j < students[1].length; j++) {
                let temp = students[index][i]
                students[index][i] = students[index + 1][j]
                students[index + 1][j] = temp
                let sum1 = students[index].reduce((a, b) => a + b, 0)
                let sum2 = students[index + 1].reduce((a, b) => a + b, 0)
                if (sum1 == sum2) {
                    rearrange.push(students[0], students[1])
                    return rearrange
                }
            }
        }
    }

    return rearrange
}

// console.log(평균을맞추려면어떻게해야하지([[4, 6, 3], [4, 7, 4]], false))

/**
 * Q 5) 숫자야구게임
 * 토끼는 야구를 좋아합니다.
 * 같이 할 친구가 모자르기 때문에 애벌레랑 야구를 하려고 합니다.
 * 근데 이 야구는 숫자야구 게임입니다!
 *
 * 숫자야구는 0 이상 10 미만의 숫자로 구성되어 있으며, 자리수는 세자리 수 입니다.
 * 단 첫 번째 자리수에는 0이 올 수 없으며 각 자리수의 숫자는 중복을 허용하지 않습니다!
 * 예를 들어서 토끼가 3 1 2 라는 숫자를 생각하고 있고,
 * 애벌레가 1 2 3을 말했다면 3Ball! 입니다.
 * 만약에 애벌레가 3 2 1을 말했다면 1Strike, 2Ball! 입니다!
 *
 * 토끼와 애벌레가 숫자야구게임을 편하게 즐길 수 있도록
 * 애벌레가 외친 숫자가 토끼의 숫자와 비교 했을 때 야구 Strike와 Ball의 카운터를
 * 출력하는 프로그램을 작성해 주세요!
 *
 * 입력 에시) 애벌레의 추측 숫자가 들어옵니다.
 * 단, 함수 안에서 토끼의 숫자를 입의로 지정하고, Strike와 Ball의 카운터를 알려주세요.
 */

function 숫자야구는즐거워(yourNumber) {
    // 배열의 첫 번째 요소가 Strike, 두 번째 요소가 Ball
    let score = [0, 0]
    let arr = []
    let strike = 0
    let ball = 0
    while (arr.length < 3) {
        let randomNum = parseInt(Math.random() * 9) + 1
        if (arr.indexOf(randomNum) < 0) {
            arr.push(randomNum)
        }
    }
    console.log(arr)
    for (let i = 0; i < yourNumber.length; i++) {
        if (yourNumber[0] == 0) return false
        if (arr[i] == yourNumber[i]) {
            strike++
        } else {
            ball++
        }
    }
    score[0] = strike
    score[1] = ball
    return score
}

// console.log(숫자야구는즐거워([1, 2, 3]))

/**
 * Q 6) 0을 옮겨라!
 * input = array
 * ex) array = [9, 0, 0, 3, 1, 5]
 *
 * 우리는 0을 옮기고 싶어요
 * output = [9, 1, 3, 5, 0, 0]
 * 단 parameter로 넘어온 array로 해결을 해야함
 * 새로운 array 셍성 금지
 */

function solution(array) {
    for (let i = 0; i < array.length; i++) {
        if (i == array.indexOf(0)) {
            array.push(...array.splice(i, 1))
        }
    }
    return array
}

// console.log(solution([0, 0, 0, 0, 1, 5]))

/**
 * Q 7) 문자열을 뒤집어보자
 * input = String
 * "I love JavaScript"
 * output = "tpircSavaJ evol I"
 * 단. 재귀함수를 이용할 것
 */
function 문자열을뒤집어보자(str) {
    if (str.length == 1) {
        return str
    }
    return str[str.length - 1] + 문자열을뒤집어보자(str.slice(0, str.length - 1))
}

// console.log(문자열을뒤집어보자("I love JavaScript"))
