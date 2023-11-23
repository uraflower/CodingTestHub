function solution(s) {
    const isEven = s.length % 2 === 0;
    const index = isEven ? s.length / 2 - 1 : parseInt(s.length / 2);
    
    if (isEven) {
        return s[index] + s[index + 1];
    }
    
    return s[index];
}