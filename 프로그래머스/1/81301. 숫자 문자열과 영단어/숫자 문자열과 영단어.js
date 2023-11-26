function solution(s) {
    const NUMBERS = ['zero', 'one', 'two', 'three', 'four',
                    'five',	'six', 'seven', 'eight', 'nine'];
    let answer = NUMBERS.reduce((str, number, i) => {
        return str.replaceAll(number, i);
    }, s);
    return Number(answer);
}