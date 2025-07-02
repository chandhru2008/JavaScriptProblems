var sortPeople = function (names, heights) {
    let obj = {};
    let result = [];
    for (let i = 0; i < names.length; i++) {
        obj[heights[i]] = names[i]
    }
    let values = Object.values(obj);
    for (let i = values.length - 1; 0 <= i; i--) {
        result.push(values[i]);
    }
    return result;
};

console.log(sortPeople(names = ["Mary","John","Emma"], heights = [180,165,170]));