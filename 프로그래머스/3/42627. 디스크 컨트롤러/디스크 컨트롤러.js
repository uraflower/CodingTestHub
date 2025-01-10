class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    isAPriorToB(a, b) {
        // 우선순위: 소요시간 작은 거 > 요청 시점 빠른 거 > 번호 작은 거
        return a?.timeTaken < b?.timeTaken ||
               (a?.timeTaken === b?.timeTaken && a?.arrivedAt < b?.arrivedAt) ||
               (a?.timeTaken === b?.timeTaken && a?.arrivedAt === b?.arrivedAt && a?.id < b?.id);
    }
    
    push(job) {
        this.heap.push(job);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);
        
        while (this.isAPriorToB(job, this.heap[parentIdx])) {
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }
    
    remove() {
        if (this.isEmpty()) return null;
        
        const removed = this.heap[1];
        const last = this.heap.pop();
        let currentIdx = 1;
        if (this.isEmpty()) return removed;
        
        this.heap[1] = last;
        
        while (this.isAPriorToB(this.heap[currentIdx * 2], last) ||
               this.isAPriorToB(this.heap[currentIdx * 2 + 1], last)) {
            if (!this.heap[currentIdx * 2 + 1] ||
               this.isAPriorToB(this.heap[currentIdx * 2], this.heap[currentIdx * 2 + 1])) {
                [this.heap[currentIdx], this.heap[currentIdx * 2]] = [this.heap[currentIdx * 2], last];
                currentIdx = currentIdx * 2;
            } else {
                [this.heap[currentIdx], this.heap[currentIdx * 2 + 1]] = [this.heap[currentIdx * 2 + 1], last];
                currentIdx = currentIdx * 2 + 1;
            } 
        }
        
        return removed;
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }
}


function solution(jobs) {
    const queue = new MinHeap();
    
    // 요청 순서대로 정렬, 요청시간이 같다면 소요시간 짧은 순으로 정렬
    const sorted = jobs
        .map(([arrivedAt, timeTaken], id) => ({ arrivedAt, timeTaken, id }))
        .sort((a, b) => {
            if (a.arrivedAt !== b.arrivedAt) return a.arrivedAt - b.arrivedAt;
            return a.timeTaken - b.timeTaken;
        });
    
    let currentTime = 0;
    let currentJob = null;
    let totalTurnaroundTime = 0;
    let isWorking = false;
    let jobPointer = 0;
    let completedJobs = 0; // 완료한 작업 수
    
    while (completedJobs < jobs.length) {     
        // (현재시간 >= 요청시간) 인 작업들을 큐에 삽입
        while (currentTime >= sorted[jobPointer]?.arrivedAt) {
            queue.push(sorted[jobPointer]);
            jobPointer += 1;
        }
        
        if (isWorking) {
            // 작업 종료 시점인 경우, 반환시간 계산
            isWorking = false;
            completedJobs += 1;
            totalTurnaroundTime += currentTime - currentJob.arrivedAt;
            currentJob = null;
        }
        
        if (!isWorking) {
            // 큐가 비었는데 작업이 남아있으면, 해당 작업을 시작할 수 있도록 시간을 점프
            if (queue.isEmpty()) {
                isWorking = true;
                currentJob = { ...sorted[jobPointer] };
                currentTime = currentJob.arrivedAt + currentJob.timeTaken;
                jobPointer += 1;
            } 
            // 큐에서 하나 빼서 처리
            else {
                isWorking = true;
                currentJob = { ...queue.remove() };
                currentTime += currentJob.timeTaken;
            }
        }
    }
    
    return Math.floor(totalTurnaroundTime / jobs.length);
}