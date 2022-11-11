function solution(babbling) {
    let result = 0;
    const possible = ['aya', 'ye', 'woo', 'ma'];
    babbling.forEach(word => {
        if (possible.includes(word)) {
            result++;
            return;
        }
        
        let replaced = word;
        for (let i=0; i<possible.length; i++) {
            replaced = replaced.replace(possible[i], ' ');
        }
        replaced = replaced.replaceAll(' ', '');
        if (replaced === '') {
            result++;
        }
    })
    return result;
}