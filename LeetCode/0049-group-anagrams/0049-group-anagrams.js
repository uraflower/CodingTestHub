/**
 * 애너그램끼리 묶어서 반환하는 함수
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const groups = {};

    strs.forEach((str) => {
        const key = [...str].sort().join('');
        if (!groups[key]) groups[key] = [];
        groups[key].push(str);
    });

    return  Object.values(groups)
};
