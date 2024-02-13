function solution(a, b) {
    if (b < a) [a,b] = [b,a];
    
    let sum = 0;
    for (let num = a; num <= b; num++) {
        sum += num;
    }
    return sum;
}