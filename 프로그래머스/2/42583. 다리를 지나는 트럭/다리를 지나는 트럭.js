function solution(bridgeLength, weight, truckWeights) {
    let onBridge = [];
    let onBridgeSum = 0;
    let time = 1;
    
    do {
        if (weight >= onBridgeSum + truckWeights[0]) {
            const truckWeight = truckWeights.shift();
            onBridge.push({
                truckWeight,
                remainingTime: bridgeLength
            });
            onBridgeSum += truckWeight;
        }

        onBridge = onBridge.reduce((arr, {truckWeight, remainingTime}) => {
            if (remainingTime > 1) arr.push({truckWeight, remainingTime: remainingTime - 1});
            else onBridgeSum -= truckWeight;
            return arr;
        }, []);
        
        time++;
    } while (truckWeights.length > 0 || onBridge.length > 0)
    
    return time;
}