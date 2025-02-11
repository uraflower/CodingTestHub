function solution(m, n, puddles) {
    // 경로의 가짓수를 2차원 배열에 저장하고, 경로로 나아가면서 가짓수끼리 더하기
    // 학교에서 출발해서 집으로 가기 => 쓸모없는 경로로 안 가도 됨
    
    // n * m 이 아니라 m * n으로 만든 이유는 학교 좌표가 (m, n)이라고 해서임
    const map = Array.from({ length: m }).map(() => Array.from({ length: n }).fill(0));
    puddles.forEach(([x, y]) => {
        map[x-1][y-1] = -1; // 웅덩이 표시
    });
    
    map[0][0] = 1;
    return recurse(m-1, n-1, map);
}

function recurse(x, y, map) {
    if (map[x][y] !== 0) return map[x][y];
    
    // 왼쪽으로 이동
    if (x-1 >= 0 && map[x-1][y] !== -1) {
        if (map[x-1][y] === 0) {
            map[x-1][y] = recurse(x-1, y, map);
        }
        
        map[x][y] = (map[x][y] + map[x-1][y]) % 1000000007;
    }
    
    // 위쪽으로 이동
    if (y-1 >= 0 && map[x][y-1] !== -1) {
        if (map[x][y-1] === 0) {
            map[x][y-1] = recurse(x, y-1, map);
        }
        
        map[x][y] = (map[x][y] + map[x][y-1]) % 1000000007;
    }
    
    return map[x][y];
}