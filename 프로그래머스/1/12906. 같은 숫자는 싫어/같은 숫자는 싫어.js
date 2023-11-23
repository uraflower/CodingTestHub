function solution(arr) {
    const answer = arr.filter((num, index) => {
        return num !== arr[index + 1];
    });
    return answer;
}