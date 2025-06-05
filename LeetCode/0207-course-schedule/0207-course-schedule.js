/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    // 강의 간 관계 그래프 생성
    const relation = Array.from({ length: numCourses }).map(() => new Set());
    for (const [current, prev] of prerequisites) {
        relation[current].add(prev);
    }

    const traversing = new Set(); // 수강할 수 있는지 확인하기 위해 순회중인 강의
    const finished = new Set(); // 수강 가능한 강의

    function dfs(current) {
        if (traversing.has(current)) {
            return false;
        }
        if (finished.has(current)) {
            return true;
        }
        traversing.add(current);

        for (const prev of relation[current]) {
            if (!dfs(prev)) {
                return false;
            }
        }

        traversing.delete(current);
        finished.add(current)

        return true;
    }

    // 강의마다 순회
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};