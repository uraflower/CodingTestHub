function solution(numbers) {
    const created = new Set();
    search(created, '', [...numbers]);
    console.log(created);
    return Array.from(created).filter((number) => isPrime(number)).length;
}

function search(created, fixed, others) {
    others.forEach((current, i) => {
        created.add(Number(fixed + current));
        
        const exceptedCurrent = [...others];
        exceptedCurrent.splice(i, 1);
        
        search(created, fixed + current, exceptedCurrent);
    })
}

function isPrime(number) {
    if (number === 0 || number === 1) return false;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) return false;
    }
    return true;
}