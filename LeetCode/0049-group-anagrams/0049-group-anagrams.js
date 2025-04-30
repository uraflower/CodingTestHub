/**
 * 애너그램끼리 묶어서 반환하는 함수
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const groups = new Map();

    strs.forEach((str) => {
        let pushed = false;
        const counterString = countChar(str);

        for (const key of groups.keys()) {
            if (key.length === counterString.length && compare(key, counterString)) {
                groups.set(key, [...groups.get(key), str]);
                pushed = true;
            }
        }

        if (!pushed) {
            groups.set(counterString, [str]);
        }
    });

    const answer = [];
    for (const value of groups.values()) {
        answer.push(value);
    }
    return answer;
};

function countChar(str) {
    const counter = {};
    for (let char of str) {
        counter[char] = counter[char] + 1 || 1;
    }
    counter.length = str.length;
    return counter;
}

function compare(a, b) {
    return Object.keys(a).length === Object.keys(b).length
        && Object.entries(a).every(([keyA, valueA]) => b[keyA] === valueA);
}