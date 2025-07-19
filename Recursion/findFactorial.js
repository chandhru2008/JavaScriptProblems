function factorial (n){
    if(n == 1){
        return n;
    }
    const result =  factorial(n-1) * n
    return result;
}
console.log(factorial(6))