function solution(jobs) {
    const queue = [];
    
    // 요청 순서대로 정렬, 요청시간이 같다면 소요시간 짧은 순으로 정렬
    const sorted = [...jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1])];
    
    let currentTime = 0;
    let totalTurnaroundTime = 0;
    let completedJobs = 0; // 완료한 작업 수
    
    while (sorted.length || queue.length) {     
        // (현재시간 >= 요청시간) 인 작업들을 큐에 삽입
        while (sorted.length > 0 && currentTime >= sorted[0][0]) {
            queue.push(sorted.shift());
        }
        
        if (queue.length) {
            // 큐에 작업이 있으면, 큐에서 꺼내고 반환시간 계산
            const currentJob = queue.sort((a, b) => a[1] - b[1]).shift();
            currentTime += currentJob[1];
            totalTurnaroundTime += currentTime - currentJob[0];
        } else if (!queue.length && sorted.length) {
            // 큐가 비었으면, 다음 작업을 시작할 수 있도록 시간을 점프
            const currentJob = sorted.shift();
            currentTime = currentJob[0] + currentJob[1];
            totalTurnaroundTime += currentTime - currentJob[0];
        }
    }
    
    return Math.floor(totalTurnaroundTime / jobs.length);
}