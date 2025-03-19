function solution(n, arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let bin1 = arr1[i].toString(2);
        let bin2 = arr2[i].toString(2);
        
        bin1 = '0'.repeat(n - bin1.length) + bin1;
        bin2 = '0'.repeat(n - bin2.length) + bin2;
        
        const result = Array.from(bin1).map((v, i) => v === '1' || bin2[i] === '1' ? '#' : ' ').join('');
        
        answer.push(result);
    }
    
    return answer;
}