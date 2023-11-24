function solution(n) {
    const divisor = new Set();
    if (n === 1) {
        return 1;
    }
    
    for (let i = 1; i < n/2; i += 1) {
        if (n % i === 0) {
            divisor.add(i);
            divisor.add(n / i);
        }
    }
    
    const answer = Array.from(divisor).reduce((sum, num) => sum += num, 0);
    return answer;
}