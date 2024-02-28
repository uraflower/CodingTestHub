function solution(s, skip, index) {
    const asc = Array.from('abcdefghijklmnopqrstuvwxyz')
        .filter((alphabet) => !skip.includes(alphabet));
    return Array.from(s).map((char) => {
        return asc[(asc.indexOf(char) + index) % asc.length];
    }).join('');
}