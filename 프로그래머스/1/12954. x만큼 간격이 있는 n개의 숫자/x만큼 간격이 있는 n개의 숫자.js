function solution(x, n) {
    const answer = [];
    for (let i = 0, num = x; i < n; i++, num += x) {
        answer.push(num);
    }
    return answer;
}