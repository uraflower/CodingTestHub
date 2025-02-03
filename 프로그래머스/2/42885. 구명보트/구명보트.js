function solution(people, limit) {
    // 가장 작은 거 부터 뽑을 수는 없음
    // 60 40 50 50 => 2번이면 나감
    // 무조건 작은거부터 빼면 3번 걸림
    
    // 그럼 가장 limit에 가까운 녀석부터 뽑으면?
    // limit과 같거나 limit - 40 초과인 애들은 어차피 걔만 태우고 가야 함
    // 걔네 제외 나머지 애들은...
    // 두 명을 태우거나 한 명만 태우거나 해야 함
    // [60, 60, 60] => 3번
    // 일단 하나를 뽑고, 남는 사람 중에 얘랑 태울 수 있는 애 중에서도 합쳤을 때 limit과 가장 가까운 애를 뽑아
    
    let moving = 0;
    
    const restPeople = people.reduce((restPeople, weight) => {
        if (weight <= limit - 40) restPeople.push(weight);
        return restPeople;
    }, []);
    
    moving += people.length - restPeople.length;
    
    const restSorted = restPeople.sort((a, b) => Number(a) - Number(b));
    
    let start = 0;
    let end = restSorted.length - 1;
    
    while (start <= end) {
        if (start === end) {
            moving++;
            break;
        }
        
        if (restSorted[start] <= limit - restSorted[end]) {
            start++;
            end--;
        }
        else {
            end--; // 몸무게 작은 애는 최대한 남겨놓기 위해 start++대신 end--
        }
        
        moving++;
    }

    return moving;
}