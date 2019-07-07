const a1 = parseInt(prompt('input numeric value a1 for point A'));
const a2 = parseInt(prompt('input numeric value a2 for point A'));
const b1 = parseInt(prompt('input numeric value b1 for point B'));
const b2 = parseInt(prompt('input numeric value b2 for point B'));
const c1 = parseInt(prompt('input numeric value c1 for point C'));
const c2 = parseInt(prompt('input numeric value c2 for point C'));
const inTwo = 2;

if ((a1 + b1) / inTwo === c1 && (a2 + b2) / inTwo === c2) {
    console.log(true);
} else {
    console.log(false);
}