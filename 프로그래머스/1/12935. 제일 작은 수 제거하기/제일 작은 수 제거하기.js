function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);
    return [...arr.slice(0, minIndex), ...arr.slice(minIndex+1)];
}