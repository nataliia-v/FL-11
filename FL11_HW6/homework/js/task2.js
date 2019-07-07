const a = parseInt(prompt('input numeric value for point A'));
const b = parseInt(prompt('input numeric value for point B'));
const c = parseInt(prompt('input numeric value for point C'));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equivalent triangle')
    } else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else if (a !== b && b !== c && c !== a ){
        console.log('Normal triangle')
    }
} else {
    console.log('Triangle doesn’t exist');
}