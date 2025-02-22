function solution(maps) {
    // 시작 위치로부터 최단 거리를 나타내는 이중 배열을 maps를 복사해 만듦
    const distances = maps.map((row) => [...row]);
    
    const y = distances[0].length - 1;
    const x = distances.length - 1;
    
    bfs(distances, x, y);
    
    return distances[x][y] === 1 ? -1 : distances[x][y];
}

function bfs(distances, x, y) {
    const queue = [[0,0]];
    let queuePointer = 0;
    
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    
    while (queuePointer < queue.length) {
        const [r, c] = queue[queuePointer];
        if (r === x && c === y) break; // 도착 위치이면 bfs 종료
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            // nr, nc가 접근 가능한 위치이고, 벽이 아니면서 처음 방문하는 길이면
            if (0<=nr && nr<=x && 0<=nc && nc<=y && distances[nr][nc] === 1) {
                queue.push([nr, nc]);
                distances[nr][nc] = distances[r][c] + 1;
            }
        }
        queuePointer++;
    }
}
