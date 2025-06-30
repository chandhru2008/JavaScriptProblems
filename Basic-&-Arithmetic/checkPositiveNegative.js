function checkPositiveNegative(num1, num2) {
    return (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);
}
console.log(checkPositiveNegative(-1, 5)); 
console.log(checkPositiveNegative(5, -1)); 
console.log(checkPositiveNegative(-1, 0)); 
console.log(checkPositiveNegative(0, -1)); 
console.log(checkPositiveNegative(3, 4));  
