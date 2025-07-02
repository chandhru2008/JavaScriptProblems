function reverseTheGivenString(s){
    let reversedString = '';
    for(let i = s.length-1; 0<= i; i--){
        reversedString+=s[i];
    }
    return reversedString;
}
console.log(reverseTheGivenString("Hello world"));