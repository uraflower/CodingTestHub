function solution(operations) {
    const queue = [];    
    
    operations.forEach((operation) => {
        const [command, data] = operation.split(' ');
        
        if (command === 'I') queue.push(Number(data));
        else if (command === 'D') {
            queue.sort((a, b) => Number(a) - Number(b));
            
            if (data === '1') queue.pop();
            else if (data === '-1') queue.shift();
        }
    });
    
    queue.sort((a, b) => Number(a) - Number(b));
    const max = queue[queue.length - 1] ?? 0;
    const min = queue[0] ?? 0
    return queue.length === 0 ? [0, 0] : [queue[queue.length - 1], queue[0]];
}