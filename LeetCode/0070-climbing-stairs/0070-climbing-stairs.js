/**
 * 한 칸 또는 두 칸씩 n개의 계단을 오르는 방법의 가짓수를 반환하는 함수
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  return climb(n);
};

function climb(stair) {
  if (stair === 1) return 1
  if (stair === 2) return 2;

  return climb(stair - 1) + climb(stair - 2);
}
