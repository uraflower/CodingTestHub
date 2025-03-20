function solution(game_board, table) {
    // 0. 초기 세팅
    // 게임보드의 0과 1을 반전 => 항상 1이 유효한 모양을 나타내게 함
    let answer = 0;
    const valid = 1;
    const gameBoard = game_board.map(row => {
        return row.map(value => value === 1 ? 0 : 1);
    });
    
    // 1. 테이블에서 퍼즐 조각을 떼어냄
    const puzzles = Array.from({length: 7}).map(() => []);

    for (let r = 0; r < table.length; r++) {
        for (let c = 0; c < table[0].length; c++) {
            if (table[r][c] === valid) {
                const { size, coordinates } = bfs(table, r, c, valid);
                puzzles[size].push(normalize(coordinates));
            }
        }
    }
    
    // 2. 게임보드에서 빈 틀을 떼어냄
    for (let r = 0; r < gameBoard.length; r++) {
        for (let c = 0; c < gameBoard[0].length; c++) {
            if (gameBoard[r][c] === valid) {
                const { size, coordinates } = bfs(gameBoard, r, c, valid);
                
                // 떼어낸 빈 틀의 칸 수와 같은 칸 수의 조각이 있으면, 일치하는지 맞춰보기                
                for (let idx = 0; idx < puzzles[size].length; idx++) {
                    const puzzle = puzzles[size][idx];
                    
                    // 일치하면 해당 퍼즐은 퍼즐 조각 모음에서 제거
                    if (isMatched(normalize(coordinates), puzzle)) {
                        answer += size;
                        puzzles[size].splice(idx, 1);
                        break;
                    }
                }
            }
        }
    }
    
    return answer;
}

// 퍼즐을 나타내는 좌표 값을 바탕으로 2차원 배열의 퍼즐을 만들어 반환
function normalize(coordinates) {
    const sorted = coordinates.sort();
    const [minR, minC] = sorted.reduce(([minR, minC], [r, c]) => {
        minR = Math.min(minR, r);
        minC = Math.min(minC, c);
        return [minR, minC];
    }, [99, 99]);
    const normalized = sorted.map(([r, c]) => [r-minR, c-minC]);
    
    const [maxR, maxC] = normalized.reduce(([maxR, maxC], [r, c]) => {
        maxR = Math.max(maxR, r+1);
        maxC = Math.max(maxC, c+1);
        return [maxR, maxC];
    }, [0, 0]);
    
    const grid = Array.from({ length: maxR }).map(() => Array.from({ length: maxC }).fill(0));
    normalized.forEach(([r, c]) => {
        grid[r][c] = 1;
    });
    
    return grid;
}

// board: 순회할 2차원 배열. 방문 여부를 여기에 바로 체크함.
// startR, startC: board에서 순회를 시작할 row, col 인덱스
// valid: board에서 순회할 때 유효하다고 판단할 값 (game_board이면 0, table이면 1)
function bfs(board, startR, startC, valid) {
    const queue = [[startR, startC]];
    let size = 1;
    
    const coordinates = [[startR, startC]];
    
    // 순회를 시작하는 칸을 방문했다고 체크
    board[startR][startC] = -1;
    
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    
    while (queue.length) {
        let [r, c] = queue.shift();
        
        for (let i = 0; i<4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            // 탐색 가능하고, 방문한 적 없으면, 방문
            if (0<=nr && nr<board.length && 0<=nc && nc<board.length && board[nr][nc] === valid) {
                board[nr][nc] = -1;
                queue.push([nr, nc]);
                coordinates.push([nr, nc]);
                size += 1;
            }
        }
    }
    
    return { size, coordinates };
}

// frame와 puzzle 일치 여부 반환
function isMatched(frame, puzzle) {
    let prev = puzzle; // 회전하기 이전 상태 저장
    
    for (let i = 0; i < 4; i++) {
        const row = prev[0].length; // prev의 열 길이 === rotated의 열 길이
        const col = prev.length; // prev의 행 길이 === rotated의 행 길이
        const rotated = Array.from({ length: row }).map(() => Array.from({ length: col }));
        
        // 회전 (조각의 각 행을 rotated의 맨 끝 열에서부터 채우기)
        prev.forEach((row, prevR) => {
            for (let rotatedR = 0; rotatedR < prev[0].length; rotatedR++) {
                rotated[rotatedR][prev.length - 1 - prevR] = row[rotatedR];
            }
        });
        
        // prev 갱신
        prev = rotated;
        
        // 격자 크기가 일치하지 않으면, 비교하지 말고 다음 회전
        if (frame.length !== row || frame[0].length !== col) continue;
        
        // 일치하는지 비교
        let result = true;
        for (let r = 0; r < rotated.length && result; r++) {
            for (let c = 0; c < rotated[0].length; c++) {
                if (rotated[r][c] !== frame[r][c]) {
                    result = false;
                    break;
                }
            }
        }
        
        if (result) return result;
    }
    
    return false;
}