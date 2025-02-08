function solution(triangle) {
    const memo = Array.from({ length: triangle.length }).map(() => []);

    function recurse(memo, depth, idx) {
        // 메모한 적 없으면 재귀 돌려서 메모
        if (!memo[depth][idx]) {
            const leftChild = depth+1 === memo.length-1 ? triangle[depth+1][idx] : recurse(memo, depth+1, idx);
            const rightChild = depth+1 === memo.length-1 ? triangle[depth+1][idx+1] : recurse(memo, depth+1, idx+1);
            memo[depth][idx] = triangle[depth][idx] + Math.max(leftChild, rightChild);
        }

        return memo[depth][idx];
    }
    
    return recurse(memo, 0, 0);
}