/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const answer = [];

    function search(currentIdx, combination, total) {
        if (total === target) {
            answer.push([...combination]); // 배열 자체를 넣으면 참조 때문에 값이 변경되므로, 복사해서 넣어야 함
            return;
        }

        if (total > target) {
            return; // backtracking
        }

        combination.push(candidates[currentIdx]);
        search(currentIdx, combination, total + candidates[currentIdx]);
        combination.pop();
        if (currentIdx + 1 < candidates.length) {
            search(currentIdx + 1, combination, total);
        }
    }

    search(0, [], 0);
    return answer;
};