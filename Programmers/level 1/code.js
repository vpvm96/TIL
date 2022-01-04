function solution(s, n) {
  var answer = "";
  let str = s;

  for (let i = 0; i < str.length; i++) {
    let result = str.charAt(i);
    let save = result + n;
    if (save > "z") {
      save = save - "z";
    }
    answer += save;
  }
  return answer;
}
