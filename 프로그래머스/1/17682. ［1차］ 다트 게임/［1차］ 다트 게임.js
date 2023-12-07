function solution(dartResult) {
    const BONUS = {
        'S': 1,
        'D': 2,
        'T': 3,
    };
    const OPTION = {
        '*': 2,
        '#': -1,
    };
    
    const scores = [0]; // record each score. zero index is always 0.
    let score = '';  // string
    
    Array.from(dartResult).forEach((current) => {
        if (Number.isInteger(Number(current))) {
            score += current;
        }
        
        if (Object.keys(BONUS).includes(current)) {
            scores.push(Number(score) ** BONUS[current]); // save score
            // 점수의 자릿수는 일정하지 않지만, 보너스를 만났다는 건 점수를 모두 저장했다는 뜻임 
            // 따라서 보너스를 만나면 점수를 저장함
            
            score = ''; // init score
        }
        
        if (Object.keys(OPTION).includes(current)) {
            const round = scores.length - 1;
            
            if (current === '*') {
                scores[round - 1] *= OPTION[current];
            }
            scores[round] *= OPTION[current];
        }
    });
    
    const answer = scores.reduce((sum, score) => sum + score, 0);
    return answer;
}