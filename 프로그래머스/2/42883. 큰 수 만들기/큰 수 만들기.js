function solution(number, k) {
    let restRemovalCount = k;
    const stack = [];
    let current = 0;
    
    while (current < number.length) {        
        while (restRemovalCount && stack[stack.length - 1] < number[current]) {
            stack.pop();
            restRemovalCount--;
        }
            
        stack.push(number[current]);
        current++;
    }
    
    while (restRemovalCount) {
        stack.pop();
        restRemovalCount--;
    }
    
    return stack.join('');
}
