function solution(month, date) {
    const DAY = ['THU', 'FRI','SAT','SUN','MON','TUE','WED'];
    const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const fullDates = dates.slice(0, month - 1).reduce((sum, dateOfMonth) => {
        return sum + dateOfMonth;
    }, date);
    
    const answer = DAY[fullDates % 7];
    return answer;
}