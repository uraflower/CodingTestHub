function solution(sizes) {
    const sortedSizes = sizes.map(
        size => size.sort((w, h) => Number(w) - Number(h)));
    
    const widthList = [];
    const heightList = [];
    
    sortedSizes.forEach(([w, h]) => {
        widthList.push(w);
        heightList.push(h);
    });
    
    const w = Math.max(...widthList);
    const h = Math.max(...heightList);
    return w * h;
}