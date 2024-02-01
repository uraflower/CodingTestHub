function solution(phoneNumber) {
    const blind = '*'.repeat(phoneNumber.length - 4);
    const fourNumbers = phoneNumber.substr(phoneNumber.length - 4);
    return blind + fourNumbers;
}