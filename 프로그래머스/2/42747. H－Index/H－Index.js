function solution(citations) {
    const sorted = citations.sort((a,b) => a - b);
    
    let h = 0;
    
    while (sorted.filter((citation) => citation >= h).length >= h) {
       h++
    }
    
    return h-1;
}