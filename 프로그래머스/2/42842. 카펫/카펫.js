function solution(brown, yellow) {
    const resultsOfYellow = putYellowCarpet(yellow);
    const resultsOfBrown = putBrownCarpet(brown);
    
    for (const [row, col] of resultsOfYellow) {
        
        if (resultsOfBrown.find(([row2, col2]) => row === row2 && col === col2)) {
            return [row, col];        
        }
    }
}

function putYellowCarpet(numberOfYellowCarpet) {
    let row = numberOfYellowCarpet + 2;
    let col = 3;
    
    const results = [];
    for (let i = 1; row >= col; i++) {
        results.push([row, col]);
        
        row = (numberOfYellowCarpet / (i+1)) + 2;
        col = (i+1) + 2;
    }
    
    return results;
}

function putBrownCarpet(numberOfBrownCarpet) {
    const 둘레 = numberOfBrownCarpet + 4;
    let col = 3;
    let row = (둘레 - (col * 2)) / 2;
    
    const results = [];
    while (row >= col) {
        results.push([row, col]);
        col += 1;
        row -= 1;
    }
    
    return results;
}

// 갈색 카펫 24개를 테두리 한 줄로 까는 방법은...
// 12 + 12 + 2 + 2 => 세로는 3 이상이어야 하므로 불가능
// 11 + 11 + 3 + 3 => 28 - 4(각 모서리 겹치니까)
// 10 + 10 + 4 + 4 => 28 - 4
// 9 + 9 + 5 + 5 
// 8 + 8 + 6 + 6
// 7 + 7 + 7 + 7
// 6 + 6 + 8 + 8 => 가로가 세로 이상이어야 하므로 불가능


// 노란 카펫 24개를 까는 방법은...
// 1 * 24 => 가로의 길이는 24 + 2 => 26, 세로의 길이는 1 + 2 => 3 (26, 3)
// 2 * 12 => 가로의 길이는 12 + 2 => 14, 세로의 길이는 2 + 2 => 4 (14, 4)
// 3 * 8 => 가로의 길이는 8 + 2 => 10, 세로의 길이는 3 + 2 => 5 (10, 5)
// 4 * 6 => 가로의 길이는 6 + 2 => 8, 세로의 길이는 4 + 2 => 6 (8, 6)
// 6 * 4 => 가로의 길이는 4 + 2 => 6, 세로의 길이는 6 + 2 => 8. 가로가 세로 이상이어야 하므로 불가능!