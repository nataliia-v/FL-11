function isInteger(arg) {
    return (arg ^ 0) === arg;
}

console.log(isInteger(5.1));