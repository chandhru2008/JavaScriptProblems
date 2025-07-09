const arr = [1, -4, 5, -3, 6, 7];

const sumOfPositives = arr
  .filter(num => num > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum of positive elements:", sumOfPositives);