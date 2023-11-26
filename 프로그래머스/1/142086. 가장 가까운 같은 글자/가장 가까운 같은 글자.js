function solution(s) {
    const closestIndexes = {};
    const answer = Array.from(s).map((char, index) => {        
        if (!Object.hasOwn(closestIndexes, char)) {
            closestIndexes[char] = index;
            return -1;
        }
        
        const closestIndex = closestIndexes[char];
        closestIndexes[char] = index;
        return index - closestIndex;
    });
    return answer;
}