function solution(places) {
    // P에서 상하좌우 4방을 확인
    // 만약 P이면 즉시 0 리턴
    // 만약 O이면 O에서 상하좌우 4방을 확인
    //   만약 시작점 P가 아닌 또 다른 P가 있다면 즉시 0 리턴
    
    const LEN = 5;
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    
    return places.map((place) => {
        const mappedPlace = place.map((row) => [...row]);
        
        for (let r = 0; r < LEN; r++) {
            const row = mappedPlace[r];
            for (let c = 0; c < LEN; c++) {
                if (mappedPlace[r][c] !== 'P') continue;
                
                for (let i = 0; i<4; i++) {
                    let nri = r + dr[i];
                    let nci = c + dc[i];
                    
                    if (0>nri || nri>=LEN || 0>nci || nci>=LEN) continue;
                    
                    if (mappedPlace[nri][nci] === 'P') return 0;
                    if (mappedPlace[nri][nci] === 'O') {
                        for (let j = 0; j<4; j++) {
                            let nrj = nri + dr[j];
                            let ncj = nci + dc[j];
                            
                            if (0>nrj || nrj>=LEN || 0>ncj || ncj>=LEN || (nrj === r && ncj === c)) continue;
                            
                            if (mappedPlace[nrj][ncj] === 'P') {
                                return 0;
                            }
                        }
                    }
                }
            }
        }
        
        return 1;
    });
}
