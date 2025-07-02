function checkPalindromeOrNot(s){

    let end = s.length - 1;
    let start = 0;

    while(end > start){
        if(s[end] == s[start]){
            start ++;
            end--
        }
        else{
            return false;
        }
    }

    return true
}

console.log(checkPalindromeOrNot('rarara'));