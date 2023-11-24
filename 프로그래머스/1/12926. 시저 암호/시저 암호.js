function solution(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lower = [...alphabet];
    const upper = [...alphabet].map((char) => char.toUpperCase());
    
    const pushed = Array.from(s).map((char) => {
       if (char === ' ') {
           return char;
       }
        
       const indexOfChar = alphabet.indexOf(char.toLowerCase());
       let pushedIndex = indexOfChar + n;
       if (pushedIndex >= alphabet.length) {
          pushedIndex = pushedIndex % alphabet.length;
       }
        
       if (char === char.toLowerCase()) {
           return lower[pushedIndex];
       }
       else {
           return upper[pushedIndex];
       }
    });
    
    return pushed.join('');
}