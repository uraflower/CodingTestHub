function solution(arr, divisor) {
    const answer = arr.filter((num) => num % divisor === 0);
    if (answer.length === 0) {
        answer.push(-1)
    }
    return answer.sort((a,b) => Number(a) - Number(b));
}