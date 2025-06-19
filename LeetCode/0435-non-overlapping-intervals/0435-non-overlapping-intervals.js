/**
 * 구간이 겹치지 않게 하기 위해 최소한의 구간을 없애야 할 때, 몇 개를 없애야 하는지 반환하는 함수
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
    // start 기준으로 정렬을 한다
    // prev.end >= current.start 인 경우 겹친다는 뜻
    // 이러면 end가 큰 걸 삭제한다

    let count = 0;
    intervals.sort((a,b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        const prev = intervals[i-1];
        const current = intervals[i];

        if (prev[1] > current[0]) {
            count++;

            if (prev[1] <= current[1]) {
                current[1] = prev[1]; // current를 삭제
            }
        }
    }
    
    return count;
};