function solution(food) {
    let left = '';
    for (let i = 1; i < food.length; i += 1) {
        const number = food[i];
        const repeatCnt = parseInt(number / 2);
        left += i.toString().repeat(repeatCnt);
    }
    const right = [...left].reverse().join('');
    return left + '0' + right;
}