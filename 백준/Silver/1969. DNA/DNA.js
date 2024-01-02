const fs = require('fs')
const [first, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = first.split(' ').map(Number);
solution(N, M, rest);

function solution(N, M, DNAs) {
  const countArray = countNucleotides(M, DNAs);

  let minDNA = '';
  let hammingDistance = 0;

  countArray.forEach((ATGC) => {
    const [selected, maxValue] = Object.entries(ATGC).find(
      ([_, cnt]) => cnt === Math.max(...Object.values(ATGC)),
    );

    hammingDistance += N - maxValue;
    minDNA += selected;
  });

  console.log(minDNA);
  console.log(hammingDistance);
}

function countNucleotides(M, DNAs) {
  const countArray = Array.from({ length: M }).map(() => ({
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }));

  DNAs.forEach((DNA) => {
    Array.from(DNA).forEach((nucleotide, index) => {
      countArray[index][nucleotide]++;
    });
  });

  return countArray;
}
