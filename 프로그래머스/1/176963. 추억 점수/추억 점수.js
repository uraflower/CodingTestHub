function solution(name, yearning, photo) {
    const answer = [];
    
    // photo 순회 (O(n))
    // 각 사진의 이름들을 순회 (O(n)) 하면서 점수 합
    // answer.push(합)
    
    const missing = {};
    name.forEach((key, index) => {
        missing[key] = yearning[index];
    })
    
    photo.forEach((currentPhoto) => {
       const sum = currentPhoto.reduce((sum, name) => {
           return sum += missing[name] ?? 0;
       }, 0);
       answer.push(sum);
    });
    
    return answer;
}