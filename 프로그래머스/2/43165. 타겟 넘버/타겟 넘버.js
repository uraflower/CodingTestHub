function solution(numbers, target) {
    let count = 0;
    
    function recurse(idx, sum) {
        const added = sum + numbers[idx];
        const subtracted = sum - numbers[idx];
        
        if (idx + 1 === numbers.length) {
            if (added === target) count++;
            if (subtracted === target) count++;
            
            return;
        }
        
        recurse(idx + 1, added);
        recurse(idx + 1, subtracted);
    }
    
    recurse(0, 0);
    return count;
}

