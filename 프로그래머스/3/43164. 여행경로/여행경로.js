function solution(tickets) {
    const adjList = tickets.reduce((obj, [start, end]) => {
        if (!obj[start]) {
            obj[start] = [];
        }
        obj[start].push([end, false]); // [도착지, visited]
        return obj;
    }, {});
    Object.values(adjList).forEach((ends) => ends.sort());
    
    const path = ['ICN'];
    const maxLength = tickets.length + 1;
    dfs(adjList, path, maxLength);
    return path;
}

function dfs(adjList, path, maxLength) {
    const start = path[path.length - 1];
    
    const ends = adjList[start];
    if (!ends) return;
    
    for (let i = 0; i < ends.length; i++) {
        const [end, visited] = ends[i];
        if (visited) continue;
        
        path.push(end);
        adjList[start][i][1] = true; // visited = false
        
        dfs(adjList, path, maxLength);
        
        if (path.length === maxLength) break;
        
        path.pop();
        adjList[start][i][1] = false; // visited = false
    }
}