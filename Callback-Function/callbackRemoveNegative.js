function filterArray(arr, callback) {
  return arr.filter(callback);
}

const isPositive = num => num >= 0;

const numbers = [1, -3, 5, -7, 9, -2];
const positiveNumbers = filterArray(numbers, isPositive);

console.log("Filtered array:", positiveNumbers);