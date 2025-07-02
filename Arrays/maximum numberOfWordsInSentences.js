function mostWordsFound(sentences) {
    let length = 0
    for(let i= 0; i < sentences.length; i++){
        let sentence = sentences[i].split(" ");
        if(sentence.length > length){
            length = sentence.length;
        }
    }
    return length;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))