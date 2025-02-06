function solution(routes) {
    // 진출 시점 기준 오름차순 정렬
    const sorted = routes.sort((a, b) => Number(a[1]) - Number(b[1]));
    
    let camera = sorted[0][1];
    let cameras = 1;
    
    for (let i = 0; i < sorted.length; i++) {
        const [currentIn, currentOut] = sorted[i];
        
        if (camera < currentIn) {
            camera = currentOut;
            cameras++;
        }
    }
    
    return cameras;
}