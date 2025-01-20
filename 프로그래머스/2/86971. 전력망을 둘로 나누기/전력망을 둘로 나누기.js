function solution(n, wires) {
    const tree = Array.from({ length: n+1 }).map(() => new Set());
    wires.forEach(([start, end]) => {
        tree[start].add(end);
        tree[end].add(start);
    });
    
    // edge를 하나씩 끊어보고 이어져 있는 vertex들만 탐색해서 개수 비교
    let answer = 100;
    
    for (let i = 1; i <= n; i++) {
        const vertexes = tree[i];
        
        vertexes.forEach((j) => {
            const diff = Math.abs(dfs(i, tree, j) - dfs(j, tree, i));
            if (answer > diff) answer = diff;
        });
    }
    
    return answer;
}

function dfs (start, tree, nodeToIgnore) {
    const visited = new Set();
    const queue = [start];
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        if (visited.has(current) || current === nodeToIgnore) continue;
        
        visited.add(current);
        queue.push(...tree[current]);
    }
    
    return visited.size; // 방문한 정점의 수
}