var countWords = function(words1, words2) {
    const map1 = {};
    const map2 = {};
    let count = 0;

    for (let word of words1) {
        map1[word] = (map1[word] || 0) + 1;
    }

    for (let word of words2) {
        map2[word] = (map2[word] || 0) + 1;
    }

    for (let word in map1) {
        if (map1[word] === 1 && map2[word] === 1) {
            count++;
        }
    }

    return count;
};

console.log(countWords(["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]))