function solution(p) {
    return transform(p);
}

function isCorrect(w) {
    const stack = [];
    
    for (const char of w) {
        if (stack.length > 0 && char === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

function seperate(w) {
    let balancedCount = 0;
    let i = 0;
    
    for (i = 0; i < w.length; i++) {
        if (i !== 0 && balancedCount === 0) break;
        
        if (w[i] === '(') balancedCount += 1;
        else balancedCount -= 1;
    }
    
    return [w.slice(0, i), w.slice(i)];
}

function transform(w) {
    // 이미 올바른 문자열이면 그대로 리턴
    if (isCorrect(w)) return w;
    
    // 1
    if (w === '') return '';
    
    // 2
    const [u, v] = seperate(w);
    console.log(`u: ${u}, v: ${v}`);
    
    // 3
    if (isCorrect(u)) return u + transform(v);
    
    // 4
    const reversedU = Array.from(u).reduce((result, char, i) => {
        if (i !== 0 && i !== u.length - 1) {
            if (char === '(') result += ')';
            else result += '(';
        }
        return result;
    }, '');
    
    return `(${transform(v)})` + reversedU;
}