function addOne(x) {
    return x + 1;
}

function pipe(x, ...fns) {

    let result = x;
    for (let fn of fns) {
        result = fn(result)
    }
    return result;
}

console.log(pipe(1, addOne, addOne, addOne));