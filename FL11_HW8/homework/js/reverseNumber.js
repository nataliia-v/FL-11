function reverseNumber(arg) {
    let x = 0;
    if (Math.sign(arg) === -1) {
        while (Math.abs(arg) > 0) {
            x = x*10 + arg % 10;
            arg = ~~(arg / 10);
        }
        return x;
    } else {
        while (arg > 0) {
            x = x*10 + arg % 10;
            arg = ~~(arg / 10);
        }
        return x;
    }
}
console.log(reverseNumber(10000));