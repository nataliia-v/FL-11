function getMin() {
    return Math.min.apply(null, arguments);
}

console.log(getMin(-23, 5, -3));