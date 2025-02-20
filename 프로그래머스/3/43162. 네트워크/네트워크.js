function solution(n, computers) {
    const visited = Array.from({length: n}).fill(false);
    let answer = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(n, computers, i, visited);
            answer++;
        }
    }
    
    return answer;
}

function dfs(n, computers, start, visited) {
    const stack = [start];
    visited[start] = true;
    
    while (stack.length > 0) {
        const i = stack.pop();
        
        for (let j = 0; j < n; j++) {
            if (!visited[j] && i !== j && computers[i][j] === 1) {
                visited[j] = true;
                stack.push(j);
            }
        }
    }
}