function solution(fees, records) {
    const [basicTime, basicFee, additionalTime, additionalFee] = fees;
    
    // 차량 별 입출차 시간 정리
    const inOutTimePerCar = {}; // carId: { IN[], OUT[] } 으로 구성
    
    records.forEach((line) => {
        const [time, carId, inOut] = line.split(' ');
        const [hour, min] = time.split(':').map(Number);
        if (!inOutTimePerCar[carId]) {
            inOutTimePerCar[carId] = { IN: [], OUT: [] };
        }
        inOutTimePerCar[carId][inOut].push(hour * 60 + min);
    });
    
    
    // 차량 별 누적 주차 시간 계산 및 요금 책정
    const feePerCar = []; // [carId, fee] 으로 구성
    
    for (const [carId, { IN: ins, OUT: outs }] of Object.entries(inOutTimePerCar)) {
        const totalTime = ins.reduce((acc, inTime, i) => {
            const outTime = outs[i] ?? 23 * 60 + 59;
            return acc + outTime - inTime;
        }, 0);
        
        let totalFee = basicFee;
        if (totalTime > basicTime) {
            totalFee += Math.ceil((totalTime - basicTime) / additionalTime) * additionalFee;
        }
        
        feePerCar.push([carId, totalFee]);
    }
    
    return feePerCar.sort((a, b) => a[0] - b[0]).map(([id, fee]) => fee);
}