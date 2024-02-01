function solution(friends, gifts) {
    // 이름-번호(idnex) 쌍 객체 생성
    const indexes = friends.reduce((obj, name, idx) => {
        obj[name] = idx;
        return obj;
    }, {});
    
    const historyTable = Array.from({length:friends.length}).map(() => Array.from({length: friends.length}).fill(0));
    const scores = Array.from({length:friends.length}).fill(0);
    
    gifts.forEach((gift) => {
        // 주고받은 선물 내역 채우기
        const [sender, receiver] = gift.split(' ');
        historyTable[indexes[sender]][indexes[receiver]] += 1;
        // 선물 지수 계산
        scores[indexes[sender]]++;
        scores[indexes[receiver]]--;
    });
    
    // 다음 달에 받을 선물 수
    const nextCnt = Array.from({length: friends.length}).fill(0);
    
    for (let s = 0; s < friends.length; s++) {
        for (let r = s + 1; r < friends.length; r++) {
            const sendCnt = historyTable[s][r];
            const receiveCnt = historyTable[r][s];
            // 주고받은 적이 없거나, 주고받은 횟수가 같은 경우 => 선물지수 비교
            if (sendCnt === receiveCnt) {
                if (scores[s] === scores[r]) continue;
                scores[s] < scores[r] ? nextCnt[r]++ : nextCnt[s]++;
            }
            // 주고받은 적이 있는 경우 => 주고받은 횟수 비교
            else {
                sendCnt < receiveCnt ? nextCnt[r]++ : nextCnt[s]++;
            }
        }
    }
    
    return Math.max(...nextCnt);
}
