function solution(progresses, speeds) {
    const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

    let pointer = 0;
    return days.reduce((deploys, day, i) => {
        if (days[pointer] >= day) {
            deploys[deploys.length - 1] += 1;
        } else {
            deploys.push(1);
            pointer = i;
        }
        return deploys;
    }, [0]);
}