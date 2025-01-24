function solution(word) {
    const characters = ['A', 'E', 'I', 'O', 'U'];
    const arr = [
        [1, 782, 1563, 2344, 3125],
        [1, 157, 313, 469, 625],
        [1, 32, 63, 94, 125],
        [1, 7, 13, 19, 25], 
        [1, 2, 3, 4, 5]
    ]
    
    const answer = [...word].reduce((cnt, char, i) => {
        const j = characters.indexOf(char);
        return cnt + arr[i][j];
    }, 0);
    
    return answer;
    
    // word 를 하나씩 보면서
    // 맨 앞이 A이면 1, E이면 782, I이면 1563, 2344, 3125 (780 + 1 => 781씩 등차)
    // 두 번째 A이면 1, E이면 157, I이면 313, O이면 469, U이면 625 (155개 + 1 => 156씩 등차)
    // 세 번째 A이면 1, E이면 32, I이면 63, O이면 94, U이면 125 (30개 + 1 => 31. 31씩 등차)
    // 네 번째 A이면 1, E이면 7, I이면 13, O이면 19, U이면 25 (5개 + 1 => 6. 6씩 등차)
    // 마지막이 A이면 1, E이면 2, I이면 3, O이면 4, U이면 5
}