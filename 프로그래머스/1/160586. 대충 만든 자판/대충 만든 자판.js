function solution(keymap, targets) {
    // MIN_KEY_DOWN_CNT 설명: key=키의 문자, value=문자 작성을 위한 최소 터치 횟수
    const MIN_KEY_DOWN_CNT = keymap.reduce((result, keys) => {
        return Array.from(keys).reduce((obj, key, index) => {
            if (!Object.hasOwn(obj, key) || obj[key] > index + 1) {
                obj[key] = index + 1;
            }
            return obj;
        }, result);
    }, {});
    
    const answer = targets.map((target) => {
        let cnt = 0;
        
        // every를 사용해 문자열 작성이 불가능한 경우 바로 빠져나옴
        const isPossible = Array.from(target).every((char) => {
            if (Object.hasOwn(MIN_KEY_DOWN_CNT, char)) {
                cnt += MIN_KEY_DOWN_CNT[char];
                return true;
            }
            return false;
        });
        
        if (isPossible === false) return -1;
        return cnt;
    });
    
    return answer;
}