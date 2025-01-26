function solution(n, lost, reserve) {
    // 1 2 3 4 5
    // lost: 5
    // reserve: 3
    
    // lost와 reserve 모두에 속한 학생은 체육복을 빌려주거나 빌릴 수 없으므로 제외해야 함
    const filteredLost = lost.filter((student) => !reserve.includes(student));
    const filteredReserve = reserve.filter((student) => !lost.includes(student));
    
    const lostSet = new Set(filteredLost);
    const sortedReserve = filteredReserve.sort(sortNumbers);
    
    sortedReserve.forEach((number) => {
        if (lostSet.has(number - 1))
            lostSet.delete(number - 1);
        else if (lostSet.has(number + 1))
            lostSet.delete(number + 1);
    })
    
    return n - lostSet.size;
}

function sortNumbers(a, b) {
    return Number(a) - Number(b);
}