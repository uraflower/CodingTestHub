function solution(strings, n) {
    const answer = strings.sort((current, next) => {
        if (current[n] === next[n]) {
            return current.localeCompare(next);
        }
        return current[n].localeCompare(next[n]);
    });
    return answer;
}