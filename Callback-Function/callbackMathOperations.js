function operate(a, b, callback) {
    return callback(a, b);
}
function multiply(x, y) {
    return x * y;
}
function add(x, y) {
    return x * y;
}


console.log("Multiply:", operate(4, 5, multiply));
console.log("Add:", operate(4, 5, add))