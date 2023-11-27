function solution(n, arr1, arr2) {
    const answer = arr1.map((number, i) => {
        let binary = (number | arr2[i]).toString(2);
        binary = '0'.repeat(n - binary.length) + binary;
        return binary.replaceAll('0', ' ').replaceAll('1', '#');
    })
    return answer;
}