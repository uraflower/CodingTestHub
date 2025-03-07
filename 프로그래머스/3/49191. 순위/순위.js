function solution(n, results) {
    // 내 앞, 뒤에 몇 명 있는지 센다 (진입차수, 진출차수 자체 말고 전체적으로 봐야 함)
    // 앞뒤 숫자 합쳐서 n-1이면 정답 카운트 +1
    
    const indegrees = Array.from({length: n+1}).map(() => []);
    const outdegrees = Array.from({length: n+1}).map(() => []);
    results.forEach(([start, end]) => {
        outdegrees[start].push(end);
        indegrees[end].push(start);
    });
    
    let count = 0;
    for (let i = 1; i <= n; i++) { 
        if (dfs(indegrees, i) + dfs(outdegrees, i) === n-1) {
            count += 1;
        }
    }
    
    return count;
}

function dfs(adjList, vertex) {
    const stack = [vertex];
    const visited = new Set(stack);
    
    while (stack.length) {
        const current = stack.pop();
        
        adjList[current].forEach((next) => {
            if (!visited.has(next)) {
                stack.push(next);
                visited.add(next);
            }
        });
    }
    
    visited.delete(vertex);
    return visited.size;
}