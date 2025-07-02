var sortSentence = function (s) {
    let result = s.split(" ").sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    let ans = "";
    for (let w of result) {
        ans += w.slice(0, w.length - 1)+ ' ';
    }
    return ans.trim();
};

console.log(sortSentence('is2 sentence4 This1 a3'))