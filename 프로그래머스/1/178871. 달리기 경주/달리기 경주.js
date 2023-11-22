function solution(players, callings) {
    const answer = [...players];
    
    const rank = {};
    players.forEach((name, index) => {
        rank[name] = index;
    });
    
    callings.forEach((name) => {
        const index = rank[name];
        
        const frontPlayer = answer[index - 1];
        answer[index - 1] = answer[index];
        answer[index] = frontPlayer;
        
        rank[name] -= 1;
        rank[frontPlayer] += 1;
    })
    
    return answer;
}