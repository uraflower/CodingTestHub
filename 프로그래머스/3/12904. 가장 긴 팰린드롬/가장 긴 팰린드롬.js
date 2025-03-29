function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = s.length; j >= 0; j--) {
            const sliced = s.slice(i, j);
            if (sliced.length < answer) break;
            
            const mid = Math.floor(sliced.length / 2);
            let longest = 0;
            
            for (let k = 0; k <= mid; k++) {
                if (sliced[k] !== sliced[sliced.length - 1 - k]) {
                    longest = 0;
                    break;
                }
                
                if (k === mid) {
                    longest = isEven(sliced.length) ? longest * 2 : longest * 2 + 1;
                } else {
                    longest++;
                }
            }
            
            answer = Math.max(answer, longest);
        }
    }
    
    return answer;
}

function isEven(num) {
    return num % 2 === 0;
}