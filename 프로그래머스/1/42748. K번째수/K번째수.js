function solution(array, commands) {
    const answer = commands.map(([i, j, k]) => {
       const sorted = array.slice(i - 1, j).sort((a, b) => Number(a) - Number(b));
       return sorted[k - 1];
    });
    return answer;
}