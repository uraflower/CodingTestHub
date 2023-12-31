const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (input) {
  solution(input);
  readline.close();
});

const ERROR_MESSAGE = 'Error!';
const UNDERSCORE = '_';

function solution(input) {
  if (isInvalid(input)) {
    console.log(ERROR_MESSAGE);
    return;
  }

  if (isCpp(input)) {
    console.log(convertToJava(input));
    return;
  }

  if (isJava(input)) {
    console.log(convertToCpp(input));
    return;
  }
  console.log(ERROR_MESSAGE);
}

function isCpp(input) {
  return /^[a-z](_?[a-z]+)*$/.test(input);
}

function isJava(input) {
  return Array.from(input).every(
    (char) => /^[a-z]$/.test(char) || /^[A-Z]$/.test(char),
  );
}

function isInvalid(input) {
  return (
    input === '' ||
    input[0] === UNDERSCORE ||
    input[input.length - 1] === UNDERSCORE ||
    input[0] === input[0].toUpperCase()
  );
}

function convertToCpp(java) {
  const cpp = Array.from(java).reduce((cpp, char) => {
    return char === char.toUpperCase()
      ? cpp + UNDERSCORE + char.toLowerCase()
      : cpp + char;
  });
  return cpp;
}

function convertToJava(cpp) {
  const java = cpp
    .split(UNDERSCORE)
    .reduce(
      (java, word) => java + word[0].toUpperCase() + word.substring(1),
      '',
    );
  return java[0].toLowerCase() + java.substring(1);
}
