function solution(sizes) {
    const sortedSizes = sizes.map(
        size => size.sort((w, h) => Number(w) - Number(h)));
    
    const [widthList, heightList] = sortedSizes.reduce(([wAcc, hAcc], [w, h]) => {
        wAcc.push(w);
        hAcc.push(h);
        return [wAcc, hAcc];
    }, [[], []]);
    
    const w = Math.max(...widthList);
    const h = Math.max(...heightList);
    return w * h;
}