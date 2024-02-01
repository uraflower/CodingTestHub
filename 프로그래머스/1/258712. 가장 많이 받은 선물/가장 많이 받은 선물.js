function solution(friends, gifts) {
    // 이름-번호(idnex) 쌍 객체 생성
    const friendsIndexes = friends.reduce((obj, name, idx) => {
        obj[name] = idx;
        return obj;
    }, {});
    
    const historyTable = Array.from({length:friends.length}).map(() => Array.from({length: friends.length}).fill(0));
    const scores = Array.from({length:friends.length}).fill(0);
    
    gifts.forEach((gift) => {
        // 주고받은 선물 내역 채우기
        const [sender, receiver] = gift.split(' ');
        const senderIndex = friendsIndexes[sender];
        const receiverIndex = friendsIndexes[receiver];
        historyTable[senderIndex][receiverIndex] += 1;
        // 선물 지수 계산
        scores[senderIndex]++;
        scores[receiverIndex]--;
    });
    
    // 다음 달에 받을 선물 수
    const nextCnt = Array.from({length: friends.length}).fill(0);
        
    for (let i = 0; i < friends.length; i++) {
        for (let j = i; j < friends.length; j++) {
            const sendCnt = historyTable[i][j];
            const receiveCnt = historyTable[j][i];
            
            if (sendCnt === receiveCnt) {
                if (scores[i] === scores[j]) continue;
                scores[i] < scores[j] ? nextCnt[j]++ : nextCnt[i]++;
            }
            else {
                sendCnt < receiveCnt ? nextCnt[j]++ : nextCnt[i]++;
            }
        }
    }
    console.log(nextCnt);
    
    return Math.max(...nextCnt);
}
