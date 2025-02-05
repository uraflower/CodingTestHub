function solution(n, costs) {
    // 모든 노드가 이어질 때까지
    // edge의 cost가 가장 낮은 녀석들을 채용 (=> 이를 위해 정렬)
    // 이 때, 이미 이어진 node라면 cost가 낮아도 무시
    
    let totalCost = 0;
    const connected = Array.from({length: n}).map(() => new Set());
    const sortedByCost = costs.sort((a,b) => Number(a[2]) - Number(b[2]));
    
    for (let i = 0; i < costs.length; i++) {
        const [start, end, cost] = sortedByCost[i];
        
        if (!isConnected(start, end, connected)) {
            totalCost += cost;
            connected[start].add(end);
            connected[end].add(start);
        }
    }
    
    return totalCost;
}

function isConnected(start, end, connected) {
    let isConnected = false;
    const visited = new Set();
    const queue = [start];
    
    while (queue.length > 0) {
        const current = queue.shift();
        visited.add(current);
        
        if (connected[current].has(end)) {
            isConnected = true;
            break;
        }
        
        connected[current].forEach((next) => {
            if (!visited.has(next)) 
                queue.push(next);
        });
    }
    
    return isConnected;
}