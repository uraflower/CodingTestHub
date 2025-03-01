function solution(begin, target, words) {
    return bfs(begin, target, words);
}

function bfs(begin, target, words) {
    const visited = new Set();
    const queue = [[begin, 0]];
    
    while (queue.length) {
        const [current, changedCount] = queue.shift();
        
        for (let word of words) {
            if (visited.has(word)) continue;
            
            let diff = 0;
            for (let i = 0; i < word.length && diff <= 1; i++) {
                if (word[i] !== current[i]) diff++;
            }

            if (diff <= 1) {
                if (word === target) return changedCount + 1;
                
                queue.push([word, changedCount + 1]);
                visited.add(word);
            }
        }
    }
    
    return 0;
}