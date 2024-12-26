function solution(priorities, location) {
    const countPriority = priorities.reduce((obj, p) => {
        obj[p] = obj[p] ? obj[p] + 1 : 1;
        return obj;
    }, {});
    
    const orders = Array.from({length: priorities.length});
    
    let executionOrder = 1;
    let pointer = 0; // 순회를 위한 포인터
    
    while (!orders[location]) {
        const current = priorities[pointer];   
        
        // 실행한 적 없고,
        // 나보다 높은 우선순위가 없다면, 실행
        if (!orders[pointer] && 
            !Object.keys(countPriority).some((priority) => +priority > current)) {
            orders[pointer] = executionOrder;
            executionOrder += 1;        
            
            if (countPriority[current] === 1) delete countPriority[current];
            else countPriority[current] -= 1;
        }
        
        pointer = (pointer + 1) % (orders.length);
    }
    
    return orders[location];
}