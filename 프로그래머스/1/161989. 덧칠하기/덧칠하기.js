function solution(wall, roller, section) {
    let cnt = 0;
    let uncovered = [...section];
    
    while (uncovered.length > 0) {
        const start = uncovered.shift();
        const end = start + roller;
        
        const index = uncovered.findIndex((x) => x >= end);
        uncovered = index === -1 ? [] : uncovered.slice(index);
        
        cnt += 1;
    }
    
    return cnt;
}