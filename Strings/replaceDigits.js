var replaceDigits = function (s) {
    let result = '';

    for (let i = 1; i < s.length; i += 2) {
        let prevChar = s[i - 1];
        let shift = Number(s[i]);
        let newChar = String.fromCharCode(prevChar.charCodeAt(0) + shift);

        result += prevChar + newChar;
    }

  
    if (s.length % 2 !== 0) {
        result += s[s.length - 1];
    }

    return result;
};


console.log(replaceDigits("a1c1e1"));