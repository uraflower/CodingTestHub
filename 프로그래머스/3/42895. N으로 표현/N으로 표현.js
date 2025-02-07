function solution(N, number) {
    let answer = -1;
    const cases = Array.from({length: 9}).map(() => new Set()); // index 0은 사용하지 않음
    
    for (let i = 1; i <= 8; i++) {
        // N을 i번 반복하는 경우
        cases[i].add(Number(N.toString().repeat(i)));
        
        // cases[j], case[i-j]의 각 값끼리 사칙연산하는 경우
        for (let j = 1; j <= i / 2; j++) {
            cases[j].forEach((x) => {
                cases[i-j].forEach((y) => {
                    cases[i].add(y+x);
                    cases[i].add(y-x);
                    cases[i].add(y*x);
                    if (x!==0) cases[i].add(Math.floor(y/x));
                    cases[i].add(x-y);
                    if (y!==0) cases[i].add(Math.floor(x/y));
                })
            })
        }
        
        // 연산 결과 number이면 중단
        if (cases[i].has(number)) {
            answer = i;
            break;
        }
    }
    
    return answer;
}