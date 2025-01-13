function solution(answers) {
    const 수포자1 = [1,2,3,4,5];
    const 수포자2 = [2,1,2,3,2,4,2,5];
    const 수포자3 = [3,3,1,1,2,2,4,4,5,5];
    
    const scores = [0,0,0];
    answers.forEach((answer, i) => {
        if (answer === 수포자1[i % 수포자1.length]) scores[0] += 1;
        if (answer === 수포자2[i % 수포자2.length]) scores[1] += 1;
        if (answer === 수포자3[i % 수포자3.length]) scores[2] += 1;
    });
    
    const max = Math.max(...scores);
    return scores.reduce((arr, score, idx) => {
        if (score === max) arr.push(idx + 1);
        return arr;
    }, []);
}