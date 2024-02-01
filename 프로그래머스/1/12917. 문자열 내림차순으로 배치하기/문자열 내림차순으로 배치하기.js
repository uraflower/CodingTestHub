function solution(s) {
    const sorted = [...s].sort((a, b) => {
        if (a > b) return -1;
        else if (a < b) return 1;
        else return 0;
    })
    return sorted.join('');
}