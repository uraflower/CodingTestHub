function solution(n) {
    const numArr = [...String(n)]
    const sum = numArr.reduce((sum, num) => sum += Number(num), 0);
    return sum;
}