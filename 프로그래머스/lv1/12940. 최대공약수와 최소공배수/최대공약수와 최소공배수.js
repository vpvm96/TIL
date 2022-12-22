function gcm(a, b) {
    while(b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    
    return a;
}

function gongbae(a, b) {
    return (a * b) / gcm(a, b);
}
function solution(n, m) {
    var answer = [gcm(n, m), gongbae(n, m)];

    return answer;
}