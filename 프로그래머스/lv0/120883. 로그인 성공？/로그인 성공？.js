function solution(id_pw, db) {
    let login = ''
    
    db.map((item, i) => {
        if(id_pw[0] === item[0] && id_pw[1] === item[1]) {
            login = 'login'
        } else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) {
            login = 'wrong pw'
        } else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) {
            login = 'fail'
        }
    })
    return login
}