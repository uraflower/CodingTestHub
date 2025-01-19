function solution(k, dungeons) {
    const explores = [];
    recurse(dungeons, k, 0, explores);
    
    return Math.max(...explores);
}

function recurse(dungeons, 현재피로도, count, explores) {
    dungeons.forEach(([최소피로도, 소모피로도], idx) => {        
        if (현재피로도 >= 최소피로도) { // 입장 가능하면...
            const newDungeons = [...dungeons];
            newDungeons.splice(idx, 1);
            
            recurse(newDungeons, 현재피로도-소모피로도, count+1, explores);
            explores.push(count+1)
        }
    });
}