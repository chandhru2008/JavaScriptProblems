function findOddAndEvenNumbers(start , end){
    for(let i = start; i <= end; i++){
        if(i % 2 == 0){
            console.log("Even number : ", i)
        }else{
            console.log("Odd number : ", i)
        }
    }
}
findOddAndEvenNumbers(1,100)