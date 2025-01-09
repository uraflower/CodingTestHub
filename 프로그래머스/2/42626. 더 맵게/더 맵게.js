class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    add (key) {
        this.heap.push(key);
        
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2);
        
        // swap
        while (parent !== 0 && this.heap[child] < this.heap[parent]) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
            
            child = parent;
            parent = Math.floor(child / 2);
        }
    }
    
    remove () {
        if (this.heap.length === 1) return null;
        
        const root = this.heap[1];
        const target = this.heap.pop();
        let idx = 1;
        if (this.heap.length !== 1) this.heap[idx] = target;
        
        // swap
        while (target > this.heap[2*idx] || target > this.heap[2*idx + 1]) {
            let minChildIdx = 2*idx;
            if (this.heap[2*idx] > this.heap[2*idx + 1]){
                minChildIdx = 2*idx + 1;
            }
            
            this.heap[idx] = this.heap[minChildIdx];
            this.heap[minChildIdx] = target;
            idx = minChildIdx;
        }
        return root;
    }
    
    getRoot () {
        return this.heap[1];
    }
    
    getLength () {
        return this.heap.length;
    }
}


function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach((scoville) => heap.add(scoville));
    
    let answer = 0;
    
    while (heap.getRoot() < K && heap.getLength() > 2) {
        answer += 1;
        const mixed = heap.remove() + (heap.remove() * 2);
        heap.add(mixed);
    }
    
    return heap.heap.slice(1,).some((scoville, i) => scoville < K) ? -1 : answer;
}