var numJewelsInStones = function(jewels, stones) {
    return stones.split('').filter(c => jewels.includes(c)).length;
};

console.log(numJewelsInStones("aA", "aAAbbbb"))