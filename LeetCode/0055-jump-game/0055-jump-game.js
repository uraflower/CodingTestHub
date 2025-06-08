/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    // 마지막 인덱스에서 첫 인덱스로 거꾸로 돌면서
    // 필요한 점프 횟수를 변수에 저장
    // 만약 인덱스 i의 값이 필요한 점프 횟수를 충족한다면 초기화

    if (nums.length <= 1) return true;

    let need = 1;
    let answer = true;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] >= need) {
            need = 1;
            answer = true;
        } else {
            need += 1;
            answer = false;
        }
    }

    return answer;
};