function solution(clothes) {
    const closet = clothes.reduce((closet, [name, type]) => {
        closet[type] = closet[type] ? closet[type] + 1 : 2; // 초깃값: 입거나 안 입거나니까 2
        return closet;
    }, {});
    
    const sum = Object.values(closet).reduce((sum, count) => {
        sum *= count;
        return sum;
    }, 1)
           
    return sum - 1
}