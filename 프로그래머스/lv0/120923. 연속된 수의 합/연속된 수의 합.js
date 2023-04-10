function solution(num, total) {
    const start = Math.floor((total - (num * (num - 1) / 2)) / num);
    const result = Array.from({length: num}, (_, i) => start + i);
    return result;
}