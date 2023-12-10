function solution(participant, completion) {
    const completionCnt = completion.reduce((cntObj, player) => {
        cntObj[player] = Object.hasOwn(cntObj, player) ? cntObj[player] + 1 : 1;
        return cntObj;
    }, {});
    
    const answer = participant.find((player) => {
        if (!Object.hasOwn(completionCnt, player) ||
            completionCnt[player] === 0) {
            return true;
        }
        
        if (Object.hasOwn(completionCnt, player)) {
            completionCnt[player] -= 1;
        }
        
        return false;
    });
    
    return answer;
}