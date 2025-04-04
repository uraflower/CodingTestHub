function solution(r1, r2) {
    let answer = 0;
   
    for (let x = 1; x <= r2; x++) {        
        const y1 = Math.sqrt(r1 ** 2 - x ** 2) || 0;
        const y2 = Math.sqrt(r2 ** 2 - x ** 2);
        
        answer += Math.floor(y2) - Math.ceil(y1) + 1;
    }
    
    answer *= 4;
    
    return answer;
}