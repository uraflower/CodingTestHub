function solution(numbers) {
    const primeNumbers = new Set();
    const cards = [...numbers].map((number) => ({ number, isSelected: false }));
    
    function recurse(numbers, currentNumber) {
        numbers.forEach(({ number, isSelected }, idx) => {
            if (!isSelected) {
                numbers[idx].isSelected = true;
                const current = Number(currentNumber + number);
                if (isPrimeNumber(current)) primeNumbers.add(current);
                recurse(numbers, currentNumber + number);
                numbers[idx].isSelected = false;
            }
        });
    }
    
    recurse(cards, '');
    
    return primeNumbers.size;
}

function isPrimeNumber(number) {
    if (number === 0 || number === 1) return false;
    
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) return false;
    }
    return true;
}