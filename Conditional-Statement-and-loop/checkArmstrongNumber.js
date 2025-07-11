function checkArmstrongNumber(n){
    let string = n.toString();
    let power = string.length;
    let result = 0;
    for(let i = 0; i < string.length; i++){
        let number = Number(string[i]);
        result+= number**power;
    }
    if(result == n){
        return true
    }else{
        return false;
    }
}
console.log(checkArmstrongNumber(370))