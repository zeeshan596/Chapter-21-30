let input = prompt("Enter positive integer:");
let number = parseFloat(input);
document.writeln(`Number: ${number}<br>`)
let round = Math.round(number);
document.writeln(`Round off value: ${round}<br>`);
let floor = Math.floor(number);
document.writeln(`Floor value: ${floor}<br>`)
let ceil = Math.ceil(number);
document.writeln(`Ceil value: ${ceil}`)