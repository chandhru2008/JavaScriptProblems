function checkNumberIsPrime(n){
    if(n < 2){
        return "Not a prime number";
    }
    else if(n == 2){
        return "Prime number";
    }
    else{
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                return "Not a prime number";
            }
        }

        return "Prime number";
    }
}

console.log(checkNumberIsPrime(71));
console.log(checkNumberIsPrime(56));