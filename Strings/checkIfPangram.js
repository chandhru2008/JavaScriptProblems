var checkIfPangram = function(sentence) {
    let obj = {};
    
    if (sentence.length < 26) {
        return false;
    }
    
    for (let char of sentence) {
        if (char >= 'a' && char <= 'z') {
            obj[char] = true;
        }
    }
    
    return Object.keys(obj).length === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));