function solution(d, budget) {
    const sortedD = d.sort((a, b) => Number(a) - Number(b));
    
    let sum = 0;
    const result = sortedD.reduce((cnt, d) => {
        if (sum + d <= budget) {
            sum += d;
            return cnt += 1;
        }
        return cnt;
    }, 0);
    
    return result;
}