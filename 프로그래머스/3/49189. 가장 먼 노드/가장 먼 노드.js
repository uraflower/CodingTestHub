function solution(n, edge) {
    let depth = 0;
    
    const adjList = Array.from({length: n+1}).map(() => []); // 0번 인덱스는 미사용
    edge.forEach(([start, end]) => {
        adjList[start].push(end);
        adjList[end].push(start);
    });
    
    const queueHistory = bfs(adjList);
    const maxDepth = queueHistory[queueHistory.length - 1][1];
    const answer = queueHistory.filter(([v, d]) => d === maxDepth).length;
    return answer;
}

function bfs(adjList) {
    const queue = [[1, 0]]; // [vertex, depth]
    let pointer = 0; // 큐 인덱스 포인터
    const visited = new Set([1]);
    
    while (queue.length > pointer) {
        const [start, depth] = queue[pointer];
        
        adjList[start].forEach((end) => {
            if (!visited.has(end)) {
                queue.push([end, depth+1]);
                visited.add(end);
            }
        });
        
        pointer++;
    }
    
    return queue;
}