function solution(numbers) {
    let count = 0;
    numbers.forEach((number, i) => {
        for (let j = i + 1; j < numbers.length; j += 1) {
            count += numbers.slice(j + 1)
                .filter((x) => x === -(number + numbers[j]))
                .length;
        }
    });
    return count;
}