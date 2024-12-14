let input = prompt("Write the year here");
let inputYear = parseInt(input);

let zodiac = (inputYear / 4) % 12;

console.log(zodiac);
