function solution(t, p) {
    let cnt = 0;
    for(let i = 0; i <= t.length - p.length; i += 1) {
        const substr = t.substring(i, i + p.length);
        if (Number(substr) <= Number(p)) {
            cnt += 1;
        }
    }
    return cnt;
}