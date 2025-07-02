var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // swap s[left] and s[right]
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

console.log(reverseString(["h","e","l","l","o"]))