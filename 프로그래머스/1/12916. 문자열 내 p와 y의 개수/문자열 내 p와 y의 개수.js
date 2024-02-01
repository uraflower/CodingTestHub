function solution(s){
    const arr = [...s.toLowerCase()];
    let p = 0;
    let y = 0;
    
    arr.forEach((char) => {
        if (char === 'p') p++;
        else if (char === 'y') y++;
    });

    return p === y ? true : false;
}