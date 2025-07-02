function maxProductDifference(nums){
let sorted  = nums.sort((a,b)=> a - b);
return (sorted[sorted.length-1]*sorted[sorted.length-2]) - (sorted[0]*sorted[1])
};
console.log(maxProductDifference([5,6,2,7,4]))