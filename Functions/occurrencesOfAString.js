function occurrencesOfAString(s){
    let obj = {};
    for(let c of s){
        if(!obj[c]){
            obj[c] = 1
        }else{
            obj[c]++;
        }
    }

    return obj;
}
console.log(occurrencesOfAString('chandhru'));
