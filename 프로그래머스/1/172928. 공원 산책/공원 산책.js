function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    let [r, c] = findStartPosition(H, W, park);
    
    for (const route of routes) {
       let [direction, forward] = route.split(' ');
       forward = Number(forward);
        
       if (direction === 'N' && r-forward >= 0 && isRightPathVertical(r, c, r-forward, park)) {
           r -= forward;
       } else if (direction === 'S' && r+forward < H && isRightPathVertical(r, c, r+forward, park)) {
           r += forward;
       } else if (direction === 'W' && c-forward >= 0 && isRightPathHorizontal(r, c, c-forward, park)) {
           c -= forward;
       } else if (direction === 'E' && c+forward < W && isRightPathHorizontal(r, c, c+forward, park)) {
           c += forward;
       }
    }
    
    return [r, c];
}

function findStartPosition(H, W, park) {
    const start = 'S';    
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (park[r][c] === start) return [r, c];
        }
    }
}

// 수직 이동(row만 변경되는 이동)인 경우 'X' 포함된 길인지 확인
function isRightPathVertical(r, c, destR, park) {
    for (let moved = r;
         r < destR ? moved <= destR : destR <= moved;
         r < destR ? moved++ : moved--) {
        if (park[moved][c] === 'X') {
            return false;
        }
    }
    return true;
}

// 수평 이동(col만 변경되는 이동)인 경우 'X' 포함된 길인지 확인
function isRightPathHorizontal(r, c, destC, park) {
    const [start, end] = c < destC ? [c, destC] : [destC, c];
    const path = park[r].slice(start, end+1);
    return !path.includes('X');
}