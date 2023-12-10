function solution(participant, completion) {
    const completionCnt = {};
    completion.forEach((player) => {
        completionCnt[player] = Object.hasOwn(completionCnt, player) ? completionCnt[player] + 1 : 1;
    });
    
    let answer = '';
    
    for (const player of participant) {
        if (!Object.hasOwn(completionCnt, player) ||
            completionCnt[player] === 0) {
            answer = player;
            break;
        }
        
        completionCnt[player] -= 1;
    }
    
    return answer;
}