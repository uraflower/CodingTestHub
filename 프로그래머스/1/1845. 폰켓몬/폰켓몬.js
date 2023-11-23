function solution(nums) {
    const kind = new Set(nums).size;
    const pick = nums.length / 2;
    
    if (kind <= pick) {
        return kind;
    }
    
    return pick;
}