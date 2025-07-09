
const arr = [12, 46, 32, 64];


const sorted = [...arr].sort((a, b) => a - b);


let median;
const mid = Math.floor(sorted.length / 2);
if (sorted.length % 2 === 0) {
  median = (sorted[mid - 1] + sorted[mid]) / 2;
} else {
  median = sorted[mid];
}

const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;

console.log("Median:", median); 
console.log("Mean:", mean); 