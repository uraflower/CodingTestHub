function solution(numbers) {
    const sorted = numbers
        .map((number) => number.toString())
        .sort((a, b) => {
            if (a+b > b+a) return -1;
            if (a+b < b+a) return 1;
            return 0;
        });
    
    const joined = sorted.join('');
    return Number(joined) === 0 ? '0' : joined;
}