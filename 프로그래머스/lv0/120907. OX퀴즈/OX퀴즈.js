function solution(quiz) {
    return quiz.map((f) => {
        let [formulae, answer] = f.split("=")
        return eval(formulae) === +answer ? "O" : "X"
    })  
}