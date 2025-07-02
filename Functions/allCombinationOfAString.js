function allCombinationOfAString(s) {
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if(i == j){
                continue;
            }
            let result = s.split('');
            let temp = result[j];
            result[j] = result[i]
            result[i] = temp;
            console.log(result.join(''));
        }
    }
}
allCombinationOfAString('chandhru')