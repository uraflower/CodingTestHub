const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function(){
    str = input[0];
    const result = switchCase(str);
    console.log(result);
});

function isUpperCase(char) {
    return char === char.toUpperCase();
}

function switchCase(str) {
    const formatted = Array.from(str).map((char) => {
        if (isUpperCase(char)){
            return char.toLowerCase();
        }
        return char.toUpperCase();
    });
    return formatted.join('');
}
