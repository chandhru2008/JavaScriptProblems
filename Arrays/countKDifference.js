var countKDifference = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            let diff = Math.abs(nums[i] - nums[j]);
            if(diff == k){
                count++;
            }
        }
    }
    return count;
};

console.log(countKDifference([1,2,2,1],1))