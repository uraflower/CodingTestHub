function solution(number, limit, power) {
    const answer = Array.from({ length: number }).reduce((cnt, _, index) => {
        const number = index + 1;
        const set = new Set();
        
        // 약수 개수 구하기
        for (let i = 1; i * i <= number; i += 1) {
            if (number % i === 0) {
                set.add(i);
                set.add(number / i);
            }
            
            // 약수 개수가 limit보다 크면 power를 cnt에 더하기
            if (set.size > limit) {
                return cnt + power;
            }
        }
        
        // 구한 약수 개수를 cnt에 더하기
        return cnt + set.size;
    }, 0);
    
    return answer;
}
